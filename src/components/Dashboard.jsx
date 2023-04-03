import React from 'react'
import Submission from './Submission'
import Leaderboard from './Leaderboard'
import { Link } from "react-router-dom";



export const Dashboard = () => {
  return (
    <div className="App">
      <button><Link to="/submission">Submit Workout</Link></button>
      <button><Link to="/leaderboard">View Leaderboard</Link></button>
    </div>
  )
}
