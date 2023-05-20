import React, {useState} from 'react'
import "./contact.css"
import Navigation from './Navigation'
import bird from "./bird.gif"



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




<img src={bird} className='bg-img' width={"1000px"}></img>



<div className='contact-form'>

 
<form action="" onSubmit={sendMessage} >
  
   {/* <div className='sub-text'>let's connect</div>  */}
<div className='sm-txt'> <div className="">
<div className=''>goals</div>
<p className='p'>Innovation is essential throughout my process as an artist and developer. I am committed to creating projects that will engage and provide new perspectives. 

I am interested in building user interfaces that integrate new technologies and design patterns.

 </p>

 <div><i className="fa-brands fa-github"> <i className="fa-brands fa-linkedin"> <i className="fa-solid fa-panorama"></i></i></i></div>
</div>Send a message. 
  Connect with me on LinkedIn. </div>

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

   

     


</>

  )
}