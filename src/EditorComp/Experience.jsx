import React, { useState } from 'react';
import styles from './Experience.module.css';
import { useNavigate } from 'react-router-dom';

function Experience() {
  const navigate = useNavigate();

  const [experience, setExperience] = useState({
    jobTitle: '',
    companyName: '',
    startMonth: '',
    startYear: '',
    endMonth: '',
    endYear: '',
    isPresent: false,
    description: ''
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setExperience({
      ...experience,
      [name]: type === 'checkbox' ? checked : value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(experience);
    localStorage.setItem('experience', JSON.stringify(experience));
    alert("Experience saved successfully!");
    navigate("/editor/edu");
  };

  const onPrev = () => {
    navigate("/editor/ps");
  };

  return (
    <div className={styles.container}>
      <h1>Experience</h1>
      <form className={styles.form} onSubmit={handleSubmit}>
        <div className={styles.inputGroup}>
          <label>Job Title</label>
          <input type="text" name="jobTitle" placeholder="Job Title" value={experience.jobTitle} onChange={handleChange} />
        </div>

        <div className={styles.inputGroup}>
          <label>Company / Organization Name</label>
          <input type="text" name="companyName" placeholder="Company Name" value={experience.companyName} onChange={handleChange} />
        </div>

        <div className={styles.row}>
          <div className={styles.inputGroup}>
            <label>Start Month</label>
            <input type="text" name="startMonth" placeholder="e.g. January" value={experience.startMonth} onChange={handleChange} />
          </div>
          <div className={styles.inputGroup}>
            <label>Start Year</label>
            <input type="text" name="startYear" placeholder="e.g. 2023" value={experience.startYear} onChange={handleChange} />
          </div>
        </div>

        <div className={styles.row}>
          <div className={styles.inputGroup}>
            <label>End Month</label>
            <input
              type="text"
              name="endMonth"
              placeholder="e.g. December"
              value={experience.isPresent ? '' : experience.endMonth}
              onChange={handleChange}
              disabled={experience.isPresent}
            />
          </div>
          <div className={styles.inputGroup}>
            <label>End Year</label>
            <input
              type="text"
              name="endYear"
              placeholder="e.g. 2024"
              value={experience.isPresent ? '' : experience.endYear}
              onChange={handleChange}
              disabled={experience.isPresent}
            />
          </div>
        </div>

        <div className={styles.checkboxGroup}>
          <input type="checkbox" name="isPresent" checked={experience.isPresent} onChange={handleChange} />
          <label>Currently Working Here</label>
        </div>

        <div className={styles.inputGroup}>
          <label>Description</label>
          <textarea name="description" rows="5" placeholder="Describe your role..." value={experience.description} onChange={handleChange}></textarea>
        </div>

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

export default Experience;
