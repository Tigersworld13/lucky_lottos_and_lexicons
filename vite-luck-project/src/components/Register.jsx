import React, { useState } from "react";


export const Register = (props) => {
    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');
    const [name, setName] = useState('');
    // const [birthdate, setBirthdate] = useState('')
    
     const handleSubmit = (e) => {
        e.preventDefault();
        console.log(email);
     }

    return (
        <div className="auth-form-container">
            <h2>Register</h2>
            <form className="register-form" onSubmit={handleSubmit}>
                <label htmlFor="name">Full Name</label>
                <input value={name} onChange={(e) => setName(e.target.value)} type="name" placeholder="full name" id="name" name="name" />
                {/* <input value={name} name="name" id="name" placeholder="Full Name" /> */}
                {/* <label htmlFor="birthdate">Birthdate</label> */}
                {/* <input value={birthdate} name="birthdate" id="birthdate" placeholder="Birthdate" /> */}
                <label htmlFor="email">email</label>
                <input value={email} onChange={(e) => setEmail(e.target.value)} type="email" placeholder="youremail@hotmail.com" id="email" name="email" />
                <label htmlFor="password">password</label>
                <input value={pass} onChange={(e) => setPass(e.target.value)} type="password" placeholder="********" id="password" name="password" />
                <button className="Link-btn" type="submit">Log In</button>
            </form>
            <button onClick={() => props.onFormSwitch('login')}>Already have an account? Login here!</button>
        </div>
    )
}