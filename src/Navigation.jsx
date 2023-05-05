import React from "react";
import { Link } from "react-router-dom";
import "./nav.css"


export default function Navigation(){
return(
    <section>

  <div className='nav-bar mobile' >
    
     <Link to='/goals'><i class="fa-sharp fa-solid fa-bars"></i></Link>
    <div className='mobile-links'>
 
<input type="checkbox" id="checkbox_toggle" />
<label for="checkbox_toggle" class="hamburger">&#9776;</label>

        <li><Link to='/goals'>goals</Link></li>
        <li><Link to='/projects'>projects</Link></li>
        <li><Link to='/contact'  >connect</Link></li>
      </div>


<li><Link to='/goals' className='a-link '  >goals</Link></li>

<li><Link to='/projects' className='a-link'>projects</Link></li>

<li><Link to='/contact' className='a-link' >connect</Link></li>
<li><Link to='/home' className='a-link initial' >RS</Link></li>


</div>
  </section>


)
}