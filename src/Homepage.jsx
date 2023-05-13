import React from 'react'
import  Gif from "./hero.gif"
import { Link } from "react-router-dom";
import "./homepage.css"
export default function Homepage() {

  return(
    
  <>

<main className='hero'>  
   <img src={Gif}  width={"99.5%"}alt="wait until the page loads" />     
{/* <img src="https://user-images.githubusercontent.com/114012059/236435150-22e4e6d5-0e8f-4e3b-87a2-7ae44b726e29.png" alt="elephant with tusk"  className="img-hero"/> */}

<div className ="hero-title">
{/* <div className="title-subtxt">meet</div> */}
<div className='type-container'>
<div className="title-name"> MEET RACHEL!</div>
<div className="title-subtxt type-container">FRONTEND DEVELOPER</div>

</div>


<div className='home-nav-bar'>

<span className='h-link'><Link to='/goals'>goals</Link></span>

<span className='h-link'><Link to='/projects' >projects</Link></span>

<span className='h-link'><Link to='/contact'>connect</Link></span>

</div>
</div>
</main>



</>
  )
}