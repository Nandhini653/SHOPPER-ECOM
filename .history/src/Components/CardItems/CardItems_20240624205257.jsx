import React, { useContext } from 'react'
import './CardItems.css'
import { ShopContext } from '../../Context/ShopContext'
import remove_icon from '../Assests/cart_cross_icon.png'

const CardItems = () => {
    const { all_product, cardItems, removeFromCart } = useContext(ShopContext);

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
            <hr />
            {all_product.map((e) => {
                if (cardItems[e.id] > 0) 
                    {
                    return <div>
                        <div className="cartitems-format">
                            <img src={e.image} alt="" className='carticon-product-icon' />
                            <p> {e.name}</p>
                            <p>${e.mew_price}</p>
                            <button className='cartitems-quantity'> {cardItems[e.id]}/button>
                            <p> {e.new_price *cardItems[e.id]</p>
                            <img src={remove_icon} onClick={() => { removeFromCart(e.id) }} alt="" />
                        </div>
                        <hr />
                    </div>
                }
            })}

            )
}

            export default CardItems
