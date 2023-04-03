import React, { useState } from 'react'
import { collection, addDoc } from 'firebase/firestore'
import { db } from '../firebase'
import { getAuth } from 'firebase/auth'
import { Link } from "react-router-dom";

const Submission = () => {
  const [user, setUser] = useState('')
  const [name, setName] = useState('')
  const [calories, setCalories] = useState('')
  const [minutes, setMinutes] = useState('')
  const [type, setType] = useState('')
  const auth = getAuth();
  const currentUser = auth.currentUser

  function handleSubmit(e) {
    e.preventDefault()
    setUser(currentUser.displayName)
    console.log("this is the current user value " + currentUser.email)
    const submissionCollectionRef = collection(db, 'submission')
    addDoc(submissionCollectionRef, {user, name, calories, minutes, type}).then(response => {
      console.log(response)
      console.log("this is the current user value " + currentUser.email)
    }).catch(error => {
      console.log(error.message)
    })
  }
  
  return (
    <div>
      <h1>Submit Workout</h1>
      <form className="submission-form" onSubmit={handleSubmit}>
        <label htmlFor="name">Workout Name</label>
        <input 
          id="name"
          type="text"
          value={name}
          onChange={e => setName(e.target.value)}
          placeholder="Chest and Tris"
          required
        />
        <label htmlFor="calories">Calories Burnt</label>
        <input 
          id="calories"
          type="text"
          value={calories}
          onChange={e => setCalories(e.target.value)}
          placeholder="513"
          required
        />
        <label htmlFor="minutes">Total Minutes</label>
        <input 
          id="minutes"
          type="text"
          value={minutes}
          onChange={e => setMinutes(e.target.value)}
          placeholder="72"
          required
        />
        <label htmlFor="type">Type of Workout</label>
        <input 
          id="type"
          type="text"
          value={type}
          onChange={e => setType(e.target.value)}
          placeholder="Lifting"
          required
        />
        <button type="submit">Submit</button>
      </form>
      <div className='submission-btn'>
      <button><Link to="/dashboard">Back to Dashboard</Link></button>
      </div>
    </div>
  )
}

export default Submission