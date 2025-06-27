import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

import styles from './Login.module.css'
function Signup() {
    //Use usenavigate hook
    let nav=useNavigate();

    //use usestate hook
    let [data,setData]=useState({
        username:'',
        email:'',
        password:''
    })

    let {username,email,password}=data;  //destructing the object
    const handleChange=(event)=>{
        setData({
            ...data,  //spreading the object
            [event.target.name]:event.target.value
        })
    }

    const handleSubmit=(event)=>{
        event.preventDefault();
        console.log(data);
        alert("SignUp SucessFully!!!");
        nav("/");
    }
  return (
    <div className={styles.container}>
    
      <form className={styles.form} onSubmit={handleSubmit}>
        <h2 className={styles.title}>SignUp</h2>
        <input
          type="text"
          placeholder='Username'
          name='username'
          value={username}
          onChange={handleChange}
          required
          className={styles.input}
        />
        <input
          type="email"
          placeholder='Email'
          name='email'
          value={email}
          onChange={handleChange}
          required
          className={styles.input}
        />
        <input
          type="password" placeholder='Password'
          name='password'
          value={password}
          onChange={handleChange}
          required
          className={styles.input}
        />
        <button type='submit' className={styles.button}>SignUp</button>
        <p className={styles.text}>
           Already have an account? <Link to="/" className={styles.link}>Login here</Link>
        </p>
        
      </form>
  </div>
  )
}

export default Signup