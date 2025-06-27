import React, { useState } from 'react';
import styles from './Languages.module.css';
import { useNavigate } from 'react-router-dom';

function Languages() {
  const navigate = useNavigate();
  const [language, setLanguage] = useState('');
  const [languagesList, setLanguagesList] = useState([]);

  const handleChange = (e) => {
    setLanguage(e.target.value);
  };

  const addLanguage = () => {
    if (language && !languagesList.includes(language)) {
      setLanguagesList([...languagesList, language]);
      setLanguage('');
    }
  };

  const removeLanguage = (languageToRemove) => {
    setLanguagesList(languagesList.filter((lang) => lang !== languageToRemove));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(languagesList);
    localStorage.setItem('languagesList', JSON.stringify(languagesList));

    alert('Languages Saved Successfully!');
    navigate('/editor/sml');
  };

  const onPrev = () => {
    navigate('/editor/skill');
  };

  return (
    <div className={styles.container}>
      <h1>Languages</h1>
      <form className={styles.form} onSubmit={handleSubmit}>
        <div className={styles.inputGroup}>
          <label>Add a Language</label>
          <div className={styles.languageInput}>
            <input
              type="text"
              value={language}
              onChange={handleChange}
              placeholder="e.g. English"
            />
            <button type="button" onClick={addLanguage} className={styles.addButton}>
              Add
            </button>
          </div>
        </div>

        <div className={styles.languagesList}>
          {languagesList.map((lang, index) => (
            <div key={index} className={styles.languageItem}>
              {lang}
              <button
                type="button"
                onClick={() => removeLanguage(lang)}
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

export default Languages;
