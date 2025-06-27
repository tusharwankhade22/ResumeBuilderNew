import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

import styles from './Login.module.css'
function Login() {
    //Use usenavigate hook
    let nav=useNavigate();

    //use usestate hook
    let [data,setData]=useState({
        email:'',
        password:''
    })

    let {email,password}=data;  //destructing the object
    const handleChange=(event)=>{
        setData({
            ...data,  //spreading the object
            [event.target.name]:event.target.value
        })
    }

    const handleSubmit=(event)=>{
        event.preventDefault();
        console.log(data);
        alert("Login SucessFully!!!");
        nav("/home");
    }
  return (
    <div className={styles.container}>
    
      <form className={styles.form} onSubmit={handleSubmit}>
        <h2 className={styles.title}>Login</h2>
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
          type="password"
          placeholder='Password'
          name='password'
          value={password}
          onChange={handleChange}
          required
          className={styles.input}
        />
        <button type='submit' className={styles.button}>Login</button>
        <p className={styles.text}>
          Don't have an account? <Link to="/signup" className={styles.link}>Sign Up here</Link>
        </p>
      </form>
  </div>
  )
}

export default Login