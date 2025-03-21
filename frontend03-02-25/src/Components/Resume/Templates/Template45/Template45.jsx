// import React, { forwardRef } from "react";
// import styles from "./Template45.module.css";
  
// const Template45 = forwardRef(({ information, sections }, ref) => {
//   const info = {
//     basicInfo: information[sections.basicInfo]?.detail || {},
//     workExperience: information[sections.workExp]?.details || [],
//     education: information[sections.education]?.details || [],
//     achievements: information[sections.achievement]?.points || [],
//     skills: information[sections.skills]?.points || [],
//     projects: information[sections.projects]?.details || [],
//     summary: information[sections.summary]?.detail || "",
//   };

//   return (
//     <div className={styles.resumeContainer} ref={ref}>
//       <div className={styles.resume}>
//         {/* Header Section */}
//         <header className={styles.header}>
//           <h1 className={styles.name}>{info.basicInfo.name || "Your Name"}</h1>
//           <p className={styles.position}>{info.basicInfo.title || "Your Position"}</p>
//         </header>
        
//         {/* Contact Info */}
//         <div className={styles.contactInfo}>
//           {info.basicInfo.email && <span>✉️ {info.basicInfo.email}</span>}
//           {info.basicInfo.phone && <span>📞 {info.basicInfo.phone}</span>}
//           {info.basicInfo.linkedin && (
//             <span>
//               🔗 <a href={info.basicInfo.linkedin} target="_blank" rel="noreferrer">LinkedIn</a>
//             </span>
//           )}
//           {info.basicInfo.github && (
//             <span>
//               🐙 <a href={info.basicInfo.github} target="_blank" rel="noreferrer">GitHub</a>
//             </span>
//           )}
//         </div>

//         <hr className={styles.divider} />
        
//         {/* Main Content */}
//         <div className={styles.mainContent}>
//           {/* Left Column */}
//           <div className={styles.leftColumn}>
//             <section className={styles.summarySection}>
//               <h2>Summary</h2>
//               <p>{info.summary}</p>
//             </section>
            
//             <section className={styles.skillsSection}>
//               <h2>Skills</h2>
//               <ul>
//                 {info.skills.map((skill, index) => (
//                   <li key={index}>{skill}</li>
//                 ))}
//               </ul>
//             </section>
//           </div>

//           {/* Right Column */}
//           <div className={styles.rightColumn}>
//             <section className={styles.experienceSection}>
//               <h2>Work Experience</h2>
//               {info.workExperience.map((exp, index) => (
//                 <div key={index} className={styles.experienceItem}>
//                   <strong>{exp.title}</strong> - {exp.companyName} ({exp.startDate} - {exp.endDate})
//                   <ul>
//                     {exp.points?.map((point, i) => (
//                       <li key={i}>{point}</li>
//                     ))}
//                   </ul>
//                 </div>
//               ))}
//             </section>

//             <section className={styles.projectsSection}>
//               <h2>Projects</h2>
//               {info.projects.map((project, index) => (
//                 <div key={index} className={styles.projectItem}>
//                   <h4>{project.title}</h4>
//                   {project.github && (
//                     <p><strong>GitHub:</strong> <a href={project.github} target="_blank" rel="noreferrer">{project.github}</a></p>
//                   )}
//                   {project.link && (
//                     <p><strong>Live Demo:</strong> <a href={project.link} target="_blank" rel="noreferrer">{project.link}</a></p>
//                   )}
//                   <ul>
//                     {project.overview?.map((point, i) => (
//                       <li key={i}>{point}</li>
//                     ))}
//                   </ul>
//                 </div>
//               ))}
//             </section>
//           </div>
//         </div>
        
//         {/* Bottom Section */}
//         <div className={styles.bottomSection}>
//           <section>
//             <h2>Education</h2>
//             {info.education.map((edu, index) => (
//               <p key={index}>
//                 <strong>{edu.title}</strong> <br />
//                 {edu.college} <br /> ({edu.startDate} - {edu.endDate})
//               </p>
//             ))}
//           </section>
          
//           <section>
//             <h2>Achievements</h2>
//             <ul>
//               {info.achievements.map((achievement, index) => (
//                 <li key={index}>{achievement}</li>
//               ))}
//             </ul>
//           </section>
//         </div>
//       </div>
//     </div>
//   );
// });

// export default Template45;  



import React, { forwardRef } from "react";
import styles from "./Template45.module.css";

const Template45 = forwardRef((props, ref) => {
  return (
    <div className={styles.resumeContainer} ref={ref}>
      <div className={styles.resume}>
        {/* Header Section */}
        <header className={styles.header}>
          <h1>Anna Taylor</h1>
          <p>Certified Medical Assistant</p>
          <div className={styles.contact}>
            <span>📧 anna@novoresume.com</span>
            <span>📞 123 4567</span>
            <span>📍 Houston, TX</span>
            <span>
              🔗 <a href="https://linkedin.com/in/anna.taylor" target="_blank" rel="noreferrer">linkedin.com/in/anna.taylor</a>
            </span>
          </div>
        </header>

        <hr className={styles.divider} />

        <div className={styles.mainContent}>
          {/* Left Column */}
          <div className={styles.leftColumn}>
            
            <section className={styles.section}>
              <h2>Work Experience</h2>
              
              <div className={styles.job}>
                <h3>Medical Assistant</h3>
                <p>First Choice Health Institute (08/2018 - Present) | Houston, TX</p>
                <ul>
                  <li>Improved patient satisfaction and achieved 12% decrease in overhead costs.</li>
                  <li>Ensured cleanliness of all facilities and exam rooms.</li>
                  <li>Assisted over 20 medical doctors, physician associates, and staff nurses.</li>
                </ul>
              </div>

              <div className={styles.job}>
                <h3>Medical Assistant</h3>
                <p>Priority Heartbeat Medical Services (03/2013 - 06/2018) | Dallas, TX</p>
                <ul>
                  <li>Monitored patient vital signs and documented information.</li>
                  <li>Coordinated with doctors regarding diet programs and treatments.</li>
                  <li>Managed health progress records and explained procedures to families.</li>
                </ul>
              </div>

              <div className={styles.job}>
                <h3>Medical Office Assistant</h3>
                <p>Health & Wealth Medical Center (06/2008 - 01/2013) | Houston, TX</p>
                <ul>
                  <li>Managed daily patient appointments and assisted with lab tests for 500+ patients.</li>
                  <li>Recorded patient vitals, including heart rate and blood pressure.</li>
                </ul>
              </div>
            </section>
          </div>

          {/* Right Column */}
          <div className={styles.rightColumn}>
            
            <section className={styles.section}>
              <h2>Skills</h2>
              <ul>
                <li>Patient Care</li>
                <li>Database Management</li>
                <li>Inventory Management</li>
                <li>Medical Billing</li>
                <li>Administrative Support</li>
                <li>Prioritization</li>
                <li>Health Regulatory Compliance</li>
                <li>Conflict Resolution</li>
              </ul>
            </section>

            <section className={styles.section}>
              <h2>Certificates</h2>
              <ul>
                <li>Certified Phlebotomy Technician – National Healthcareer Association</li>
                <li>CPR & First Aid Training – eCPRcertification.com</li>
                <li>Medical Billing and Coding Certification – AAPC</li>
                <li>Certified Medical Assistant – AAMA</li>
                <li>Advanced Care Life Support Certification – American Heart Association</li>
                <li>Basic Life Support Certification – American Heart Association</li>
              </ul>
            </section>

            <section className={styles.section}>
              <h2>Education</h2>
              <p>Bachelor of Science in Healthcare Management</p>
              <p>University of Houston (2005 - 2008)</p>
            </section>

            <section className={styles.section}>
              <h2>Languages</h2>
              <ul>
                <li>English – Native</li>
                <li>Spanish – Native</li>
                <li>French – Professional Proficiency</li>
                <li>Italian – Professional Proficiency</li>
              </ul>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
});

export default Template45;
