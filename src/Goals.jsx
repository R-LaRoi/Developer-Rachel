import React from 'react'
// import { Link } from "react-router-dom";
import "./goals.css"
import Navigation from './Navigation'
import birdgoal from "./1.png"


export default function Goals() {
  return(

<>
<Navigation />
<main className='goal-container'>
<img src={birdgoal} width="600px"></img>
<div className='text'>
what are my goals 
what are my interest
</div>

</main>
</>



  )}