import './App.css';
import About from './Components/AboutMe/About';
import Button from './Components/Button/Button';
import Hero from './Components/Hero/Hero';
import Work from './Components/Work/Work';
import Education from './Components/Education/Education';
import Project from './Components/Projects/Project';
import AwardsPub from './Components/AwardsPub/Awards';
import Skills from './Components/MySkills/Skills';
import Interest from './Components/Interest/Interest';
import BlogArticles from './Components/BlogArticles/BlogArticles';



function App() {

  return (
    <div className='container'>
      <Hero />
      <About />
      <Work/>
      <Education/>
      <Skills/>
      <Project/>
      <AwardsPub/>
      <Interest/>
      <BlogArticles/>
    </div>
  );
}

export default App;
