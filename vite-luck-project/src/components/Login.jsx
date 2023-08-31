import React from 'react';
import { useContext, useState } from 'react';
import { userContext } from "../App";
import { useNavigate } from 'react-router-dom';
import api from '../api/axios';

const LoginPage = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const { setUser } = useContext(userContext);
    const navigate = useNavigate();

    const logIn = async(e) => {
        e.preventDefault()
        let response = await api.post('http://127.0.0.1:8000/signin/', {
            "email" : username,
            "password" : password
        })
        .catch((err) => {
            alert("incorrect credentials")
        })
        let user = response.data.user
        let token = response.data.token
        setUser(user)
        localStorage.setItem("token", token)
        navigate("/home")
    }



    return (
        <div className="login-component">
            <form onSubmit={(e) => logIn(e)}>
            <h2>Log in</h2>
                <div className="input-group">
                    <label htmlFor="username">Username:</label>
                    <input 
                        type="text" 
                        id="username" 
                        value={username} 
                        onChange={(e) => setUsername(e.target.value)} 
                        required 
                    />
                </div>
                <div className="input-group">
                    <label htmlFor="password">Password:</label>
                    <input 
                        type="password" 
                        id="password" 
                        value={password} 
                        onChange={(e) => setPassword(e.target.value)} 
                        required 
                    />
                </div>
                <button type="submit">Login</button>
            </form>
        </div>
    );
};

export default LoginPage;
