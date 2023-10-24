import React from 'react'
import './Relatedproduct.css'
import data_product from '../Assets/data'
import Item from '../items/items'
const Relatedproduct = () => {//Related product page
  return (
    <div className='relatedproducts'>
        <h1>Realted Products</h1>
        <hr />

        <div className="RelatedproductsItem">
            {data_product.map((item,i)=>{
                return  <Item  key={i} id={item.id} image={item.image}
                
                new_price={item.new_price}
                old_price={item.old_price}
                />

            })}

        </div>


    </div>
  )
}

export default Relatedproduct