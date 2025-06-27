import React from 'react';
import styles from './Navbar.module.css';
import { useNavigate } from 'react-router-dom';


const Navbar = () => {
    let nav=useNavigate();

    let handleClick=()=>{
        // alert("Hello");
        nav("/editor")
    }
  return (
    <header className={styles.navbar}>
      <div className={styles.logo}>⚓Resume Master</div>
      
      {/* <div className={styles.authButtons}>
        <button className={styles.createResume} onClick={handleClick}>Create My Resume</button>
      </div> */}
    </header>
  );
};

export default Navbar;
