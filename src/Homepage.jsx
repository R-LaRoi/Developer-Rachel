import React  from 'react'
import Navbar from './Navigation'
import "./homepage.css"
import { Link } from 'react-router-dom'

export default function Homepage() {

  return(
    
  <>

<main className='hero'>  
<div className='nv'><Navbar  /></div>
<div className='type-container' >
  <div className="reveal sm-txt">MEET</div>
<div className="name">RACHEL</div>
<div className="reveal  m-text">FRONTEND DEVELOPER</div>
<div className='nv-mobile'>

<Link to='/projects'>projects</Link>
<Link to='/contact'>connect</Link>

</div>
</div>
</main>




</>
  )
}