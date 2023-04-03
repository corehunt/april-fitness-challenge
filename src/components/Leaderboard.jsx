import React, { useState, useEffect } from 'react'
import { collection, getDocs } from 'firebase/firestore';
import { db } from '../firebase';
import { Link } from "react-router-dom";

const Leaderboard = () => {
  const [leaderboard, setLeaderboard] = useState([]);

  useEffect(() => {
    getSubmissions()
  }, [])

  useEffect(() => {
    console.log(leaderboard)
  }, [leaderboard])

  function getSubmissions() {
    const submissionCollectionRef = collection(db, 'submission')
    getDocs(submissionCollectionRef)
    .then(response => {
      console.log(response.docs)
      const subs = response.docs.map(doc => ({
        data: doc.data(), 
        id: doc.id,
      }))
      setLeaderboard(subs)
    })
    .catch(error => console.log(error.message));
  }
  
  
  return (
    <div>
      <h1>Leaderboard</h1>
      <button onClick={() => getSubmissions()}>Refresh Leaderboard</button>
      <button><Link to="/dashboard">Back to Dashboard</Link></button>
      <ul>
        {leaderboard.map(submission => <li key={submission.id}>{submission.data.name}</li>)}
      </ul>
      

    </div>
  )
}

export default Leaderboard