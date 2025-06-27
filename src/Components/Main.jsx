import React from 'react';
import styles from './Main.module.css';
import {useNavigate } from 'react-router-dom';

const Main = () => {
    let nav=useNavigate();

    let handleClick=()=>{
        // alert("Hello");
        nav("/editor")
    }
    
  return (
    <>
      <section className={styles.hero}>
        <h1 className={styles.heroTitle}>You’ve never seen<br />a resume builder this good.</h1>
        <p className={styles.heroText}>Every single part of your resume built to impress employers.</p>
       <button className={styles.createResumeLarge} onClick={handleClick}>Create My Resume</button>
      
      </section>

      <section className={styles.features}>
        <div className={styles.feature}>
          <img src="https://d1civoyjepycei.cloudfront.net/static/img/icons/icon-ats.8b52d0db4ba0.svg" alt="ATS Friendly" />
          <h3>ATS Friendly</h3>
          <p>No bots will stand in your way.</p>
        </div>
        <div className={styles.feature}>
          <img src="https://d1civoyjepycei.cloudfront.net/static/img/icons/icon-coverletter.bc0148b2ffcc.svg" alt="Stunning Visuals" />
          <h3>Stunning Visuals</h3>
          <p>Guaranteed to catch the eye.</p>
        </div>
        <div className={styles.feature}>
          <img src="https://d1civoyjepycei.cloudfront.net/static/img/icons/icon-readability.5547272bb2d8.svg" alt="Professional Typography" />
          <h3>Professional Typography</h3>
          <p>Polished look, optimal readability.</p>
        </div>
      </section>
    </>
  );
};

export default Main;
