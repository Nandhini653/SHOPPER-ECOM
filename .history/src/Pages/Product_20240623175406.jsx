import React, { useContext } from 'react'
import { useParams } from 'react-router-dom';

const Product = () => {
  const {all_product} = useContext(ShopContext);
  const {productId} = useParams();
  const product =all_product.find((e)=> e.id === Number(po))
  return (
    <div>
      
    </div>
  )
}

export default Product
