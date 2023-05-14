import React from 'react'
import  Navigation  from './Navigation'
import Footer from './footer'
import "./goals.css"
import bird from "./bird.gif"


export default function Goals() {
  return(
<div>
<Navigation />
<main className='goal-container'>

<img src={bird} className='bg-img' width={"900px"}></img>

<div className='text  mobile-txt'>
  <div className='sub-text'>goals</div>
<p>Committed to building projects that incorporate new technologies in order to enhance my experience as a frontend developer. </p>

<p>I am interested in UI/UX design and I would like to collaborate with other developers/designers to create applications that are essential and provides a seamless user experience.</p>

<p>As an artist and fit-for-life enthusiast, I am forever dedicated to encouraging others to build on their strengths and maintain good habits.</p>
</div>

</main>
<Footer />
</div>



  )}