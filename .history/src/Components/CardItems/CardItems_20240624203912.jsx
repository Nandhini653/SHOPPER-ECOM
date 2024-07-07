import React, { useContext } from 'react'
import './CardItems.css'

const CardItems = () => {
   const {all_product, cardItems, removeFromCart} = useContext(ShopContext);

  return (
    <div className='carditems'>
      <div className="cartitems-format-main">
        p
      </div>
    </div>
  )
}

export default CardItems
