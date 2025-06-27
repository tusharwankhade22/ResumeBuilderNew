import React, { useState } from 'react';
import styles from './PersonalDetails.module.css';
import { useNavigate } from 'react-router-dom';

function PersonalDetails() {

  let nav=useNavigate();

  let onPrev=()=>{
    nav("/editor");
  }
      //use usestate hook
  let [data,setData]=useState({
      firstName:'',
      lastName:'',
      jobTitle:'',
      phone:'',
      country:'',
      city:'',
      state:'',
      pincode:'',
      email:''
  })
  let {firstName,lastName,jobTitle,phone,country,city,state,pincode,email}=data;  //destructing the object
  const handleChange=(event)=>{
      setData({
          ...data,  //spreading the object
          [event.target.name]:event.target.value
      })
  }
  const handleSubmit=(event)=>{
      event.preventDefault();
      console.log(data);
      localStorage.setItem('personalDetails', JSON.stringify(data));
      alert("Personal Details Saved sucessfully!!");
      nav("/editor/ps");
  }
  return (
    <div className={styles.container}>
      <h1>Personal Details</h1>
      <form className={styles.formGrid} >
        <div className={styles.inputGroup}>
          <label className={styles.label}>First Name</label>
          <input className={styles.input} type="text" placeholder="First Name" name="firstName" value={firstName} onChange={handleChange}/>
        </div>
        <div className={styles.inputGroup}>
          <label className={styles.label}>Last Name</label>
          <input className={styles.input} type="text" placeholder="Last Name" name='lastName' value={lastName} onChange={handleChange}/>
        </div>

        <div className={`${styles.inputGroup} ${styles.fullWidth}`}>
          <label className={styles.label}>
            Desired Job Title <span className={styles.optional}>(Optional)</span>
          </label>
          <input className={styles.input} type="text" placeholder="Desired Job Title (Optional)" name='jobTitle' value={jobTitle} onChange={handleChange}/>
        </div>

        <div className={`${styles.inputGroup} ${styles.fullWidth}`}>
          <label className={styles.label}>Phone</label>
          <input className={styles.input} type="text" placeholder="Phone" name='phone' value={phone} onChange={handleChange}/>
        </div>

        <div className={styles.inputGroup}>
          <label className={styles.label}>Country</label>
          <select className={styles.select} name='country'value={country} onChange={handleChange}>
            <option >Country</option>
            <option value="India">India</option>
            <option value="Usa">USA</option>
            <option value="Austrillia">Austrillia</option>
            <option value="Uk">Uk</option>
          </select>
        </div>
        <div className={styles.inputGroup}>
          <label className={styles.label}>City or Town</label>
          <input className={styles.input} type="text" placeholder="City or Town" name='city' value={city} onChange={handleChange} />
        </div>

        <div className={styles.inputGroup}>
          <label className={styles.label}>State or Union Territory</label>
          <input className={styles.input} type="text" placeholder="State or Union Territory" name='state' value={state} onChange={handleChange} />
        </div>
        <div className={styles.inputGroup}>
          <label className={styles.label}>PIN Code</label>
          <input className={styles.input} type="text" placeholder="PIN Code" name='pincode' value={pincode} onChange={handleChange}/>
        </div>

        <div className={`${styles.inputGroup} ${styles.fullWidth}`}>
          <label className={styles.label}>
            Email <span className={styles.required}>*</span>
          </label>
          <input className={styles.input} type="email" placeholder="Email*" name='email' value={email} onChange={handleChange}/>
        </div>
      </form>

      <div className={styles.buttonGroup}>
        <button type="button" className={`${styles.button} ${styles.prev}`} onClick={onPrev}>
          Previous
        </button>
        <button type="submit" className={`${styles.button} ${styles.next}`} onClick={handleSubmit}>
          Save & Continue
        </button>
      </div>
    </div>
  );
}

export default PersonalDetails;
