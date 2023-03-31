import React, { useState } from "react";
import './App.css';
import { Login } from "./components/auth/Login";
import { Register } from "./components/auth/Register";
import Leaderboard from "./components/Leaderboard";
import { Routes, Route } from "react-router-dom";
import Submission from "./components/Submission";
import { Link } from "react-router-dom";
import { Dashboard } from "./components/Dashboard";


const App = () => {
    return(
        <div className="App">
            <Routes>
                <Route path="/" element={<Login />} />
                <Route path="/register" element={<Register />} />
                <Route path="/dashboard" element={<Dashboard />} />
                <Route path="/leaderboard" element={<Leaderboard />} />
                <Route path="/submission" element={<Submission />} />
            </Routes>
        </div>
    ); 
}

export default App;