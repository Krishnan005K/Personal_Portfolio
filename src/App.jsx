import './App.css';
import Contact from './sections/Contact/Contact';
import Footer from './sections/Footer/Footer';
import Ghibli from './sections/Ghibli/Ghibli';
import Hero from './sections/Hero/Hero';
import Projects from './sections/Projects/Projects';
import Skills from './sections/Skills/Skills';
function App() {
  return (
    <div>
     
      <Hero />
      <Projects />
      <Skills />
      <Ghibli/>
      <Contact /> 
      <Footer />
    </div>
  );
}

export default App;
