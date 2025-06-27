import React, { useState } from 'react';
import styles from './SocialMediaLinks.module.css';
import { useNavigate } from 'react-router-dom';

function SocialMediaLinks() {
  const navigate = useNavigate();
  const [links, setLinks] = useState({
    twitter: '',
    linkedin: '',
    github: '',
    website: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setLinks({
      ...links,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(links);

    const resume = {
      personalDetails: JSON.parse(localStorage.getItem('personalDetails') || '{}'),
      profileSummary: localStorage.getItem('profileSummary') || '',
      experience: JSON.parse(localStorage.getItem('experience') || '{}'),
      education: JSON.parse(localStorage.getItem('education') || '{}'),
      project: JSON.parse(localStorage.getItem('project') || '{}'),
      skillsList: JSON.parse(localStorage.getItem('skillsList') || '[]'),
      languagesList: JSON.parse(localStorage.getItem('languagesList') || '[]'),
      socialLinks: links  // from component state
    };
   
  //Persist the entire resume
  localStorage.setItem('resumeData', JSON.stringify(resume));
    alert('Social Media Links Saved Successfully!');
    navigate('/preview')
    // Navigate to the next section or perform desired action
  };

  const onPrev = () => {
    navigate('/editor/lang');
  };

  return (
    <div className={styles.container}>
      <h1>Social Media Links</h1>
      <form className={styles.form} onSubmit={handleSubmit}>
        {Object.entries(links).map(([platform, url]) => (
          <div className={styles.inputGroup} key={platform}>
            <label>{platform.charAt(0).toUpperCase() + platform.slice(1)}</label>
            <input
              type="url"
              name={platform}
              placeholder={`Enter your ${platform} URL`}
              value={url}
              onChange={handleChange}
            />
          </div>
        ))}

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

export default SocialMediaLinks;
