import React from "react";
import { Link } from "react-router-dom";
import "./nav.css"


export default function Navigation(){
return(
    <section>
  <div className='nav-bar'>
<li><Link to='/goals' className='a-link'  >goals</Link></li>

<li><Link to='/projects' className='a-link'>projects</Link></li>

<li><Link to='/contact' className='a-link' >connect</Link></li>

</div>
  </section>


)
}