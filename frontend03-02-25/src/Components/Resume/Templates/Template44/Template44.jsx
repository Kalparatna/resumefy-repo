import React, { forwardRef } from "react";
import styles from "./Template44.module.css";
import { FaEnvelope, FaPhone, FaLinkedin } from "react-icons/fa";

const Template44 = forwardRef(({ information }, ref) => {
  const info = {
    basicInfo: information?.basicInfo || {
      name: "FRANKLIN BRIGGS",
      title: "IT PROJECT MANAGER",
      email: "f.briggs@resumelab.com",
      phone: "774-987-4008",
      linkedin: "linkedin.com/franklinbriggsrl",
      summary: `IT Professional and project manager with over 8 years of experience specializing in IT department management for international logistics companies. I can implement effective IT strategies at local and global levels. My greatest strength is business awareness, which enables me to permanently streamline infrastructure and applications.`
    },
    workExp: information?.workExp || [
      {
        title: "IT Project Manager",
        company: "SOFTWARE HOUSE, ROCKVILLE, MD, USA",
        startDate: "2014-12",
        endDate: "PRESENT",
        description: [
          "Responsible for creating, improving, and developing IT project strategies.",
          "Manage project teams and contractors.",
          "Plan and monitor IT budgets.",
          "Initiate and manage projects that provide new solutions and improvements.",
          "Supervise timely accomplishment of project objectives.",
          "Cross-trained more than 30 employees in two months.",
        ],
      },
      {
        title: "IT Support Consultant",
        company: "XYZ LOGISTICS, ROCKVILLE, MD, USA",
        startDate: "2005-11",
        endDate: "2012-11",
        description: [
          "Managed IT infrastructure.",
          "Prepared infrastructure performance analyses.",
          "Managed projects and support related to SAP modules.",
          "Implemented systems (ERP, WMS, CRM, ECM).",
        ],
      },
    ],
    education: information?.education || [
      {
        degree: "Management and Information Systems, MBA",
        institution: "MARYLAND A&M UNIVERSITY",
        startDate: "2002-09",
        endDate: "2005-06",
      },
      {
        degree: "Computer Science and Databases, Bachelor of Science",
        institution: "MARYLAND A&M UNIVERSITY",
        startDate: "1997-09",
        endDate: "2001-05",
      },
    ],
    skills: information?.skills || ["Project management", "Team management", "Lean management"],
    languages: information?.languages || ["English"],
    certificates: information?.certificates || [
      { name: "ITIL Foundation v3", date: "2013-12" },
      { name: "LEAN IT Foundation", date: "2011-07" },
      { name: "PRINCE2® Foundation", date: "2006-06" },
    ],
  };

  return (
    <div className={styles.resumeContainer} ref={ref}>
      
      {/* Header Section */}
      <div className={styles.header}>
        <h1>{info.basicInfo.name}</h1>
        <p className={styles.title}>{info.basicInfo.title}</p>
        <p className={styles.summary}>{info.basicInfo.summary}</p>
        <div className={styles.contact}>
          <span><FaEnvelope /> {info.basicInfo.email}</span>
          <span><FaPhone /> {info.basicInfo.phone}</span>
          <span><FaLinkedin /> <a href={`https://${info.basicInfo.linkedin}`} target="_blank" rel="noopener noreferrer">{info.basicInfo.linkedin}</a></span>
        </div>
      </div>

      {/* Work History Section */}
      <div className={styles.section}>
        <h2>WORK HISTORY</h2>
        {info.workExp.map((job, index) => (
          <div key={index} className={styles.job}>
            <h3>{job.title}</h3>
            <p>{job.company}</p>
            <span>{job.startDate} - {job.endDate}</span>
            <ul>
              {job.description.map((desc, i) => (
                <li key={i}>{desc}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      {/* Education Section */}
      <div className={styles.section}>
        <h2>EDUCATION</h2>
        {info.education.map((edu, index) => (
          <div key={index} className={styles.education}>
            <h3>{edu.degree}</h3>
            <p>{edu.institution}</p>
            <span>{edu.startDate} - {edu.endDate}</span>
          </div>
        ))}
      </div>

      {/* Skills Section */}
      <div className={styles.section}>
        <h2>SKILLS</h2>
        <ul className={styles.skills}>
          {info.skills.map((skill, index) => (
            <li key={index}>{skill}</li>
          ))}
        </ul>
      </div>

      {/* Languages Section */}
      <div className={styles.section}>
        <h2>LANGUAGES</h2>
        <ul className={styles.languages}>
          {info.languages.map((lang, index) => (
            <li key={index}>{lang}</li>
          ))}
        </ul>
      </div>

      {/* Certificates Section */}
      <div className={styles.section}>
        <h2>CERTIFICATES</h2>
        {info.certificates.map((cert, index) => (
          <div key={index} className={styles.certificate}>
            <p>{cert.name}</p>
            <span>{cert.date}</span>
          </div>
        ))}
      </div>

    </div>
  );
});

export default Template44;
