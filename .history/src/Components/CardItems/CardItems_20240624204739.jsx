import React, { useContext } from 'react'
import './CardItems.css'
import {ShopContext} from '../../Context/ShopContext'
import remove_icon from '../Assests/cart_cross_icon.png'

const CardItems = () => {
   const {all_product, cardItems, removeFromCart} = useContext(ShopContext);

  return (
    <div className='carditems'>
      <div className="cartitems-format-main">
        <p>Products</p>
        <p>Title</p>
        <p>Price</p>
        <p>Quantity</p>
        <p>Total</p>
        <p>Remove</p>
      </div>
      <hr/>
    
    </div>
  )
}

export default CardItems
