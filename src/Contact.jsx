import React, {useState} from 'react'
import "./contact.css"
import Navigation from './Navigation'
import bird from "./bird.png"



export default function Contact() {
const [userName , setUserName] = useState('')
const [email , setEmail] = useState('')
const [userMessage, setUserMessage] = useState('')
const [confirmation, setConfirmation] = useState('')
const [ helloWorld, setHelloWorld] = useState('')

 setTimeout(() => {
 setHelloWorld(
<div className='time-text'>world</div>
 
 )
}, 1000);

function sendMessage(e){
  e.preventDefault()
  setUserName('')
  setEmail('')
  setUserMessage('')
  setConfirmation(`Thank you ${userName} for your message!`)
}



function showConfirmation(){
  const contactMessage = "Always excited to hear  about new ideas. Send a message! I'm happy to connect." 
if (sendMessage) { 
  return confirmation
} else { contactMessage

  
}


}

return(
<section>
  <Navigation/>
<div className="container">
  <div className="left-col">
    <div className='co-text'>

              <div className='left-text hello'>  
              hello   {helloWorld}
              </div>
          
            <div className='pro-txt reveal connect'>
              <div className='p-txt'>  <div className='hwt'>

        </div>
          
                </div>
            </div>
            </div>
            

        
  </div>


  <div className=" right-col">
      <div className='col-container'>
       <div><a href="https://github.com/R-LaRoi/" target= "_blank" alt="no alternative text"><i className="fa-brands fa-github icon"></i></a> <a href="https://www.linkedin.com/in/rachel-stroy-978397277" target= "_blank" alt="no alternative text">
       <i class="fa-brands fa-linkedin-in icon"></i></a>
       <a href='https://www.rachelstroy.com/' target= "_blank" alt="no alternative text"><i class="fa-solid fa-palette icon"></i></a></div>
     <form>
<div style={{padding:"30px"}}> 
{showConfirmation ? `${confirmation}` : `${contactMessage}`}
  </div>

  <input 
      type="text" 
      name="userName" 
      id="userName" 
      placeholder='name' 
      value={userName}
      onChange={(e)=> {
        setUserName(e.target.value)
  }}/>

        <input type="text"
        placeholder='email' 
        id='email'
        value={email}
        onChange={(e)=> {
          setEmail(e.target.value)
        }}
        />
        <textarea 
        type="text" 
        name="message" 
        id="1"
        value={userMessage}
        placeholder='enter message'
        onChange={(e)=>{
          setUserMessage(e.target.value)
        }}
        />

        <input type="submit"  
        onClick={showConfirmation}
        className='sub-btn'/>
</form>
        
</div>
</div>
     </div>

</section>
)

  
}