import React from 'react'
import exclusive_image from '../Assets/exclusive_image.png'
import './Offers.css'
const Offers = () => {//Banners for offers
  return (
    <div className='offers'>

        <div className="offer-left">
            <h1>Exclusive Offer</h1>
            <h1>For You</h1>
            <p>Only on best sellers product</p>
            <button>Check now</button>

        </div>
        <div className="offers-right">
            <img src={exclusive_image} alt=""/>
        </div>
        
        
        </div>
  )
}

export default Offers