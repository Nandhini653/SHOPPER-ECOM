import React from 'react'
import './Popular.css'
import Item from '../Items/Item'

const Popular = () => {
  return (
    <div className='popular'>
      <h1> POPULAR IN WOMEN </h1>
      <hr/>
      <div className="popular-item">
        {data_product.map()=>
         return <Item 
        }
      </div>
    </div>
  )
}

export default Popular
