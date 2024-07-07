import React from 'react'
import './Breadcrums.css'
import arrow_icon from '../Assests/breadcrum_arrow.png'

const Breadcrums = (props) => {
    const {product} = props;
  return (
    <div className='breadcrum'> <img
      HOME <img src={arrow_icon} alt=''/> SHOP 
    </div>
  )
}

export default Breadcrums
