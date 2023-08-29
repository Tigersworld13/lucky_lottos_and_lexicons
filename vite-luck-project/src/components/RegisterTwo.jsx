import { useState, useContext, useEffect } from "react";
import { useContext } from "../App";
import { api } from "../utilites";
import { useNavigate } from "react-router-dom";



export const RegisterPage = () => {
const [userName, setUserName] = useState("");
const [password, setPassword] = useState("");
const {setUser} = useContext(userContext);
const navigate = useNavigate()

useEffect(() => {
    console.log("username:  ", userName );
    console.log("password:  ", password );
}, [userName, password])

const signUp = async() =>{
    e.preventDefault()
    //  "http://127.0.0.1:8000/signup/"
    let response = await api.post("users/register/", {
        "email" : userName,
        "password" : password
    })
    //  return Response({"message": "Email, and password are required fields."}, status=status.HTTP_400_BAD_REQUEST)
    let user = response.data.user
    let token = response.data.token 
    setUser(user)
    localStorage.setItem("token" , token)
    navigate("home")
}

    return(
        <form onSubmit={(e) => signUp(e)}>
            <h5>Sign UP</h5>
            <input 
            type="email"
            value={userName}
            onChange={(e) => setUserName(e.target.value)}

            />
            <input 
            type="password" 
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            />
            <input type="submit" />
            </ form>
        );
};
