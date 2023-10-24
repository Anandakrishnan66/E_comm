import React, { useContext } from 'react'
import './CartItem.css'
import { Context } from '../../Context/Context';

import remove_icon from '../Assets/cart_cross_icon.png'

const CartItems = () => { ///for items in cart
    const {all_product,cartItem,removeCart}=useContext(Context);//accesing the value provided by context

  return (
    <div className='cartItems' >
        <div className="cart-items-main">
            <p>Products</p>
            <p>Title</p>

            <p>Quantity</p>

            <p>Total</p>
            <p>Remove</p>

        </div>

        <hr/>
        {all_product.map((e)=>{
            if(cartItem[e.id]>0){
                return(
                <div>
            <div className="cartitems-format  cart-items-main">
                <img src={e.image} className='carticon-producticon' alt="" />
                <p>{e.name}</p>
                <p>{e.new_price}</p>
                <button className='cartItem-quantity'>{cartItem[e.id]}</button>
                <p>₹{e.new_price*cartItem[e.id]}</p>
                <img className='cartitemremoveicon' src={remove_icon} onClick={()=>{removeCart(e.id)}}alt="" />

            </div>
            <hr />
        </div>
                )
            }
            return null;
        })}

        <div className="cartitems-down">
            <div className="cartitems-total">
                <h1>cart totals</h1>
                <div>
                    <div className="cartitems-total-item">
                        <p>Subtotal</p>
                        <p>₹{0}</p>
                    </div>
                    <hr />
                    <div className="cartitems-total-item">
                        <p>Shipping Fee</p>
                        <p>Free</p>
                    </div>
                    <hr />
                    <div className="cartitems-total-item">
                        <h3>Total</h3>
                        <h3>₹{0}</h3>
                    </div>

                </div>
                <button>Proceed to checkout</button>
            </div>
            <div className="cartitems-promocode">
                <p>If You have Promo code,Enter it here</p>
                <div className="cartitems-promobox">
                    <input type="text" placeholder="Promo" />
                    <button>Submit</button>
                </div>
            </div>
        </div>
        
    </div>
  )
}

export default CartItems