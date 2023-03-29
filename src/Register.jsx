import React, { useState } from "react";

export const Register = (props) => {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');
    
        const handleSubmit = (e) => {
        e.preventDefault();
        console.log(email);
    }
    
    return (
        <div className="auth-form-container">
            <h2>Register</h2>
            <form className="register-form" onSubmit={handleSubmit}>
                <label>First Name</label>
                <input value={firstName} onChange={(e) => setFirstName(e.target.value)}name="firstName" placeholder="First Name" />
                <label>Last Name</label>
                <input value={lastName} onChange={(e) => setLastName(e.target.value)} name="lastName" placeholder="Last Name" />
                <label htmlFor="email">email</label>
                <input value={email} onChange={(e) => setEmail(e.target.value)} type="email" placeholder="youremail@gmail.com" id="email" name="email" />
                <label htmlFor="password">password</label>
                <input value={pass} onChange={(e) => setPass(e.target.value)} type="password" placeholder="********" id="password" name="password" />
                <button>Log In</button>
            </form>
            <button className="link-btn"onClick={() => props.onFormSwitch('login')}>Already have an account? Log in here</button>
        </div>
    )
 }