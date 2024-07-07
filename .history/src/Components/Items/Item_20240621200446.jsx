import React from 'react'
import './Item.css'
<Item></Item>

const Item = (props) => {
  return (
    <div className='item'>
        <img src={props.image} alt = ""/>
        <p>{props.name}</p>
        .item-price
      
    </div>
  )
}

export default Item


