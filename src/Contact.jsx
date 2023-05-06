import React, {useState} from 'react'
import "./contact.css"
import Navigation from './Navigation'
import imgContact from "./2.png"

export default function Contact() {
const [userName , setUserName] = useState('')
const [email , setEmail] = useState('')
const [userMessage, setUserMessage] = useState('')
const [confirmation, setConfirmation] = useState('')


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


return (
    <>




<div className='contact-container'>
  <div className='nav-pg'>
  <Navigation />
</div>

<div></div>
  <img src={imgContact} width="600px" className='contact-img'></img>
  <div>

 <div>
      
<form action="" onSubmit={sendMessage} className="contact-form">

 
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
</>

  )
}