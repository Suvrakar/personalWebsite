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
import Contact from './Components/ContactMe/Contact';
import { Helmet } from "react-helmet";
import HobbyProjects from './Components/MyHobbyPrjnct/MyHobbyPrjnct';



function App() {

  return (
    <div className='container d-flex flex-column justify-content-center'>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Debashis Kar Suvra | Portfolio </title>
        <meta name="DebashisKarSuvra" content="Helmet application" />
      </Helmet>


      <Hero />
      <About />
      <Work />
      <Education />
      <Skills />
      <Project />
      <AwardsPub />
      <Interest />
      <BlogArticles />
      <HobbyProjects/>
      <Contact />
    </div>
  );
}

export default App;
