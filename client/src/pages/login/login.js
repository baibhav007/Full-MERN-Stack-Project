import React, { useState } from "react";
import "./login.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Login = ({ updateUser }) => {
    const navigate = useNavigate();

    const [user, setUser] = useState({
        email: "",
        password: ""
    });

    const handleChange = e => {
        const { name, value } = e.target;
        setUser(prevUser => ({
            ...prevUser,
            [name]: value
        }));
    };

    const login = () => {
        axios.post("http://localhost:4000/login", user)
            .then(res => {
                alert(res.data.message);
                updateUser(res.data.user);
                navigate("/home"); // Navigate to homepage on successful login
            })
            .catch(error => {
                console.error("Login error:", error);
                // Handle login errors
            });
    };

    return (
        <div className="login">
            <h1>Login</h1>
            <input type="text" name="email" value={user.email} onChange={handleChange} placeholder="Enter your Email" />
            <input type="password" name="password" value={user.password} onChange={handleChange} placeholder="Enter your Password" />
            <div className="button" onClick={login}>Login</div>
            <div>or</div>
            <div className="button" onClick={() => navigate("/signup")}>Sign Up</div>
        </div>
    );
};

export default Login;
