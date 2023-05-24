
import { NavLink } from 'react-router-dom'
import './nav.css'

export default function Navbar () {


  return (
<nav className="navbar"> 
<ul className='links'>
  <li>
  <NavLink to='/home'> 
  <i className="fa-solid fa-house"></i></NavLink>
  </li>
<li className='link'>
  <NavLink to='/projects'>projects</NavLink>
  </li>


<li className="link">
  <NavLink to='/contact'>connect</NavLink>
  </li>



</ul>  



          </nav>
  )
}




