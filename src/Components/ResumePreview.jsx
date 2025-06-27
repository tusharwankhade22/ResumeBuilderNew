import React, { useEffect, useState } from 'react';
import styles from './ResumePreview.module.css';
import { useNavigate } from 'react-router-dom';
import html2canvas from 'html2canvas';
import { jsPDF } from 'jspdf';

const Preview = () => {
  const navigate = useNavigate();

  const [personal, setPersonal] = useState({});
  const [summary, setSummary] = useState('');
  const [experience, setExperience] = useState({});
  const [education, setEducation] = useState({});
  const [project, setProject] = useState({});
  const [skills, setSkills] = useState([]);
  const [languages, setLanguages] = useState([]);
  const [links, setLinks] = useState({});

  useEffect(() => {
    setPersonal(JSON.parse(localStorage.getItem('personalDetails') || '{}'));
    setSummary(localStorage.getItem('profileSummary') || '');
    setExperience(JSON.parse(localStorage.getItem('experience') || '{}'));
    setEducation(JSON.parse(localStorage.getItem('education') || '{}'));
    setProject(JSON.parse(localStorage.getItem('project') || '{}'));
    setSkills(JSON.parse(localStorage.getItem('skillsList') || '[]'));
    setLanguages(JSON.parse(localStorage.getItem('languagesList') || '[]'));
    setLinks(JSON.parse(localStorage.getItem('socialLinks') || '{}'));
  }, []);

  const handleEdit = () => navigate('/editor');

  const handleDownload = () => {
    const input = document.getElementById('previewContent');
    const buttons = input.querySelectorAll('.editButton');
    buttons.forEach(btn => btn.style.display = 'none');

    html2canvas(input, { scale: 2 }).then(canvas => {
      const imgData = canvas.toDataURL('image/png');
      const pdf = new jsPDF('p', 'pt', 'a4');
      const imgWidth = pdf.internal.pageSize.getWidth();
      const imgHeight = (canvas.height * imgWidth) / canvas.width;
      pdf.addImage(imgData, 'PNG', 0, 0, imgWidth, imgHeight);
      pdf.save('resume.pdf');
      buttons.forEach(btn => btn.style.display = 'inline-block');
    });
  };

  return (
    <div className={styles.previewContainer} id="previewContent">
      {/* Sidebar */}
      <div className={styles.sidebar}>
        <div className={styles.header}>
          <h1>{personal.firstName} {personal.lastName}</h1>
          <h2>{personal.jobTitle}</h2>
        </div>

        <div className={styles.sidebarSection}>
          <h2>Contact</h2>
          {personal.email && <p>{personal.email}</p>}
          {personal.phone && <p>{personal.phone}</p>}
          {personal.city && personal.state && <p>{personal.city}, {personal.state}</p>}
          {personal.country && <p>{personal.country}</p>}
        </div>

        {skills.length > 0 && (
          <div className={styles.sidebarSection}>
            <h2>Skills</h2>
            <ul className={styles.list}>{skills.map((s, i) => <li key={i}>{s}</li>)}</ul>
          </div>
        )}

        {languages.length > 0 && (
          <div className={styles.sidebarSection}>
            <h2>Languages</h2>
            <ul className={styles.list}>{languages.map((l, i) => <li key={i}>{l}</li>)}</ul>
          </div>
        )}

        {Object.values(links).some(url => url) && (
          <div className={styles.sidebarSection}>
            <h2>Social</h2>
            <ul className={styles.socialList}>
              {links.twitter && <li><a href={links.twitter}>Twitter</a></li>}
              {links.linkedin && <li><a href={links.linkedin}>LinkedIn</a></li>}
              {links.github && <li><a href={links.github}>GitHub</a></li>}
              {links.website && <li><a href={links.website}>Website</a></li>}
            </ul>
          </div>
        )}
      </div>

      {/* Main Content */}
      <div className={styles.mainContent}>
        <div className={styles.buttons}>
          <button className={`${styles.editButton} editButton`} onClick={handleEdit}>Edit</button>
          <button className={`${styles.editButton} editButton`} onClick={handleDownload}>Download PDF</button>
        </div>

        {summary && (
          <section className={styles.section}>
            <h3>Profile Summary</h3>
            <p>{summary}</p>
          </section>
        )}

        {experience.jobTitle && (
          <section className={styles.section}>
            <h3>Experience</h3>
            <div className={styles.item}>
              <h4>{experience.jobTitle} at {experience.companyName}</h4>
              <span>
                {experience.startMonth} {experience.startYear} -{' '}
                {experience.isPresent ? 'Present' : `${experience.endMonth} ${experience.endYear}`}
              </span>
              <p>{experience.description}</p>
            </div>
          </section>
        )}

        {education.degree && (
          <section className={styles.section}>
            <h3>Education</h3>
            <div className={styles.item}>
              <h4>{education.degree} in {education.stream}</h4>
              <span>{education.college}, {education.location} | {education.graduationDate}</span>
              <p>{education.cgpa}</p>
            </div>
          </section>
        )}

        {project.projectName && (
          <section className={styles.section}>
            <h3>Projects</h3>
            <div className={styles.item}>
              <h4>{project.projectName}</h4>
              <p>{project.description}</p>
              <p><strong>Technologies:</strong> {project.technologies}</p>
              {project.projectLink && (
                <p>
                  <strong>Link:</strong> <a href={project.projectLink} target="_blank" rel="noopener noreferrer">{project.projectLink}</a>
                </p>
              )}
              <span>{project.startMonth} {project.startYear} - {project.endMonth} {project.endYear}</span>
            </div>
          </section>
        )}
      </div>
    </div>
  );
};

export default Preview;
