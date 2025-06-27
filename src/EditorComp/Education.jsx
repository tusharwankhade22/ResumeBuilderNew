import React, { useState } from 'react';
import styles from './Education.module.css';
import { useNavigate } from 'react-router-dom';

function Education() {
  const navigate = useNavigate();

  const [education, setEducation] = useState({
    degree: '',
    stream: '',
    cgpa: '',
    college: '',
    location: '',
    graduationDate: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEducation({
      ...education,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(education);
    localStorage.setItem('education', JSON.stringify(education));

    alert('Education Details Saved Successfully!');
    navigate('/editor/proj');
  };

  const onPrev = () => {
    navigate('/editor/exp');
  };

  return (
    <div className={styles.container}>
      <h1>Education</h1>
      <form className={styles.form} onSubmit={handleSubmit}>
        {/* Degree */}
        <div className={styles.inputGroup}>
          <label htmlFor="degree">Degree</label>
          <input
            id="degree"
            type="text"
            name="degree"
            placeholder="e.g. B.E, B.Tech"
            value={education.degree}
            onChange={handleChange}
          />
        </div>

        {/* Stream */}
        <div className={styles.inputGroup}>
          <label htmlFor="stream">Stream</label>
          <input
            id="stream"
            type="text"
            name="stream"
            placeholder="e.g. Computer Engineering"
            value={education.stream}
            onChange={handleChange}
          />
        </div>

        {/* CGPA / Percentage */}
        <div className={styles.inputGroup}>
          <label htmlFor="cgpa">CGPA / Percentage</label>
          <input
            id="cgpa"
            type="text"
            name="cgpa"
            placeholder="e.g. 8.5 CGPA / 75%"
            value={education.cgpa}
            onChange={handleChange}
          />
        </div>

        {/* College / University Name */}
        <div className={styles.inputGroup}>
          <label htmlFor="college">College / University Name</label>
          <input
            id="college"
            type="text"
            name="college"
            placeholder="e.g. Pune University"
            value={education.college}
            onChange={handleChange}
          />
        </div>

        {/* Location */}
        <div className={styles.inputGroup}>
          <label htmlFor="location">Location</label>
          <input
            id="location"
            type="text"
            name="location"
            placeholder="City, State"
            value={education.location}
            onChange={handleChange}
          />
        </div>

        {/* Graduation Date */}
        <div className={styles.inputGroup}>
          <label htmlFor="graduationDate">Graduation Date</label>
          <input
            id="graduationDate"
            type="month"
            name="graduationDate"
            value={education.graduationDate}
            onChange={handleChange}
          />
        </div>

        {/* Navigation Buttons */}
        <div className={styles.buttonGroup}>
          <button
            type="button"
            className={`${styles.button} ${styles.prev}`}
            onClick={onPrev}
          >
            Previous
          </button>
          <button
            type="submit"
            className={`${styles.button} ${styles.next}`}
          >
            Save & Continue
          </button>
        </div>
      </form>
    </div>
  );
}

export default Education;
