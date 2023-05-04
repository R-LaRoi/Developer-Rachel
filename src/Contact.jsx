import React from 'react'
import "./contact.css"
import Navigation from './Navigation'
import imgContact from "./2.png"





export default function Contact() {

  return(
    <>
<Navigation />

<div className='contact-container'>
<img src={imgContact} width="700px"></img>

  <div>lets connect!

<form action="">
  <input type="name" name="" id="" placeholder='name'/>
   <input type="email" placeholder='email' />
  <textarea type="text" name="" id="" placeholder='enter message' />
 <input type="submit" />

 

</form>
</div>
</div>

</>

  )
}