import React from 'react'
import "./projects.css"
import Navigation from './Navigation'
import ele from "./ele.png"
import busybot from "./busybot.png"
import image2 from "./image2.png"
import flavor from "./flavor.png"

export default function Projects() {


  return(
<section>
 <Navigation />
<div className="page">
<div className="column left">
<div className='top'>

<img src={ele} alt="no alternative text" width={"435px"}  className="ele"/>
<div className='left-text'>  
PROJECTS
</div>

<div className='pro-txt reveal'>
  <div className='p-txt'> REACT | JAVASCRIPT | HTML | CSS </div>
 Interested in building user interfaces that integrate new technologies and design patterns. Committed to creating projects that will engage and provide new perspectives.</div>


</div>

  </div>
  <div className="column right">


    <div className='p-card'> 
    <img src="https://user-images.githubusercontent.com/114012059/236687965-9f7e25ce-f10f-40d4-8264-c4f79ff43def.png" alt="no alternative text" className='project-images' />
   
         <div className='title'> The Prolouge  | Book Blog
            <p className='desc'> JAVASCRIPT | CSS | HTML | DICTIONARY API</p>
<button className='pro-btn'>
                      <a href="https://github.com/R-LaRoi/writers-block-v3/tree/master/src" target= "_blank">
                      <i className="fa-brands fa-square-github"> 
                      </i>
                      </a>
                      </button>
          </div>

    </div>
    
    <div className='p-card'> 
                <img src={image2} alt="no alternative text" className='project-images' />
          <div className='title'>What's The Move | Excercise Log
            <div className='sub-txt'>Celebrate your small wins and keep track of your routine. 
            <p className='desc'> Vanilla JS | FIREBASE | CSS | HTML</p>
            <button className='pro-btn'> <a href="https://github.com/R-LaRoi/Move-v2" target= "_blank">View Page</a></button>
<button className='pro-btn'><a href="https://github.com/R-LaRoi/Move-v2" target= "_blank"><i className="fa-brands fa-square-github"> </i></a></button>

</div>
          </div>
  </div>
  
    <div className='p-card'> 
          <img src="https://user-images.githubusercontent.com/114012059/236687972-62d609d9-64b7-422a-9775-499848b4165e.png" alt="no alternative text" className='project-images' />
          <div className='title'>Saint Lucia Travel Page 
            <div className='sub-txt'>Responsive Layout</div>
            <p className='desc'> CSS | HTML </p>
                <button className='pro-btn'> 
                  <a href="https://melodious-haupia-724aa8.netlify.app/" target= "_blank">View Page
                  </a>
                  </button>
                <button className='pro-btn'><a href="https://github.com/R-LaRoi/Travel-Saint-Lucia" target= "_blank"><i className="fa-brands fa-square-github"> </i></a></button>
          </div>
  </div> 

  
    <div className='p-card'> 
        <img src={busybot} alt="" className='project-images' />
          <div className='title'>Busy Bot

            <div className='sub-txt'>Let Busy Bot tell you what to do! </div>
            <p className='desc'> JAVASCRIPT | CSS | HTML | API </p>
                    <button className='pro-btn'>
                      <a href="https://github.com/R-LaRoi/ScrimbaFrontEndPath/tree/main/API/BoredBot
                    " target= "_blank">
                      <i className="fa-brands fa-square-github"> 
                      </i>
                      </a>
                      </button>
          </div>
  </div> 
    <div className='p-card'> 
          <img src="https://user-images.githubusercontent.com/114012059/236687956-50ff372e-8003-471f-b697-6a13fed89ab2.png" alt="no alternative text" className='project-images' />
            <div className='title'>Password Generator
            <div className='sub-txt'>Generate your new password here. </div>
            <p className='desc'> JAVASCRIPT | CSS | HTML </p>
                   <button className='pro-btn'>
                      <a href="https://github.com/R-LaRoi/ScrimbaFrontEndPath/tree/main/WebBasics/PasswordGenerator" target= "_blank">
                      <i className="fa-brands fa-square-github"> 
                      </i>
                      </a>
                      </button>
          </div>
  </div>

  <div className='p-card'> 
          <img src={flavor} alt="no alternative text" className='project-images' />
         <div className='title'>Flavor Ice Cream App
    
            <p className='desc'> JAVASCRIPT | CSS | HTML </p>
<button className='pro-btn'>
                      <a href="https://github.com/R-LaRoi/Flavor-App" target= "_blank">
                      <i className="fa-brands fa-square-github"> 
                      </i>
                      </a>
                      </button>
          </div>

    </div>
  </div>
  
  
</div>







</section>)}