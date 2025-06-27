import React, { useState } from 'react';
import styles from './Skills.module.css';
import { useNavigate } from 'react-router-dom';

function Skills() {
  const navigate = useNavigate();
  const [skill, setSkill] = useState('');
  const [skillsList, setSkillsList] = useState([]);

  const handleChange = (e) => {
    setSkill(e.target.value);
  };

  const addSkill = () => {
    if (skill && !skillsList.includes(skill)) {
      setSkillsList([...skillsList, skill]);
      setSkill('');
    }
  };

  const removeSkill = (skillToRemove) => {
    setSkillsList(skillsList.filter((s) => s !== skillToRemove));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(skillsList);
    localStorage.setItem('skillsList', JSON.stringify(skillsList));

    alert('Skills Saved Successfully!');
    navigate('/editor/lang');
  };

  const onPrev = () => {
    navigate('/editor/proj');
  };

  return (
    <div className={styles.container}>
      <h1>Skills</h1>
      <form className={styles.form} onSubmit={handleSubmit}>
        <div className={styles.inputGroup}>
          <label>Add a Skill</label>
          <div className={styles.skillInput}>
            <input
              type="text"
              value={skill}
              onChange={handleChange}
              placeholder="e.g. JavaScript"
            />
            <button type="button" onClick={addSkill} className={styles.addButton}>
              Add
            </button>
          </div>
        </div>

        <div className={styles.skillsList}>
          {skillsList.map((s, index) => (
            <div key={index} className={styles.skillItem}>
              {s}
              <button
                type="button"
                onClick={() => removeSkill(s)}
                className={styles.removeButton}
              >
                &times;
              </button>
            </div>
          ))}
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

export default Skills;
