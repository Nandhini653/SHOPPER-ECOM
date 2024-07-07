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
      {all_product.map((e)=> {
        if (cardItems[e.id]>0)
      })}
      <div className="cartitems-format">
        <img src="" alt="" className='carticon-product-icon' />
        <p></p>
        <p></p>
        <button  className='cartitems-quantity'></button>
        <p> </p>
        <img src={remove_icon} onClick={()=> {removeFromCart()}} alt="" />
      </div>
      <hr/>
    </div>
  )
}

export default CardItems
