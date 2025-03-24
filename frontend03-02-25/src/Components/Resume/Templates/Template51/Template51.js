import React, { forwardRef } from "react";
 import { FaLinkedin, FaGithub, FaLink } from "react-icons/fa"; // Import the LinkedIn and GitHub icons
 import styles from "./Template51.module.css";
 
 const Template51 = forwardRef(({ information, sections, activeColor }, ref) => {
   const info = {
     basicInfo: information[sections.basicInfo]?.detail || {},
     workExperience: information[sections.workExp]?.details || [],
     education: information[sections.education]?.details || [],
     achievements: information[sections.achievement]?.points || [],
     skills: information[sections.skills]?.points || [],
     projects: information[sections.project]?.details || [],
     summary: information[sections.summary]?.detail || "",
     languages: information[sections.languages]?.points || [],
   };
 
   return (
     <div className={styles.resumeContainer} ref={ref}>
       <div className={styles.resume}>
         {/* Header Section */}
         <header className={styles.header}>
           <div className={styles.headerInfo}>
             <h1 className={styles.name}>
               {info.basicInfo.name || "Your Name"}
             </h1>
             <p className={styles.title}>
               {info.basicInfo.title || "Your Position"}
             </p>
           </div>
           <div className={styles.contactInfo}>
             {info.basicInfo.email && <span>✉️ {info.basicInfo.email} | </span>}
             {info.basicInfo.phone && <span>📞 {info.basicInfo.phone} | </span>}
             {info.basicInfo.linkedin && (
               <span>
                 <FaLinkedin />{" "}
                 <a
                   href={info.basicInfo.linkedin}
                   target="_blank"
                   rel="noopener noreferrer"
                 >
                   LinkedIn
                 </a>{" "}
                 |{" "}
               </span>
             )}
             {info.basicInfo.github && (
               <span>
                 <FaGithub />{" "}
                 <a
                   href={info.basicInfo.github}
                   target="_blank"
                   rel="noopener noreferrer"
                 >
                   GitHub
                 </a>
               </span>
             )}
           </div>
         </header>
 
         {/* Main Content */}
         <div className={styles.mainContent}>
           <div className={styles.leftColumn}>
             {/* Summary Section */}
             <section className={styles.summarySection}>
               <h2>Summary</h2>
               <p className={styles.summaryParagraph}>{info.summary}</p>
             </section>
 
             {/* Education Section */}
             <section className={styles.education}>
               <h2>Education</h2>
               {info.education.map((edu, index) => (
                 <div key={index} className={styles.educationItem}>
                   <div className={styles.educationContent}>
                     <div className={styles.educationTitle}>
                       <strong>{edu.title}</strong>{" "}
                     </div>
                     <div className={styles.educationCollege}>{edu.college}</div>
                     <div className={styles.educationDate}>
                       ({edu.startDate} - {edu.endDate}){" "}
                     </div>
                   </div>
                 </div>
               ))}
             </section>
 
             {/* Skills Section */}
             <section className={styles.skillsSection}>
               <h2>Skills</h2>
               <ul className={styles.skillList}>
                 {info.skills.map((skill, index) => (
                   <p key={index}>{skill}</p>
                 ))}
               </ul>
             </section>
 
             {/* Languages Section */}
             <section className={styles.languages}>
               <h2>Languages</h2>
               <ul className={styles.languageList}>
                 {info.languages.map((language, index) => (
                   <p key={index}>{language}</p>
                 ))}
               </ul>
             </section>
           </div>
 
           <div className={styles.rightColumn}>
             {/* Work Experience Section */}
             <section className={styles.experienceSection}>
               <h2>Experience</h2>
               {info.workExperience.map((exp, index) => (
                 <div key={index} className={styles.experienceItem}>
                   <div className={styles.experienceContent}>
                     <div className={styles.experienceHeader}>
                       <strong>{exp.title}</strong>
                       <span className={styles.experienceDate}>
                         {exp.startDate} - {exp.endDate}
                       </span>
                     </div>
                     <div className={styles.experienceCompanyLocation}>
                       <p>
                         {exp.companyName} | {exp.location}
                       </p>
                     </div>
                     <ul className={styles.experiencePoints}>
                       {exp.points?.map((point, i) => (
                         <li key={i}>{point}</li>
                       ))}
                     </ul>
                   </div>
                 </div>
               ))}
             </section>
 
             {/* Projects Section */}
             <section className={styles.projectSection}>
               <h2>Projects</h2>
               {info.projects.map((project, index) => (
                 <div key={index} className={styles.project}>
                   <div className={styles.projectHeader}>
                     <h4 className={styles.projectTitle}>{project.title}</h4>
 
                     <div className={styles.projectLinks}>
                       {/* GitHub Icon */}
                       {project.github && (
                         <a
                           href={project.github}
                           target="_blank"
                           rel="noopener noreferrer"
                           aria-label="GitHub Repository"
                         >
                           <FaGithub size={20} style={{ marginLeft: "10px" }} />
                         </a>
                       )}
 
                       {/* Live Demo Icon */}
                       {project.link && (
                         <a
                           href={project.link}
                           target="_blank"
                           rel="noopener noreferrer"
                           aria-label="Live Demo"
                         >
                           <FaLink size={20} style={{ marginLeft: "10px" }} />
                         </a>
                       )}
                     </div>
                   </div>
 
                   {/* Project Description Section */}
                   <ul className={styles.projectDescription}>
                     {project.points.map((point, i) => (
                       <li key={i}>{point}</li>
                     ))}
                   </ul>
                 </div>
               ))}
             </section>
 
             {/* Achievements Section */}
             <section className={styles.achievements}>
               <h2>Achievements</h2>
               <ul className={styles.achievementsList}>
                 {info.achievements.map((achievement, index) => (
                   <li key={index}>{achievement}</li>
                 ))}
               </ul>
             </section>
 
             {/* Others Section */}
             <section className={styles.others}>
               <h2>Others</h2>
               <p>Additional Information can go here...</p>
             </section>
           </div>
         </div>
       </div>
     </div>
   );
 });
 
 export default Template51;