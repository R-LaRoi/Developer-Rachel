import React  from 'react'

import mobileGif from "./mobile.gif"
import "./homepage.css"
import { Link } from 'react-router-dom'
import Navbar from './Navigation'

export default function Homepage() {

  return(
    
  <>
<main className='hero '>  

<div className='type-container' >
  <div className=" sm-txt">meet</div>
    <div className="name">RACHEL</div>
</div>
  <div className="sub">FRONTEND DEVELOPER <br/>
<Link to='/projects' className='h-link reveal hp-nav'><i className="fa-solid fa-code"></i></Link>
<Link to='/contact' className='h-link reveal hp-nav'><i className="fa-solid fa-hand-sparkles"></i></Link>
</div>

<div className='nv-mobile'> 
<Navbar />
<img className= "mobile-img" src={mobileGif} alt="no alternative text"  />
<div className='header'>
<div className='title-mobile'>  <div className='meet'>meet</div>rachel</div>
<div className="sub-title">FRONTEND DEVELOPER</div>
<div class="rectangle"></div>

<Link to='/projects' className='reveal links'>projects</Link>
<Link to='/contact' className='reveal links'>connect</Link>

</div>
</div>
</main>




</>
  )
}