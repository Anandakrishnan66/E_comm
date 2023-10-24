import React, { useContext } from 'react'
import './css/shopcategory.css'
import { Context } from '../Context/Context'
import dropdown_icon from '../Components/Assets/dropdown_icon.png'
import Item from '../Components/items/items'
const ShopCategory = (props) => {

    const {all_product}=useContext(Context)//accessing the context value

  return (
    <div className='shopcategory'>

        <img src={props.banner} alt=''/>

        <div className="shopcategory-indexsort">
            <p>
                <span>
                    Showing 1-12
                </span>
                out of 50products
            </p>

            <div className="shopcategory-sort">
                Sort by
                <img src={dropdown_icon}alt=''/>
            </div>
        </div>

        <div className="shopcategory-products">
            {all_product.map((item,i)=>{
                if(props.category===item.category){
                    return ( <Item  key={i} id={item.id} image={item.image}
                
                    new_price={item.new_price}
                    old_price={item.old_price}
                    />)
                }
                else{
                    return null;
                }

            })}
        </div>

        <div>
            <div className="shopcategory-loadmore">
                Explore More
            </div>
        </div>
        </div>
  )
}

export default ShopCategory
