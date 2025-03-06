import React, { useEffect, useState } from "react";
import { useParams,useSearchParams } from "react-router-dom";
import { getProduct,getProductCategories1 } from "../api/woocommerce";
import Filter from "./Filter";


const ProductList = () => {
  // const {categoryId} = useParams();
  const [searchParams] = useSearchParams();
  const categoryId = searchParams.get('catg_id') || "";
  const [products, setProducts] = useState([]);
 

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
        {products.map((product) => (
          <div key={product.id} className="product-card">
            <img 
              className="product-image"
              src={product.images[0]?.src} 
              alt={product.name} 
            />
            <h3 className="product-name">{product.name}</h3>
            <p className="product-price" style={{color:"#f7fcf8 "}}>₹{product.price}</p>
            <button className="add-to-cart-btn">Add to Cart</button>
          </div>
        ))}
      </div>
    </>
  );
};

export default ProductList;