import React, { useContext } from 'react'
import { Context } from '../Context/Context'
import { useParams } from 'react-router-dom';
import Breadcrums from '../Components/Breadcrums/Breadcrums';
import ProductDisplay from '../Components/ProductDisplay/ProductDisplay';
import Description from '../Components/Description/Description';
import Relatedproduct from '../Components/RelatedProduct/Relatedproduct';

const Product = () => {//for the product page
    const {all_product}=useContext(Context);//accessing the contex value
    const {productId}=useParams();
    // console.log("the produtc i s"+productId);
    const product=all_product.find((e)=>e.id===Number(productId));


  return (
    <div>

        <Breadcrums product={product}/>
        <ProductDisplay product={product}/>
        <Description/>
        <Relatedproduct/>


    </div>
  )
}

export default Product