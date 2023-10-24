import React, { useContext } from 'react'
import './ProductDisplay.css'
import star_icon from'../Assets/star_icon.png'
import star_dull_icon from '../Assets/star_dull_icon.png'
import { Context } from '../../Context/Context'

const ProductDisplay = (props) => {//Product display for each image
    const {product}=props;
    const{addCart}=useContext(Context)//using the context for accessing the addcart function
    console.log("productid is "+product.id)

  return (
    <div  className='ProductDisplay'>

        <div className="productdisplay-left">
            <div className="productdisplay-imagelist">
                <img src={product.image} alt=""/>
                <img src={product.image} alt=""/>
                <img src={product.image} alt=""/>
                <img src={product.image} alt=""/>



            </div>
            <div className="productdisplayimage">
            <img className='productdisplayMain'src={product.image} alt=""/>
            </div>

        </div>

        <div className="productdisplayright">

            <h1>{product.name}</h1>
            <div className="productdisplayrightstart">
                <img src={star_icon} alt="" />
                <img src={star_icon} alt="" />
                <img src={star_icon} alt="" />

                <img src={star_icon} alt="" />
                <img src={star_dull_icon} alt="" />
                <p>{444}</p>



                
            </div>

            <div className="productdisplayright-prices">
                <div className="productdisplayrightprice-old">
                    ${product.old_price}
                </div>
                <div className="productdisplayrightnewprice">
                    ${product.new_price}

                </div>

                <div className="productdisplayright-decription">
                    A lightweight ususally knitted pullover shirt close fitting
                </div>
                <div className="productsiplayright-size">
                    <h1>Select Size</h1>
                    <div className="prouctdisplayright-sizes">
                         <div>S</div>
                         <div>M</div>

                         <div>L</div>

                         <div>XL</div>
                         <div>XXL</div>


                    </div>
                </div>
                <button onClick={()=>{addCart(product.id)}}>ADD TO CART</button>
                <p className='productdisplayright-category'><span>Category:</span>Women ,Tshirt,CropTop</p>
                <p className='productdisplayright-category'><span>Tags:</span>Modern,Latest</p>


            </div>


        </div>


    </div>
  )
}

export default ProductDisplay