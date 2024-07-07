import React, { createContext, useContext, useState } from "react";
import all_product from '../Components/Assests/all_product';

export const ShopContext = createContext(null);

const getDefaultCart = () => {
    let cart = {};
    for (let index = 0; index < all_product.length + 1; index++) {
        cart[index] = 0;
    }
    return cart;
}


const ShopContextProvider = (props) => {

    const [cartItems, setCardItems] = useState(getDefaultCart());

    const addToCart = (itemId) => {
        setCardItems((prev))
    }





    const contextValue = { all_product, cartItems };
    return (
        <ShopContext.Provider value={contextValue}>
            {props.children}
        </ShopContext.Provider>
    )
}
export default ShopContextProvider;