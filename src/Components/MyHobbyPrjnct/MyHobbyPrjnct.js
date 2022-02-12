import React from 'react';
import "./MyHobbyPrjnct.css"
import Iframe from 'react-iframe'
import * as ReactBootStrap from "react-bootstrap"
import ShowMore from 'react-show-more-button';

export default function HobbyProjects() {
  return <div className='container my-5'>
    <h1 >My Diaries</h1>
    {/* <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</p> */}

    <ShowMore backgroundColor="#031321"  maxHeight={400}>
      <div class="row">
        <h5 className='text-center'>IoT Projects</h5>
        <div class="col-sm">
          <Iframe width="300px" height="300px" src="https://www.youtube.com/embed/6wZA1efFhBI" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></Iframe>
        </div>
        <div class="col-sm">
          <Iframe width="300px" height="300px" src="https://www.youtube.com/embed/bIUJotvSSq0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></Iframe>
        </div>
        <div class="col-sm">
          <Iframe width='300px' height='300px' src="https://www.youtube.com/embed/QzWe3d_7iA0" title="Smart Irrigation System using IoT" frameborder="1" allowfullscreen></Iframe>
        </div>
      </div>

      <div class="row mt-5">
        <h5 className='text-center'>VFX, Animations and Slideshows</h5>
        <div class="col-sm">
          <Iframe width="300px" height="300px" src="https://www.youtube.com/embed/YFqEaZqMpB8" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></Iframe>
        </div>
        <div class="col-sm">
          <Iframe width="300px" height="300px" src="https://www.youtube.com/embed/xSAa2YCAKt0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></Iframe>
        </div>
        <div class="col-sm">
          <Iframe width="300px" height="300px" src="https://www.youtube.com/embed/Phc3GJD8FJw" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></Iframe>
        </div>
      </div>

      <div class="row mt-5 d-flex justify-content-center align-items-center">
        <h5 className='text-center'>Versity Life</h5>
        <div class="col-sm text-center">
          <Iframe width="300px" height="300px" src="https://www.youtube.com/embed/vjN9JJ-W99U" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></Iframe>
        </div>
        <div class="col-sm text-center">
          <Iframe width="300px" height="300px" src="https://www.youtube.com/embed/8qS0VbbLhQY" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></Iframe>
        </div>
      </div>

      <div class="row mt-5">
        <h5 className='text-center'>Travel Diaries</h5>
        <div class="col-sm">
          <Iframe width="300px" height="300px" src="https://www.youtube.com/embed/qqVBn-PeRn0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></Iframe>
        </div>
      </div>
    </ShowMore> 
  </div>;
}
