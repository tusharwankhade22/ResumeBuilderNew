import React, { useState } from 'react';
import styles from './Projects.module.css';
import { useNavigate } from 'react-router-dom';

function Projects() {
  const navigate = useNavigate();

  const [project, setProject] = useState({
    projectName: '',
    description: '',
    technologies: '',
    projectLink: '',
    startMonth: '',
    startYear: '',
    endMonth: '',
    endYear: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProject({
      ...project,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(project);
    localStorage.setItem('project', JSON.stringify(project));

    alert('Project Details Saved Successfully!');
    navigate('/editor/skill');
  };

  const onPrev = () => {
    navigate('/editor/edu');
  };

  return (
    <div className={styles.container}>
      <h1>Projects</h1>
      <form className={styles.form} onSubmit={handleSubmit}>
        <div className={styles.inputGroup}>
          <label>Project Name</label>
          <input
            type="text"
            name="projectName"
            placeholder="e.g. Portfolio Website"
            value={project.projectName}
            onChange={handleChange}
          />
        </div>

        <div className={styles.inputGroup}>
          <label>Description</label>
          <textarea
            name="description"
            rows="4"
            placeholder="Brief description of the project"
            value={project.description}
            onChange={handleChange}
          ></textarea>
        </div>

        <div className={styles.inputGroup}>
          <label>Technologies Used</label>
          <input
            type="text"
            name="technologies"
            placeholder="e.g. React, Node.js, MongoDB"
            value={project.technologies}
            onChange={handleChange}
          />
        </div>

        <div className={styles.inputGroup}>
          <label>Project Link</label>
          <input
            type="url"
            name="projectLink"
            placeholder="e.g. https://github.com/username/project"
            value={project.projectLink}
            onChange={handleChange}
          />
        </div>

        <div className={styles.row}>
          <div className={styles.inputGroup}>
            <label>Start Month</label>
            <input
              type="text"
              name="startMonth"
              placeholder="e.g. January"
              value={project.startMonth}
              onChange={handleChange}
            />
          </div>
          <div className={styles.inputGroup}>
            <label>Start Year</label>
            <input
              type="text"
              name="startYear"
              placeholder="e.g. 2023"
              value={project.startYear}
              onChange={handleChange}
            />
          </div>
        </div>

        <div className={styles.row}>
          <div className={styles.inputGroup}>
            <label>End Month</label>
            <input
              type="text"
              name="endMonth"
              placeholder="e.g. December"
              value={project.endMonth}
              onChange={handleChange}
            />
          </div>
          <div className={styles.inputGroup}>
            <label>End Year</label>
            <input
              type="text"
              name="endYear"
              placeholder="e.g. 2023"
              value={project.endYear}
              onChange={handleChange}
            />
          </div>
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

export default Projects;
