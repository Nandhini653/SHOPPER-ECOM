import React from 'react'
import './Popular.css'
import Item from '../Items/Item'
import data

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
