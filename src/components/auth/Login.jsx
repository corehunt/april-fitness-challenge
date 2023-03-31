import { signInWithEmailAndPassword } from "firebase/auth";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { auth } from "../../firebase";


export const Login = (props) => {
    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        try {
            setError("");
            signInWithEmailAndPassword(auth, email, pass)
            .then((userCredential) => {
                navigate('/dashboard');
                console.log(userCredential);
            })
        } catch {
            setError("Failed to log in")
        }
        console.log("successfully signed in as " + email);
    }
    
    return (
        <div className="auth-form-container">
            <h2>Login</h2>
            <form className="login-form" onSubmit={handleSubmit}>
                <label htmlFor="email">Email</label>
                <input value={email} onChange={(e) => setEmail(e.target.value)} type="email" placeholder="youremail@gmail.com" id="email" name="email" />
                <label htmlFor="password">Password</label>
                <input value={pass} onChange={(e) => setPass(e.target.value)} type="password" placeholder="********" id="password" name="password" />
                <button>Log In</button>
            </form>
            <button className="link-btn" Link to="/register">Don't have an account? <Link to="/register">Register here.</Link></button>
        </div>
    )
 }