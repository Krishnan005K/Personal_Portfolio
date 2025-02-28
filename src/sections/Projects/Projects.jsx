import React, { useState } from 'react';
import styles from './ProjectsStyles.module.css';
import ProjectCard from '../../common/ProjectCard';

// Importing project images
import decoyIntruction from '../../assets/decoy-intrusion.png';
import bookReview from '../../assets/bookReview.jpeg';
import mockInterview from '../../assets/mockInterview.png';
import foodDelivery from '../../assets/foodHat.png';
import passwordManager from '../../assets/passwordManager.jpeg';
import taskManager from '../../assets/taskManager.png';
import recipeApp from '../../assets/recipeApp.jpeg';
import handWritten from '../../assets/digitRecog.jpeg';
import ageGender from '../../assets/age&Gender.png';
import imageEncrptor from '../../assets/imgEncrypt.jpeg';
import imgDescrip from '../../assets/imgDescrip.jpeg';

function Projects() {
  const [filter, setFilter] = useState("All");

  const projects = [
    { src: passwordManager, link: "https://github.com/Krishnan005K/Password-Manager", h3: "PassManager", p: "Password Manager App", category: "Cybersecurity" },
    { src: mockInterview, link: "https://github.com/Krishnan005K/MockInterview_System", h3: "Prep +", p: "Mock Interview App", category: "Web Application" },
    { src: decoyIntruction, link: "https://github.com/Krishnan005K/Decoy-Intruction-detection-system", h3: "IntruDector", p: "File Decoy App", category: "Cybersecurity" },
    { src: foodDelivery, link: "https://github.com/Krishnan005K/Pizza-Hat", h3: "Pizza Hat", p: "Food Delivery App", category: "Web Application" },
    { src: bookReview, link: "https://github.com/Krishnan005K/BookReview-App", h3: "Boofoks", p: "Book Review App", category: "Web Application" },
    { src: taskManager, link: "https://github.com/Krishnan005K/Task-Manager", h3: "Tasker", p: "Personal Task Manager", category: "Web Application" },
    { src: imgDescrip, link: "https://github.com/Krishnan005K/Image-Desciption", h3: "ImgDescrip", p: "Image Descriptor App", category: "Other" },
    { src: recipeApp, link: "https://github.com/Krishnan005K/Recipe-API", h3: "ChooseRecipe", p: "Cooking Recipe App", category: "Web Application" },
    { src: handWritten, link: "https://github.com/Krishnan005K/Handwrittien-Digit-Recognition", h3: "DigitRecog", p: "Written Digit Recog", category: "Other" },
    { src: ageGender, link: "https://github.com/Krishnan005K/Age_Gender-Detection", h3: "Age&Gender", p: "Age Gender Detector", category: "Other" },
    { src: imageEncrptor, link: "https://github.com/Krishnan005K/ImageEncryption", h3: "ImgEncryptor", p: "Img Encrytor & Decryptor", category: "Cybersecurity" },
  ];

  const filteredProjects = filter === "All" ? projects : projects.filter(project => project.category === filter);

  return (
    <section id="projects" className={styles.container}>
      <h1 className="sectionTitle">Projects</h1>

      {/* Responsive Filter Menu */}
      <div className={styles.filterContainer}>
        <div className={styles.filterMenu}>
          {['All', 'Web Application', 'Cybersecurity', 'Other'].map(category => (
            <button 
              key={category} 
              onClick={() => setFilter(category)} 
              className={filter === category ? styles.active : ""}
            >
              {category === 'Web Application' ? 'Web App' : category === 'Cybersecurity' ? 'CyberSec' : category}
            </button>
          ))}
        </div>
      </div>

      <div className={styles.projectsContainer}>
        {filteredProjects.map((project, index) => (
          <ProjectCard
            key={index}
            src={project.src}
            link={project.link}
            h3={project.h3}
            p={project.p}
          />
        ))}
      </div>
    </section>
  );
}

export default Projects;
