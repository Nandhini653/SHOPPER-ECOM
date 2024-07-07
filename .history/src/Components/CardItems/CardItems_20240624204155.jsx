import React, { useContext } from 'react'
import './CardItems.css'

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
      <div className="cartitems-format">
        <img src="" alt="" className='carticon-product-icon' />
        <p></p>
        <p></p>
        <button  className='cartitems-quantity'></button>
        <p> </p>
        <img src="" alt="" />
      </div>
    </div>
  )
}

export default CardItems
