
import { NavLink } from 'react-router-dom'
import './nav.css'

export default function Navbar () {


  return (
<nav className="navbar"> 
<ul className='links home-link'>
  <li className='link'>
  <NavLink to='/projects'>projects</NavLink>
  </li>
  <li className="link">
  <NavLink to='/contact'>connect</NavLink>
  </li>
  <li className=''>
  <NavLink to='/home'> 
  <i className="fa-solid fa-location-arrow"></i></NavLink>
  </li>







</ul>  



          </nav>
  )
}




