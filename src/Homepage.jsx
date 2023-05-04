import React from 'react'
import { Link } from "react-router-dom";
import "./homepage.css"
export default function Homepage() {

  return(
    
  <>

<main className='hero'>            

<img src="https://user-images.githubusercontent.com/114012059/235873733-930828b7-4506-4a68-af15-aa11ae9043d8.png" alt="elephant with tusk"   className="img-hero"/>

<div className='home-nav-bar'>

<span><Link to='/goals'>goals</Link></span>

<span><Link to='/projects'>projects</Link></span>

<span><Link to='/contact'>connect</Link></span>

</div>
</main>



</>
  )
}