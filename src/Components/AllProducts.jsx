import React, { useContext, useEffect, useState } from "react";
import { allProducts } from "../api/woocommerce";
import { AllContext } from "../context/AllContext";


const AllProducts = () => {
  const [products, setProducts] = useState([]);
  const {setSearchedProducts} = useContext(AllContext)

   
  useEffect(() => {
    async function fetchProducts() {
      const data = await allProducts ();
      setProducts(data);
     // console.log(products);
    }
    fetchProducts();
  }, []);
 

 
  return (
    <>
  <div className="products-grid">
  {console.log(products)}
  {products.map((product) => (
    <div key={product.id} className="product-card">
      <img 
        className="product-image"
        src={product.images[0]?.src} 
        alt={product.name} 
      />
      <h3 className="product-name">{product.name}</h3>
      <p className="product-price" style={{color:"#5b2f5b "}}>₹{product.price}</p>
      <button className="add-to-cart-btn">Add to Cart</button>
    </div>
  ))}
</div>
</>
);
};

export default AllProducts;