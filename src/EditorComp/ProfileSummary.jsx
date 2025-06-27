import React, { useState } from 'react';
import styles from './ProfileSummary.module.css';
import { useNavigate } from 'react-router-dom';

function ProfileSummary() {
  const navigate = useNavigate();

  const [summary, setSummary] = useState('');

  const handleChange = (e) => {
    setSummary(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(summary);
    localStorage.setItem('profileSummary', summary);
    alert("Profile Summary saved successfully!");
    navigate("/editor/exp");
  };

  const onPrev = () => {
    navigate("/editor/pd");
  };

  return (
    <div className={styles.container}>
      <h1>Profile Summary</h1>
      <form className={styles.form} onSubmit={handleSubmit}>
        <label className={styles.label}>Summary</label>
        <textarea
          className={styles.textarea}
          placeholder="Write a short summary about yourself..."
          value={summary}
          onChange={handleChange}
          rows="6"
        />

        <div className={styles.buttonGroup}>
          <button type="button" className={`${styles.button} ${styles.prev}`} onClick={onPrev}>
            Previous
          </button>
          <button type="submit" className={`${styles.button} ${styles.next}`}>
            Save & Continue
          </button>
        </div>
      </form>
    </div>
  );
}

export default ProfileSummary;
