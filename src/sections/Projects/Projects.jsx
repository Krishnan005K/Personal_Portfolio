import styles from './ProjectsStyles.module.css';
import decoyIntruction from '../../assets/decoy-intrusion.jpeg'
import bookReview from '../../assets/bookReview.jpeg'
import ProjectCard from '../../common/ProjectCard';
import mockInterview from '../../assets/mockInterview.jpeg';
import foodDelivery from '../../assets/foodHat.jpeg';
import passwordManager from '../../assets/passwordManager.jpeg';
import taskManager from '../../assets/taskManager.jpeg';
import recipeApp from '../../assets/recipeApp.jpeg';
function Projects() {
  return (
    <section id="projects" className={styles.container}>
      <h1 className="sectionTitle">Projects</h1>
      <div className={styles.projectsContainer}>
        <ProjectCard
          src={mockInterview}
          link="https://github.com/Ade-mir/company-landing-page-2"
          h3="Prep +"
          p="Mock Interview App"
        />
        <ProjectCard
          src={foodDelivery}
          link="https://github.com/Ade-mir/company-landing-page-2"
          h3="Food Hat"
          p="Food Delivery App"
        />
        <ProjectCard
          src={decoyIntruction}
          link="https://github.com/Ade-mir/company-landing-page-2"
          h3="IntruDector"
          p="File Decoy App"
        />
        <ProjectCard
          src={bookReview}
          link="https://github.com/Ade-mir/company-landing-page-2"
          h3="Book of Books"
          p="Book Review App"
        />
      </div>
      <br/><br/>
      <div className={styles.projectsContainer}>
        <ProjectCard
          src={taskManager}
          link="https://github.com/Ade-mir/company-landing-page-2"
          h3="Tasker"
          p="Personal Task Manager"
        />
        <ProjectCard
          src={passwordManager}
          link="https://github.com/Ade-mir/company-landing-page-2"
          h3="Password Manager"
          p="Password Manager App"
        />
        <ProjectCard
          src={recipeApp}
          link="https://github.com/Ade-mir/company-landing-page-2"
          h3="Choose Ur Recipe"
          p="Cooking Recipe App"
        />
      </div>
    </section>
  );
}

export default Projects;
