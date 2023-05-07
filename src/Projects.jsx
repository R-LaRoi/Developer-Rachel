import React from 'react'
import "./projects.css"
import Navigation from './Navigation'
import image1 from "./image1.png"
import image2 from "./image2.png"

export default function Projects() {


  return(
<>

<div className='project-container'>
    <Navigation />

  <div style={{fontFamily:'TUSKER-SUPER', fontSize:'50px', marginTop:"12rem"}} className="title">PROJECTS</div>
  <div className='pro-sub-text'>
  
    <div>HTML</div>
    <div>CSS</div>
    <div>JAVASCRIPT</div>
    <div>JS REACT</div>
    <div> FIGMA</div>
    <div>GITHUB</div>
       <div >PROJECTS</div>
  </div>

<img src="https://user-images.githubusercontent.com/114012059/236687965-9f7e25ce-f10f-40d4-8264-c4f79ff43def.png" alt="" srcset="" className='project-images' />
    
{/* ---------- */}
<div className='img-grid'>

  <img src="https://user-images.githubusercontent.com/114012059/236687972-62d609d9-64b7-422a-9775-499848b4165e.png" alt="no alternative text" className='project-images' />
{/* <img src={image2} className='project-images' alt="no alternative tex" ></img> */}


<div className='text'> <ul>
  <li>Whats the move? </li>
  <li>Fitness Coach Profile </li>
  <li>HTML CSS </li>
</ul>


</div>
</div>


<div className='img-grid'>
   <img src="https://user-images.githubusercontent.com/114012059/236687956-50ff372e-8003-471f-b697-6a13fed89ab2.png" alt="" className='project-images' />
{/* <img src={image2} className='project-images'  alt="no alternative tex"></img> */}
<div className='text'><ul>
  <li>Whats the move? </li>
  <li>Fitness Coach Profile </li>
  <li>HTML CSS </li>
</ul></div>

</div>
{/* ---------- */}
<div className='img-grid'>
  <img src="https://user-images.githubusercontent.com/114012059/236687960-232d5984-6f53-4634-9eb8-61993337e35c.png" 
  
  
  className='project-images' />
{/* <img src={image1} className='project-images'  alt="no alternative tex"></img> */}
<div className='text'> project one </div>
</div>

<div className='img-grid'>
  <img src="https://user-images.githubusercontent.com/114012059/236687956-50ff372e-8003-471f-b697-6a13fed89ab2.png" alt="" className='project-images' />
{/* <img src={image1} className='project-images'  alt="no alternative tex"></img> */}
<div className='text-ovr'> visit </div>
<div className='text'> project two</div>



</div>

</div>

</>
  )
}