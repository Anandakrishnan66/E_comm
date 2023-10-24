import React, { useState } from 'react'
import './Navbar.css'
import logo from  '../Assets/logo.png' 
import cart_icon from'../Assets/cart_icon.png'
import { Link } from 'react-router-dom'
import { DarkModeToggle } from '../Dark/Dark'
// import Image from '@mui/material'



function Navbar() {  //Navigation Bar
    const [menu,setMenu]=useState("shop")

  return (
    <div className='navbar' >
         <div className="nav-logo">
            <img alt='loading'src={logo}/>
            <p> Shopper</p>

         </div>

         <ul className='nav-menu'>
            <li onClick={()=>{setMenu("shop")}}><Link style={{textDecoration:'none'}}to='/'>Shop</Link>{menu==="shop"?<hr/>:<></>}</li>
            <li onClick={()=>{setMenu("men")}}><Link  style={{textDecoration:'none'}} to='/mens'>mens</Link>{menu==="men"?<hr/>:<></>}</li>
            <li onClick={()=>{setMenu("women")}}><Link style={{textDecoration:'none'}}  to='/womens'>Womens</Link>{menu==="women"?<hr/>:<></>}</li>
            <li onClick={()=>{setMenu("Kids")}}><Link style={{textDecoration:'none'}}  to='/kids'>Kids</Link>{menu==="Kids"?<hr/>:<></>}</li>
         </ul>

        <div className="nav-login-cart">
           <Link to='/login'><button >Login</button></Link> 
            <Link to='/cart'><img  className='imagecart'src={cart_icon} alt='Login'/></Link>
            <div className="nav-cart-count">
                0
            </div>

            <DarkModeToggle/>
            

        </div>

    </div>
  )
}

export default Navbar