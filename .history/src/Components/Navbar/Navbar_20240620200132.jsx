import React, { useState } from 'react'
import './Navbar.css'
import logo from '../Assests/logo.png'
import cart_icon from '../Assests/cart_icon.png'


const Navbar = () => {

    const [menu, setMenu] = useState("shop")
  return (
    <div className='navbar'>
        <div className="nav-logo">
            <img src={logo} alt="logo" />
            <p>SHOPPER</p>
        </div>
      <div className="nav-menu">
        <li onClick={()=> {setMenu("shop")}>Shop <hr/></li>
        <li>Men</li>
        <li>Women</li>
        <li>Kids</li>
      </div>
      <div className="nav-login-cart">
        <button>Login</button>
        <img src= {cart_icon} alt='cart-icon'/>
        <div className="nav-cart-count">0</div>
      </div>
    </div>    
  )
}

export default Navbar
