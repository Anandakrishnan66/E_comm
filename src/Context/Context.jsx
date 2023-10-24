import React, { createContext, useState } from "react";
import all_product from '../Components/Assets/all_product'

export const Context=createContext(null);

const getDefaultCart=()=>{
    let cart={};
    for (let index = 0; index < all_product.length+1; index++) {
        cart[index]=0;

        
    }
    return cart;
    
}

const ContextProvider=(props)=>{
    const [cartItem,setcartItems]=useState(getDefaultCart());
    


    // console.log(cartItem)
    const addCart=(itemId)=>{ //for adding the product to cart
        console.log('item id is'+itemId)
        setcartItems((prev)=>({...prev,[itemId]:prev[itemId]+1}))
console.log(cartItem);
    }

    const removeCart=(itemId)=>{//for removing from the cart
        setcartItems((prev)=>({...prev,[itemId]:prev[itemId]-1}))

    }

    
    const contextValue={all_product,cartItem,addCart,removeCart}; //assigning the context value for context


   //context provider is returned which wraps the app component 

    return (
        <Context.Provider value={contextValue}>
            {props.children}
        </Context.Provider>
    )

}

export default ContextProvider;
