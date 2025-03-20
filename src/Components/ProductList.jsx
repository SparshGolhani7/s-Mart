import React, { useContext, useEffect, useState } from "react";
import { useParams,useSearchParams } from "react-router-dom";
import { getProduct,getProductCategories1 } from "../api/woocommerce";
import Filter from "./Filter";
import Pagination from "./Pagination";
import { AllContext } from "../context/AllContext";


const ProductList = () => {
  // const {categoryId} = useParams();
  const [searchParams] = useSearchParams();
  const categoryId = searchParams.get('catg_id') || "";
  const [products, setProducts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage, setPostsPerPage] = useState(6);

  const {increment,decrement,cart,handleDetail} = useContext(AllContext);


  

  useEffect(() => {
    console.log("Updated Cart:", cart);
  }, [cart]);
  
  useEffect(() => {
    async function fetchProducts() {
      if(categoryId){
        const data = await getProduct (categoryId);
        setProducts(data);
      }
     // console.log(products);
    }
    fetchProducts();
  }, [categoryId]);
  
 const lastPostIndex = currentPage * postsPerPage;
 const firstPostIndex= lastPostIndex - postsPerPage;
 const currentPosts = products.slice(firstPostIndex,lastPostIndex);



  return (
    <>
       {/* <Cascader
    // options={options}
    expandTrigger="hover"
    displayRender={displayRender}
    onChange={onChange}
    placeholder={"SelectBycatg"}
  /> */}
    
   
      <div className="products-grid">
      <Filter/>
        {console.log(products)}
        {currentPosts.map((product) => {
          const cartItem = cart?.find((item)=>item.id===product.id)
          const count = cartItem ? cartItem.qty :0;
      
         return(
          <div key={product.id} className="product-card">
          <img 
            className="product-image"
            src={product.images[0]?.src} 
            alt={product.name} 
            onClick={()=>handleDetail(product)}
          />
          <h3 className="product-name">{product.name}</h3>
          <p className="product-price" style={{color:"#f7fcf8 "}}>₹{product.price}</p>
          {count===0?(<button
          onClick={()=>increment(product)}
           className="add-to-cart-btn">Add to Cart</button>):(
            <div className="cart-qty">
            <button
          onClick={()=>decrement(product)}
           >-</button>
          <span className="countForAddToCart">{count}</span>
           <button
          onClick={()=>increment(product)}
           >+</button></div>
           )}
          
        </div>

         )
})}

      </div>
      <Pagination totalPosts={products.length} postsPerPage={postsPerPage} currentPage={currentPage} setCurrentPage={setCurrentPage}></Pagination>

    </>
  );
};

export default ProductList;