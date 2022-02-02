import './App.css';
import About from './Components/AboutMe/About';
import Button from './Components/Button/Button';
import Hero from './Components/Hero/Hero';
import Work from './Components/Work/Work';
import Education from './Components/Education/Education';
import Project from './Components/Projects/Project';



function App() {

  return (
    <div>
      <Hero />
      <About />
      <Work/>
      <Education/>
      <Project/>
    </div>
  );
}

export default App;
