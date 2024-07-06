import React, { useState } from "react";
import "./signup.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Signup = () => {
    const navigate = useNavigate();

    const [user, setUser] = useState({
        name: "",
        email:"",
        password:"",
        reEnterPassword: ""
    });

    const handleChange = e => {
        const { name, value } = e.target;
        setUser({
            ...user,
            [name]: value
        });
    };

    const signup = () => {
        const { name, email, password, reEnterPassword } = user;

        // Basic client-side validation
        if (name && email && password && (password === reEnterPassword)) {
            axios.post("http://localhost:4000/signup", user)
                .then(res => {
                    alert(res.data.message);
                    navigate("/"); // Navigate to login page on successful signup
                })
                .catch(error => {
                    console.error("Signup Error:", error);
                    alert("Signup failed. Please try again."); // Handle server errors or other issues
                });
        } else {
            alert("Invalid input. Please fill in all fields correctly.");
        }
    };

    return (
        <div className="signup">
            <h1>SignUp</h1>
            <input type="text" name="name" value={user.name} placeholder="Your Name" onChange={handleChange} />
            <input type="text" name="email" value={user.email} placeholder="Your Email" onChange={handleChange} />
            <input type="password" name="password" value={user.password} placeholder="Your Password" onChange={handleChange} />
            <input type="password" name="reEnterPassword" value={user.reEnterPassword} placeholder="Re-enter Password" onChange={handleChange} />
            <div className="button" onClick={signup}>SignUp</div>
            <div>or</div>
            <div className="button" onClick={() => navigate("/")}>Login</div>
        </div>
    );
};

export default Signup;
