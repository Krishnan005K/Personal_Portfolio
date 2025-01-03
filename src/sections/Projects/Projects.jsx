import React, { useState } from 'react';
import styles from './ProjectsStyles.module.css';
import decoyIntruction from '../../assets/decoy-intrusion.png';
import bookReview from '../../assets/bookReview.jpeg';
import ProjectCard from '../../common/ProjectCard';
import mockInterview from '../../assets/mockInterview.png';
import foodDelivery from '../../assets/foodHat.png';
import passwordManager from '../../assets/passwordManager.jpeg';
import taskManager from '../../assets/taskManager.png';
import recipeApp from '../../assets/recipeApp.jpeg';
import handWritten from '../../assets/Hero.png';
import ageGender from '../../assets/Hero.png';
import imageEncrptor from '../../assets/Hero.png';
import videoDescriptor from '../../assets/Hero.png';
function Projects() {
  // Define project categories
  const projects = [
    { src: mockInterview, link: "https://github.com/Krishnan005K/MockInterview_System", h3: "Prep +", p: "Mock Interview App", category: "Web Application" },
    { src: decoyIntruction, link: "https://github.com/Krishnan005K/Decoy-Intruction-detection-system", h3: "IntruDector", p: "File Decoy App", category: "Cybersecurity" },
    { src: foodDelivery, link: "https://github.com/Krishnan005K/Pizza-Hat", h3: "Pizza Hat", p: "Food Delivery App", category: "Web Application" },
    { src: bookReview, link: "https://github.com/Krishnan005K/BookReview-App", h3: "Boofoks", p: "Book Review App", category: "Web Application" },
    { src: taskManager, link: "https://github.com/Krishnan005K/Task-Manager", h3: "Tasker", p: "Personal Task Manager", category: "Web Application" },
    { src: passwordManager, link: "https://github.com/Krishnan005K/Password-Manager", h3: "PassManager", p: "Password Manager App", category: "Cybersecurity" },
    { src: recipeApp, link: "https://github.com/Krishnan005K/Recipe-API", h3: "ChooseRecipe", p: "Cooking Recipe App", category: "Web Application" },
    { src: handWritten,link:"https://github.com/Krishnan005K/Handwrittien-Digit-Recognition",h3:"DigitRecog",p:"Written Digit Recog",category:"Other"},
    { src: ageGender,link:"https://github.com/Krishnan005K/Age-and-Gender-Detection",h3:"Age&Gender",p:"Age Gender Detector",category:"Other"},
    { src: imageEncrptor,link:"https://github.com/Krishnan005K/ImageEncryption",h3:"ImgEncryptor",p:"Image Encryptor",category:"Cybersecurity"},
    { src: videoDescriptor,link:"https://github.com/Krishnan005K/Image-Desciption",h3:"VidDescrip",p:"Video Descriptor",category:"Other"},
  ];

  
  const [filter, setFilter] = useState("All");

   const handleFilterChange = (category) => {
    setFilter(category);
  };

 
  const filteredProjects = filter === "All" ? projects : projects.filter(project => project.category === filter);

  return (
    <section id="projects" className={styles.container}>
      <h1 className="sectionTitle">Projects</h1>
      
      {/* Filter Buttons */}
      <div className={styles.filterContainer}>
        <button onClick={() => handleFilterChange("All")}>All</button>
        <button onClick={() => handleFilterChange("Web Application")}>Web App</button>
        <button onClick={() => handleFilterChange("Cybersecurity")}>CyberSec</button>
        <button onClick={() => handleFilterChange("Other")}>Others</button>
      </div>
      <br />
      {/* Display filtered projects */}
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
