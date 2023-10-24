import React from 'react'
import arrow_icon from'../Assets/breadcrum_arrow.png'
import './Breadcrums.css'

const Breadcrums = (props) => {
    const {product}=props;
    // console.log(props)
  return (
    <div className='breadcrums'>
        Home  <img src={arrow_icon} alt=''/> Shop <img src={arrow_icon}alt="" />
        {product.category}<img src={arrow_icon} alt=""/>
        {product.name}
    </div>
  )
}

export default Breadcrums