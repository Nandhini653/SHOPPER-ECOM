import React, { useState } from 'react'
import './Navbar.css'
import logo from '../Assests/logo.png'
import cart_icon from '../Assests/cart_icon.png'
import { Link } from 'react-router-dom'


const Navbar = () => {

    const [menu, setMenu] = useState("shop")
  return (
    <div className='navbar'>
        <div className="nav-logo">
            <img src={logo} alt="logo" />
            <p>SHOPPER</p>
        </div>
      <div className="nav-menu">
        <li onClick={()=> {setMenu("shop")}}> <Link to={}>Shop</Link> {menu === "shop"? <hr/> :<></>}</li>
        <li onClick={()=> {setMenu("men")}}>Men {menu === "men"? <hr/> :<></>}</li> 
        <li onClick={()=> {setMenu("womens")}}>Women {menu === "womens"? <hr/> :<></>}</li>
        <li onClick={()=> {setMenu("kids")}}>Kids {menu === "kids"? <hr/> :<></>}</li>
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
