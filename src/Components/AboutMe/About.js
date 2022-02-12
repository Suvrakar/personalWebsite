import React from 'react';
import "./About.css"
import suv1 from "./img1.jpg"

export default function About() {
  return <div className='container'>
    <h1 >About Me</h1>
    <img src={suv1}  style={{width:"300px", float:"left", marginRight:"20px"}} />
    <p className="text-justify ">Hello! This is Suvra(শুভ্র), a software engineer. I love to explore new technologies. Currently I am working on MERN stack. Besides this I am a problem solver, participated many contests online and offline. Moreover, I am proficient in DS, Algorithms. I try to find the optimal solution of a problem. Besides from all techinal life, I am ambitious about life, ambivert and Melophile. I love to find the answers of why and how! Read books and love to listen audiobooks. My favourite color is black(As you can see my web portfolio design :v )because it is mysterious. </p>
  </div>;
}
