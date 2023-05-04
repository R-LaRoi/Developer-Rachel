import React from 'react'
import "./projects.css"
import Navigation from './Navigation'
import image1 from "./image1.png"
import image2 from "./image2.png"

export default function Projects() {


  return(
<>
  <Navigation />
<div className='project-container'>

  <div className='pro-sub-text'>
  
    <div>HTML</div>
    <div>CSS</div>
    <div>JAVASCRIPT</div>
    <div>JS REACT</div>
    <div> FIGMA</div>
    <div>TYPESCRIPT</div>
       <div >PROJECTS</div>
  </div>

<img src={image1} className='project-images'></img>
    
{/* ---------- */}
<div className='img-grid'>
<img src={image2} className='project-images' ></img>
<div className='text'> <ul>
  <li>What’s the move? </li>
  <li>Fitness Coach Profile </li>
  <li>HTML CSS </li>
</ul>


</div>
</div>


<div className='img-grid'>
<img src={image2} className='project-images' ></img>
<div className='text'><ul>
  <li>What’s the move? </li>
  <li>Fitness Coach Profile </li>
  <li>HTML CSS </li>
</ul></div>

</div>
{/* ---------- */}
<div className='img-grid'>
<img src={image1} className='project-images'></img>
<div className='text'> project one </div>
</div>

<div className='img-grid'>
<img src={image1} className='project-images'></img>
<div className='text-ovr'> visit </div>
<div className='text'> project two</div>



</div>

</div>

</>
  )
}