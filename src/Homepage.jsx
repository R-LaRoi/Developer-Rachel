import React from 'react'
import { Link } from "react-router-dom";
import "./homepage.css"
export default function Homepage() {

  return(
    
  <>

<main className='hero'>            
<img src="https://user-images.githubusercontent.com/114012059/236435150-22e4e6d5-0e8f-4e3b-87a2-7ae44b726e29.png" alt="elephant with tusk"  className="img-hero"/>

<div className='home-nav-bar'>

<span><Link to='/goals'>goals</Link></span>

<span><Link to='/projects'>projects</Link></span>

<span><Link to='/contact'>connect</Link></span>

</div>
</main>



</>
  )
}