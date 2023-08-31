import { useRef, useState, useEffect } from "react";
import { faCheck, faTimes, faInfoCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import api from "../api/axios";

// validations
const USER_REGEX = /^[a-zA-Z][a-zA_Z0-9_]{3,23}$/;
const PWD_REGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%]).{8,24}$/;
const REGISTER_URL = 'api/v1/user_app/signup/'
const Register = () => {
    const userRef = useRef();
    const errRef = useRef();
    // allows us to set focus on user input when component loads as well as notify error

    // personal note i'm not sure if were preventing default to keep page from refreshing

    const [user, setUser] = useState('')
    const [validName, setValidName] = useState(false);
    const [userFocus, setUserFocus] = useState(false);

    const [pwd, setPwd] = useState('')
    const [validPwd, setValidPwd] = useState(false);
    const [pwdFocus, setPwdFocus] = useState(false);

    const [matchPwd, setMatchPwd] = useState('')
    const [validMatch, setValidNMatch] = useState(false);
    const [matchFocus, setMatchFocus] = useState(false);

    const [errMsg, setErrMsg] = useState('');
    const [success, setSuccess] = useState(false);


    useEffect(() => {
        if (userRef.current){
        userRef.current.focus();
        }
    }, [])
// sets the focus for when the component loads^
    useEffect(() => {
        const result = USER_REGEX.test(user);
        console.log(result);
        console.log(user);
        setValidName(result);
        
    }, [user])


    useEffect(() => {
        const result = PWD_REGEX.test(pwd);
        console.log(result);
        console.log(pwd);
        setValidPwd(result);
        const match = pwd === matchPwd;
        setValidNMatch(match);
    }, [pwd, matchPwd])
    

    // setting error message to  clear out once its corrected
    useEffect(() => {
        setErrMsg('');

    }, [user, pwd, matchPwd])

    const handleSubmit = async (e) => {
        e.preventDefault();
        // if button enabled with JS hack
        const v1 = USER_REGEX.test(user);
        const v2 = PWD_REGEX.test(pwd); 
        if (!v1 || !v2) {
            setErrMsg("invalid Entry");
            return;
        }
        try {
            const response = await api.post(REGISTER_URL,
                JSON.stringify({email: user, password: pwd}),                        
                // above make sure this is what the backend is looking for ***
                {
                    headers: { 'Content-Type' : 'application/json'}
                                
                }
            );
            console.log(response.data);
            console.log(response.Token);
            console.log(JSON.stringify(response))
            setSuccess(true);
            if (response.data.token){
                localStorage.setItem('authToken', response.data.token);
            }
            // you can also clear the input fields here if you want
        } catch (err) {
            if (!err?.response) {
                setErrMsg('No Server Response');
            } else if (err.response?.status === 409){
                setErrMsg("Seat's taken!!! username already used")
            } else{
                setErrMsg('womp womp.. Registration Failed')
            }
            errRef.current.focus();
            }
        }
    
// axios call goes above



        console.log(validName, validPwd, validMatch);
    return(
        <>
        {success ? (
            <section>
                <h1>Success!</h1>
                <p>
                    <a href="signin/">Sign In</a>
                </p>
            </section>
            ) : (
        <section>
                <p ref={errRef} className={errMsg ? "errmsg" :
                "offscreen"} aria-live="assertive">{errMsg}</p>
                <h1>Register</h1>
                
                <form onSubmit={handleSubmit}>
                    <label htmlFor="username">
                        Username:
                        <span className={validName ? "valid" : "hide"}>
                            <FontAwesomeIcon icon={faCheck} />
                            </span>
                            <span className={validName || !user ? "hide" : "invalid"}>
                                <FontAwesomeIcon icon={faTimes} />
                                </span>


                    </label>
                            <input type="text"
                            id="username"
                            ref={userRef}
                            autoComplete="off"
                            onChange={(e) => setUser(e.target.value)}
                            required
                            aria-invalid={validName ? 'false' : 'true'}
                            aria-describedby="uidnote"
                            onFocus={() => setUserFocus(true)}
                            onBlur={() => setUserFocus(false)} 
                            />
                            <p id="uidnote" className={userFocus && user && !validName ? "instructions" : "offscreen"}>
                                <FontAwesomeIcon icon={faInfoCircle} />
                                4 to 24 characters.<br />
                                Must begin with a letter. <br />
                                Letters, Numbers, Underscores, Hyphens allowed.
                            </p>
                        <label htmlFor="password">
                            Password:
                            <span className={validPwd ? "valid" : "hide"}>
                                <FontAwesomeIcon icon={faCheck} />
                            </span>
                            <span className={validPwd || !pwd ? "hide" : "invalid"}>
                                <FontAwesomeIcon icon={faTimes} />
                            </span>
                        </label>
                        <input 
                        type="password"
                        id="password"
                        onChange={(e) => setPwd (e.target.value)}
                        required
                        aria-invalid={validPwd ? "false" : "true"}
                        aria-describedby="pwdnote"
                        onFocus={() => setPwdFocus(true)}
                        onBlur={() => setPwdFocus(false)}
                        />
                        <p id="pwdnote" className={pwdFocus && !validPwd ? "instructions" : "offscreen"}>
                            <FontAwesomeIcon icon={faInfoCircle} />
                            8 to 24 characters.
                            Must include uppercase and lowercase letters, a number and a special character. <br />
                            Allowed special characters: <span aria-label="exclamation mark">!</span>
                            <span aria-label="dollar sign">$</span> <span aria-label="percent">%</span>
                        </p>

                        <label htmlFor="confirm_pwd">
                            Confirm Password:
                            <span className={validMatch && matchPwd ? "valid" : "hide"}>
                                <FontAwesomeIcon icon={faCheck} />
                                </span>
                                <span className={validMatch || !matchPwd ? "hide" : "invalid"}>
                                    <FontAwesomeIcon icon={faTimes} />
                                    </span>
                                    </label>
                                    <input type="password"
                                    id="confirm_pwd"
                                    onChange={(e) => setMatchPwd(e.target.value)}
                                    required
                                    aria-invalid={validMatch ? "false" : "true"}
                                    aria-describedby="confirmnote"
                                    onFocus={() => setMatchFocus(true)}
                                    onBlur={() => setMatchFocus(false)}
                                     />
                                     <p id="confirmnote" className={matchFocus && !validMatch ? "instructions" :"offscreen"}>
                                        <FontAwesomeIcon icon={faInfoCircle} />
                                        Must match the first password input field
                                     </p>

                                     <button type="submit" disabled= {!validName || !validPwd || !validMatch }>Sign Up</button>
                                </form>
                                <p>
                                    Already registered?<br />
                                    <span className="line">
                                        <a href="./Login">Sign In</a>
                                    </span>
                                </p>

        </section>
            )}
            </>
    );

            }

export default Register;
