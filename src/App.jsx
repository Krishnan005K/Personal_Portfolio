import './App.css';
import Contact from './sections/Contact/Contact';
import Footer from './sections/Footer/Footer';
import Ghibli from './sections/Ghibli/Ghibli';
import Hero from './sections/Hero/Hero';
import Projects from './sections/Projects/Projects';
import Skills from './sections/Skills/Skills';
import Views from './sections/Views/Views';
function App() {
  return (
    <>
      {/* <Views /> */}
      {/* <img style={{  borderRadius: "20px", alignSelf: "center" ,padding: "30px",marginBottom :"-250px",marginLeft:"700px"}}
                src="https://komarev.com/ghpvc/?username=Krishnan005K&label=Profile%20Views&color=0e75b6&style=flat" alt="Profile Views" /> */}
      <Hero />
      <Projects />
      <Skills />
      <Ghibli/>
      <Contact /> 
      <Footer />
    </>
  );
}

export default App;
