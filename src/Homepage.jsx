import React  from 'react'
import Navbar from './Navigation'
import mobileImg from "./hpmobile.png"
import "./homepage.css"
import { Link } from 'react-router-dom'

export default function Homepage() {

  return(
    
  <>

<main className='hero '>  

<div className='type-container' >
  <div className="reveal sm-txt">MEET</div>
<div className="name">RACHEL</div>
<div className="reveal  m-text">FRONTEND DEVELOPER</div>
<Link to='/projects' className='h-link reveal hp-nav'>projects</Link>
<Link to='/contact' className='h-link reveal hp-nav'>connect</Link>
</div>

<div className='nv-mobile' >  
 <Link to='/'> 
  <i className="fa-solid fa-location-arrow"></i></Link>

<img className= "mobile-img" src={mobileImg} alt="no alternative text" width={"600px"} />
<div className='header'>
<div className='title-mobile'>rachel</div>
<div className="sub-title">FRONTEND DEVELOPER</div>
<Link to='/projects' className='h-link reveal'>projects</Link>
<Link to='/contact' className='h-link reveal'>connect</Link>
</div>

</div>

</main>




</>
  )
}