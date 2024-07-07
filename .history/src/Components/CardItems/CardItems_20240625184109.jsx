import React, { useContext } from 'react';
import './CardItems.css'; // Assuming styles are correctly defined in CardItems.css
import { ShopContext } from '../../Context/ShopContext'; // Adjust path based on actual file structure
import remove_icon from '../Assets/cart_cross_icon.png';

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
            {all_product.map((product) => {
                if (cardItems[product.id] > 0) {
                    return (
                        <div key={product.id}>
                            <div className="cartitems-format">
                                <img src={product.image} alt={product.name} className='carticon-product-icon' />
                                <p>{product.name}</p>
                                <p>${product.new_price.toFixed(2)}</p>
                                <button className='cartitems-quantity'>{cardItems[product.id]}</button>
                                <p>${(product.new_price * cardItems[product.id]).toFixed(2)}</p>
                                <img
                                    src={remove_icon}
                                    alt="Remove"
                                    onClick={() => removeFromCart(product.id)}
                                    className='remove-icon'
                                />
                            </div>
                            <hr />
                        </div>
                    );
                }
                return null; // Ensure to always return a value (null in this case) in map function
            })}
        </div>
    );
};

export default CardItems;
