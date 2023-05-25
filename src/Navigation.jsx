
import { Link } from 'react-router-dom'
import './nav.css'

export default function Navbar () {


  return (
<nav className="navbar"> 
<ul className='links home-link'>
  <li className='link'>
  <Link to='projects'>projects</Link>
  </li>
  <li className="link">
  <Link to='contact'>connect</Link>
  </li>
  <li className=''>
  <Link to='/'> 
  <i className="fa-solid fa-location-arrow"></i></Link>
  </li>







</ul>  



          </nav>
  )
}




