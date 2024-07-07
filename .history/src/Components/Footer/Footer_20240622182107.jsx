import React from 'react'
import './Footer.css'
import footer_logo from '../Assests/logo_big.png'
import inst

const Footer = () => {
  return (
    <div className='footer'>
      <div className="footer-logo">
        <img src={footer_logo} alt=''/>
        <p>SHOPPER</p>
      </div>
      <ul className='footer-links'>
        <li>Company</li>
        <li>Products</li>
        <li>Offices</li>
        <li>About</li>
        <li>Contact</li>
      </ul>

    </div>
  )
}

export default Footer
