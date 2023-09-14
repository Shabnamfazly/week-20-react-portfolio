import React from 'react'
import "./landing.css"
import image from "../../assets/landingimage.jpg"

export default function Landingpage() {
  return (
    <div className='content'>
        <h2>Shabnam Fazly Portfolio</h2>
        <div className='image-wrapper'>
            <img src={image}/>
        </div>
    </div>
  )
}
