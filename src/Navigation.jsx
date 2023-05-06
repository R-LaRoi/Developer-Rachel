import { useState } from 'react'
import { NavLink } from 'react-router-dom'
import './nav.css'

export default function Navbar () {
  const [showNavbar, setShowNavbar] = useState(false)

  function handleShowNavbar () {
    setShowNavbar(!showNavbar)
  }

  return (
    <nav className="navbar">
      <div className="container">
      
        <div className="menu-icon" onClick={handleShowNavbar}>
<i class="fa-solid fa-bars"></i>
        </div>
        <div className={`nav-elements  ${showNavbar && 'active'}`}>
          <ul>
            <li>
              <NavLink to="/home"> <i className="fa-solid fa-house"></i></NavLink>
            </li>
            <li>
              <NavLink to="/goals">Goals</NavLink>
            </li>
            <li>
              <NavLink to="/projects">Projects</NavLink>
            </li>
            <li>
              <NavLink to="/contact">Connect</NavLink>
            </li>
            
          </ul>
        </div>
      </div>
    </nav>
  )
}















































// import React from "react";
// import { Link } from "react-router-dom";
// import "./nav.css"


// export default function Navigation(){
// return(
//     <section>

//   <div className='nav-bar'>
   
// <li><Link to='/goals' className='a-link ' >goals</Link></li>

// <li><Link to='/projects' className='a-link'>projects</Link></li>

// <li><Link to='/contact' className='a-link' >connect</Link></li>
// <li><Link to='/home' className='a-link initial' >RS</Link></li>
// <li><Link to='/home' className='a-link home' ></Link></li>

// </div>

//   </section>


// )
// }