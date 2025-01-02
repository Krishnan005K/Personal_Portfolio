import styles from './ProjectsStyles.module.css';
import viberr from '../../assets/viberr.png';
import freshBurger from '../../assets/fresh-burger.png';
import hipsster from '../../assets/hipsster.png';
import fitLift from '../../assets/fitlift.png';
import ProjectCard from '../../common/ProjectCard';
import MockInterview from '../../assets/mock-interview.jpeg';
import FoodDelivery from '../../assets/foodHat.jpeg';
function Projects() {
  return (
    <section id="projects" className={styles.container}>
      <h1 className="sectionTitle">Projects</h1>
      <div className={styles.projectsContainer}>
        <ProjectCard
          src={MockInterview}
          link="https://github.com/Ade-mir/company-landing-page-2"
          h3="Prep +"
          p="Mock Interview App"
        />
        <ProjectCard
          src={FoodDelivery}
          link="https://github.com/Ade-mir/company-landing-page-2"
          h3="Fresh Burger"
          p="Hamburger Restaurant"
        />
        <ProjectCard
          src={hipsster}
          link="https://github.com/Ade-mir/company-landing-page-2"
          h3="Hipsster"
          p="Glasses Shop"
        />
        <ProjectCard
          src={fitLift}
          link="https://github.com/Ade-mir/company-landing-page-2"
          h3="FitLift"
          p="Fitness App"
        />
      </div>
      <div className={styles.projectsContainer}>
        <ProjectCard
          src={MockInterview}
          link="https://github.com/Ade-mir/company-landing-page-2"
          h3="Prep +"
          p="Mock Interview App"
        />
        <ProjectCard
          src={FoodDelivery}
          link="https://github.com/Ade-mir/company-landing-page-2"
          h3="Fresh Burger"
          p="Hamburger Restaurant"
        />
        <ProjectCard
          src={hipsster}
          link="https://github.com/Ade-mir/company-landing-page-2"
          h3="Hipsster"
          p="Glasses Shop"
        />
      </div>
    </section>
  );
}

export default Projects;
