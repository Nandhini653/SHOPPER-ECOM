import React from 'react'
import './Hero.css'
import hand_icon from '../Assests/hand_icon.png'


const Hero = () => {
  return (
    <div className='hero'>
      <div className="hero-left">
      <h2> NEW ARRIVALS ONLY</h2>
      <div>
        <div className='hero-hand-icon'>
          <p> new </p>
          <img src={hand_icon} alt=""/>
        </div>
        <p> collection </p>
        <p> for everyone</p>
      </div>
      </div>
        <div className="hero-right">

        </div>
    </div>
  )
}

export default Hero
