import React, { useContext } from 'react'
import { useParams } from 'react-router-dom';
import {ShopContext} from '../Context/ShopContext'

const Product = () => {
  const {all_product} = useContext(ShopContext);
  const {productId} = useParams();
  const product =all_product.find((e)=> e.id === Number(productId));
  return (
    <div>
      <
    </div>
  )
}

export default Product
