import React from 'react'
import "./projects.css"
import Navigation from './Navigation'
import Footer from './footer'
import busybot from "./busybot.png"
import image2 from "./image2.png"

export default function Projects() {


  return(
<section>
 <Navigation />
<main className='pro-container'>

<div className='w-1'>  <img src="https://user-images.githubusercontent.com/114012059/236687956-50ff372e-8003-471f-b697-6a13fed89ab2.png" alt="no alternative text" className='project-images' />

<div>password generator html css javascript
  
</div>


</div>

<div className='w-1'>  <img src={busybot} alt="" className='project-images' />

</div>

<div className='b-1'><img src="https://user-images.githubusercontent.com/114012059/236687972-62d609d9-64b7-422a-9775-499848b4165e.png" alt="no alternative text" className='project-images' />


<div>password generator html css javascript
  
</div>
</div>

<div className='b-1'> 
<img src="https://user-images.githubusercontent.com/114012059/236687965-9f7e25ce-f10f-40d4-8264-c4f79ff43def.png" alt="no alternative text" className='project-images' />
 <div>password generator html css javascript
  
</div></div>



<div className='b-1'><img src={image2} alt="no alternative text" className='project-images' /></div>

<div className='b-1'> 
<img src="https://user-images.githubusercontent.com/114012059/236687965-9f7e25ce-f10f-40d4-8264-c4f79ff43def.png" alt="no alternative text" className='project-images' />
 </div>


</main>



<Footer />
</section>)}