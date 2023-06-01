import React  from 'react'
import Navbar from './Navigation'
import mobileGif from "./mobile.gif"
import "./homepage.css"
import { Link } from 'react-router-dom'

export default function Homepage() {

  return(
    
  <>
<Navbar />
<main className='hero '>  

<div className='type-container' >
  <div className="reveal sm-txt">MEET</div>
<div className="name">RACHEL</div>
<div className="reveal  m-text">FRONTEND DEVELOPER</div>
<Link to='/projects' className='h-link reveal hp-nav'>projects</Link>
<Link to='/contact' className='h-link reveal hp-nav'>connect</Link>
</div>

<div className='nv-mobile' > 
 

<img className= "mobile-img" src={mobileGif} alt="no alternative text"  />
<div className='header'>
<div className='title-mobile'>  <div className='meet'>meet</div>rachel</div>
<div className="sub-title">FRONTEND DEVELOPER</div>

</div>

</div>

</main>




</>
  )
}