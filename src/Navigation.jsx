
import { NavLink } from 'react-router-dom'
import './nav.css'

export default function Navbar () {


  return (
<nav className="navbar"> 
<ul className='contain'>
<li className='black'>
  <NavLink to='/projects'><i className="fa-solid fa-code"></i></NavLink></li>
<li className=' white' id="white">
  <NavLink to='/home'><i className="fa-solid fa-house"></i></NavLink></li>
<li className='red'><NavLink to='/contact'>
  <i className="fa-solid fa-hand"></i></NavLink></li>
</ul>  
  <span className='hide p '>projects 
     <span className='hide h'>home</span>
     <span className='hide c'>connect</span>
  </span>

          </nav>
  )
}




