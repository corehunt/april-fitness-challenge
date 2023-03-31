import { createUserWithEmailAndPassword } from "firebase/auth";
import React, { useState } from "react";
import { auth } from "../../firebase";
import { Link, useNavigate } from "react-router-dom";

export const Register = (props) => {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');
    const navigate = useNavigate();
    
    const handleSubmit = (e) => {
        e.preventDefault();
        createUserWithEmailAndPassword(auth, email, pass)
            .then((userCredential) => {
                navigate('/');
                console.log(userCredential);
            })
            .catch((error) => {
                console.log(error);
            })
        console.log("Successfully created an account with email " + email);
    }
    
    return (
        <div className="auth-form-container">
            <h2>Register</h2>
            <form className="register-form" onSubmit={handleSubmit}>
                <label>First Name</label>
                <input 
                    value={firstName} 
                    onChange={(e) => setFirstName(e.target.value)}
                    name="firstName" 
                    placeholder="First Name" />
                <label>Last Name</label>
                <input 
                    value={lastName} 
                    onChange={(e) => setLastName(e.target.value)} 
                    name="lastName" 
                    placeholder="Last Name" />
                <label htmlFor="email">Email</label>
                <input 
                    value={email} onChange={(e) => setEmail(e.target.value)} 
                    type="email" 
                    placeholder="youremail@gmail.com" 
                    id="email" 
                    name="email" />
                <label htmlFor="password">Password</label>
                <input 
                    value={pass} 
                    onChange={(e) => setPass(e.target.value)} 
                    type="password" 
                    placeholder="********" 
                    id="password" 
                    name="password" />
                <button>Create Account</button>
            </form>
            <button className="link-btn">Already have an account?<Link to="/"> Log in</Link></button>
        </div>
    )
 }