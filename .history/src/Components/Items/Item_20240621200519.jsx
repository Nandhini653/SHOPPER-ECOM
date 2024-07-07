import React from 'react'
import './Item.css'
<Item></Item>

const Item = (props) => {
  return (
    <div className='item'>
        <img src={props.image} alt = ""/>
        <p>{props.name}</p>
        <div className="item-prices">
            <div className="item-prices-new">

            </div>
            <div className="item-prices-old">
                
            </div>
        </div>
      
    </div>
  )
}

export default Item


