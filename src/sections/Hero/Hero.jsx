import styles from './HeroStyles.module.css';
import heroImg from '../../assets/Hero.png';
import sun from '../../assets/sun.svg';
import moon from '../../assets/moon.svg';
import leetCodeLight from '../../assets/leetcode-light.png';
import leetCodeDark from '../../assets/leetcode-dark.png';
import githubLight from '../../assets/github-light.svg';
import hashnode from '../../assets/hashnode.png';
import githubDark from '../../assets/github-dark.svg';
import linkedinLight from '../../assets/linkedin-light.svg';
import linkedinDark from '../../assets/linkedin-dark.svg';
import { useTheme } from '../../common/ThemeContext';

function Hero() {
  const { theme, toggleTheme } = useTheme();

  const themeIcon = theme === 'light' ? sun : moon;
  const leetCodeIcon = theme === 'light' ? leetCodeLight : leetCodeDark; 
  const githubIcon = theme === 'light' ? githubLight : githubDark;
  const linkedinIcon = theme === 'light' ? linkedinLight : linkedinDark;

  return (
    <section id="hero" className={styles.container}>
      <div className={styles.colorModeContainer}>
        <img
          src={heroImg}
          className={styles.hero}
          alt="Profile picture "
        />
        
        <img
          className={styles.colorMode}
          src={themeIcon}
          alt="Color mode icon"
          onClick={toggleTheme}
        />
      </div>
      <div className={styles.info}>
        <h1>
          Krishnan &nbsp; K
          <br />
          
        </h1>
        <h2>Software Engineer</h2>
        <span>
          <a href="https://leetcode.com/u/krishnan005k/" target="_blank">
            <img src={leetCodeIcon} alt="Leetcode icon" />
          </a>
          <a href="https://github.com/Krishnan005K" target="_blank">
            <img src={githubIcon} alt="Github icon" />
          </a>
          <a href="https://linkedin.com/in/krishnan005k" target="_blank">
            <img src={linkedinIcon} alt="Linkedin icon" />
          </a>
          <a href="https://hashnode.com/@Krishnan005K" target="_blank">
            <img src={hashnode} alt="Hashnode icon" />
          </a>

        </span>
        <p className={styles.description}>
          Software engineer with expertise in full-stack development, cybersecurity, 
          and modern web applications, eager to create impactful solutions.
        </p>
        <a href="https://drive.google.com/file/d/1nCQsgp2JyH_rJs-hUpadedgtD8AI57E7/view?usp=drive_link" target="_blank">
          <button className="hover">Resume</button>
        </a>
      </div>
    </section>
  );
}

export default Hero;
