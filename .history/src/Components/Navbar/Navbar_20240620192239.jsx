import React from 'react'
import './Navbar.css'
import logo from '../Assests/logo.png'
import cart_icon from '../Assests/cart_icon.png'


const Navbar = () => {
  return (
    <div className='navbar'>
        <div className="nav-logo">
            <img src={logo} alt="logo" />
            <p>SHOPPER</p>
        </div>
      <div className="nav-menu">
        <li>Shop</li>
        <li>Men</li>
        <li>Women</li>
        <li>KIds</li>
      </div>
    </div>
  )
}

export default Navbar
