import React, { forwardRef, useState, useEffect } from "react";
import styles from "./Template59.module.css";
import backgroundImage from "./background.jpg";

const Template59 = forwardRef(({ information, sections, activeColor }, ref) => {
  const defaultInfo = {
    basicInfo: {
      name: "Morgan Smith",
      title: "Frontend Developer | React.js Specialist",
      phone: "+1234567890",
      email: "john.doe@example.com",
      github: "https://github.com/johndoe-445564/",
      linkedin: "https://linkedin.com/in/johndoe-44543",
    },
    workExp: [
      { title: "Senior Frontend Engineer", companyName: "Tech Corp", startDate: "2020-01-01", endDate: "2023-01-01", location: "London" },
      { title: "Frontend Developer", companyName: "Web Solutions Inc.", startDate: "2018-06-01", endDate: "2019-12-31", location: "London" }
    ],
    education: [
      { title: "Bachelor's in Computer Science", college: "XYZ University", startDate: "2016-01-01", endDate: "2020-01-01" }
    ],
    projects: [
      { title: "Portfolio Website", overview: ["Built a personal portfolio website using React.js.", "Implemented animations with Framer Motion."] },
      { title: "E-commerce Platform", overview: ["Developed an e-commerce website with React and Redux.", "Integrated Stripe API for payments."] }
    ],
    achievements: ["Recognized as 'Employee of the Month' at Tech Corp - March 2022.", "Top 10 finalist in an international Hackathon."],
    skills: ["React.js", "Next.js", "JavaScript", "TypeScript", "Redux", "Tailwind CSS", "Node.js"],
    languages: ["English", "Spanish", "Hindi"],
    summary: "Dynamic and detail-oriented Frontend Developer with [X years] of experience in designing and implementing user-friendly web applications. Proficient in HTML, CSS, and JavaScript, with hands-on experience in modern frameworks such as React, Angular, or Vue.js. Strong understanding of responsive design principles and performance optimization techniques. Passionate about creating interactive and engaging user experiences, collaborating effectively within cross-functional teams, and continuously learning to enhance technical skills and contribute to innovative solutions.",
  };

  const [info, setInfo] = useState(defaultInfo);

  // Update state when user provides input
  useEffect(() => {
    if (!information || !sections) return; // Prevent undefined errors
  
    setInfo((prevInfo) => ({
      basicInfo: { ...prevInfo.basicInfo, ...information[sections.basicInfo]?.detail },
      workExp: information[sections.workExp]?.details?.length > 0 ? information[sections.workExp].details : prevInfo.workExp,
      education: information[sections.education]?.details?.length > 0 ? information[sections.education].details : prevInfo.education,
      projects: information[sections.project]?.details?.length > 0 ? information[sections.project].details : prevInfo.projects,
      achievements: information[sections.achievement]?.points?.length > 0 ? information[sections.achievement].points : prevInfo.achievements,
      skills: information[sections.skills]?.points?.length > 0 ? information[sections.skills].points : prevInfo.skills,
      languages: information[sections.languages]?.points?.length > 0 ? information[sections.languages].points : prevInfo.languages,
      summary: information[sections.summary]?.detail || prevInfo.summary,
      other: information[sections.other]?.other || prevInfo.other,
    }));
  }, [information, sections]);
  

  return (
    <div className={styles.resumeContainer}>
      <div className={styles.resume} ref={ref} style={{ "--theme-color": activeColor, backgroundImage: `url(${backgroundImage})` }}>
        
        {/* Header */}
        <header className={styles.header}>
          <h1 className={styles.name}>{info.basicInfo.name}</h1>
          <h2 className={styles.title}>{info.basicInfo.title}</h2>
        </header>

        {/* Contact Details */}
        <section className={styles.socialsGrid}>
          <div><strong>Email:</strong> {info.basicInfo.email}</div>
          <div><strong>Phone:</strong> {info.basicInfo.phone}</div>
          <div><strong>LinkedIn:</strong> <a href={info.basicInfo.linkedin} target="_blank" rel="noreferrer">LinkedIn</a></div>
          <div><strong>GitHub:</strong> <a href={info.basicInfo.github} target="_blank" rel="noreferrer">GitHub</a></div>
        </section>

        {/* Summary */}
        <section className={styles.section}>
          <div className={styles.sectionTitle}>Summary</div>
          <p>{info.summary}</p>
        </section>

        {/* Education */}
        <section className={styles.section}>
          <div className={styles.sectionTitle}>Education</div>
          {info.education.map((edu, index) => (
            <div key={index} className={styles.educationItem}>
              <p><strong>{edu.title}</strong> | {edu.college} | {edu.startDate.split("-")[0]} - {edu.endDate.split("-")[0]}</p>
            </div>
          ))}
        </section>

        {/* Skills & Languages */}
        <section className={styles.section}>
          <div className={styles.sectionTitle}>Skills & Languages</div>
          <p><strong>Skills:</strong> {info.skills.join(", ")}</p>
          <p><strong>Languages:</strong> {info.languages.join(", ")}</p>
        </section>

        {/* Work Experience */}
        <section className={styles.section}>
          <div className={styles.sectionTitle}>Work Experience</div>
          {info.workExp.map((work, index) => (
            <div key={index} className={styles.workItem}>
              <p><strong>{work.title}</strong> | {work.companyName} | {work.location}</p>
              <p>{work.startDate.split("-")[0]} - {work.endDate.split("-")[0]}</p>
            </div>
          ))}
        </section>

        {/* Projects */}
  <section className={styles.section}>
    <div className={styles.sectionTitle}>Projects</div>
    {info.projects.map((project, index) => (
      <div key={index} className={styles.projectItem}>
        <p>
          <strong>{project.title}</strong>
        </p>
        <ul>
          {Array.isArray(project.overview) ? (
            project.overview.map((point, i) => <li key={i}>{point}</li>)
          ) : (
            <li>{project.overview || "No overview available"}</li>
          )}
        </ul>
      </div>
    ))}
  </section>

        {/* Achievements Section */}
        <section className={styles.section}>
          <div className={styles.sectionTitle}>Achievements</div>
          <ul>
            {info.achievements.map((achievement, index) => (
              <li key={index}>{achievement}</li>
            ))}
          </ul>
        </section>

      </div>
    </div>
  );
});

export default Template59;
