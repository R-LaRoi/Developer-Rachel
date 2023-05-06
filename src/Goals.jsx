import React from 'react'
import  Navigation  from './Navigation'
import "./goals.css"

import birdgoal from "./1.png"


export default function Goals() {
  return(
<div>
{/* <>
<div className='goals-nav-bar ' >
<li><Link to='/goals' className='ag-link ' >goals</Link></li>

<li><Link to='/projects' className='ag-link'>projects</Link></li>

<li><Link to='/contact' className='ag-link' >connect</Link></li>
<li><Link to='/home' className='ag-link initial' >RS</Link></li>
</div> */}

<Navigation />
<main className='goal-container'>
<img src={birdgoal} width="520px" className='bg-img'></img>
<div className='text'>
<p>Committed to building projects that incorporate new technologies in order to enhance my experience as a frontend developer. </p>

<p>I am interested in UI/UX design and I would like to collaborate with other developers/designers to create applications that are essential and provides a seamless user experience.</p>


<p>As an artist and fit-for-life enthusiast, I am forever dedicated to encouraging others to build on their strengths and maintain good habits.</p>




</div>

</main>
</div>



  )}