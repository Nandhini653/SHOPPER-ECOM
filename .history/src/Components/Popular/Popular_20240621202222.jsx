import React from 'react'
import './Popular.css'
import Item from '../Item/Item'
import data_product from '../Assests/data'
import item from '../'

const Popular = () => {
  return (
    <div className='popular'>
      <h1> POPULAR IN WOMEN </h1>
      <hr/>
      <div className="popular-item">
        {data_product.map()=>
         return <Item key
        }
      </div>
    </div>
  )
}

export default Popular
