import React,{useContext, useEffect,useState} from 'react'
import { AllContext } from '../context/AllContext';

function Description() {
    //   const { productId } = useParams(); 
    const {productDetail,increment,decrement,cart} = useContext(AllContext)

    const cartItem = cart?.find((item)=>item.id===productDetail?.id)
    const count = cartItem ? cartItem.qty :0;

  return (
      <div className="productDetail-container">
      <div className="productDetail-image">
        <img src={productDetail?.images[0]?.src} alt={productDetail?.name} />
      </div>
      <div className="productDetail-details">
        <h2 className="productDetail-title">{productDetail?.name}</h2>
        <p className="productDetail-price">₹{productDetail?.price}</p>
        <p className="productDetail-description" dangerouslySetInnerHTML={{ __html: productDetail?.description }}></p>
        <div className="buttons">
        {count===0?(<button
          onClick={()=>increment(productDetail)}
           className="add-to-cart-btn1">Add to Cart</button>):(
            <div className="cart-qty1">
            <button
          onClick={()=>decrement(productDetail)}
           >-</button>
          <span className="countForAddToCart1">{count}</span>
           <button
          onClick={()=>increment(productDetail)}
           >+</button></div>
           )}
                  
        </div>
      </div>
    </div>
  );
  
}

export default Description



// <p className="productt-description" dangerouslySetInnerHTML={{ __html: product.description }}></p>