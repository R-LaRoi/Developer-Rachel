import React from "react";
import { Link } from "react-router-dom";


export default function Navigation(){
return(
        <div className="name">rachel
      <div className="title">frontend developer</div>
<div>
  <ul>
    <li><Link to="/">home</Link>
      </li><li><Link to="/goals">goals</Link></li>
     <li><Link to="/projects">projects</Link></li>
      <li><Link to="/contact">contact</Link></li>
      </ul>
        
  </div>
     </div>

)
}