import React from 'react'
import './Popular.css'
import Item from '../Item/Item'
import data_product from '../Assests/data'
import Item from '../Item/Item'

const Popular = () => {
  return (
    <div className='popular'>
      <h1> POPULAR IN WOMEN </h1>
      <hr/>
      <div className="popular-item">
        {data_product.map((item,i)=>{
          return <Item key
        })}
      </div>
    </div>
  )
}

export default Popular
