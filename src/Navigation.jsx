

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
  
        <div className="menu-icon" id="bars" onClick={handleShowNavbar}>
<i className="fa-solid fa-location-arrow"></i>
        </div>
        <div className={`nav-elements  ${showNavbar && 'active'}`}>
          <ul>
            <li>
              <NavLink to="/"> <i className="fa-solid fa-location-arrow"></i></NavLink>
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











// import { Link } from 'react-router-dom'
// import './nav.css'

// export default function Navbar () {


//   return (
// <nav className="navbar"> 
// <ul className='links home-link'>
//   <li className='link'>
//   <Link to='/projects'>projects</Link>
//   </li>
//   <li className="link">
//   <Link to='/contact'>connect</Link>
//   </li>
//   <li className=''>
//   <Link to='/'> 
//   <i className="fa-solid fa-location-arrow"></i></Link>
//   </li>

// </ul>  



//           </nav>
//   )
// }




