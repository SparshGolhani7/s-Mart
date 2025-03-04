import React, { useState,useEffect,useContext } from 'react'
import { useParams, useSearchParams } from 'react-router-dom';
import { AllContext } from '../context/AllContext';
import {getProductByFilter} from "../api/woocommerce"
import Filter from './Filter';

const FilterProducts = () => {
  const [filteredProducts,setFilteredProducts] = useState([])
  // const {productType,min_price,max_price}=useParams()
  // const [searchParams] =useSearchParams()
  // const productType = searchParams.get("type") || ""
  // const minPrice = searchParams.get("min_price") || ""
  // const maxPrice = searchParams.get("max_price") || ""

  const {minPrice,maxPrice} = useContext(AllContext)
  
  // productType

  useEffect(() => {
    async function fetchProducts() {
      if (minPrice || maxPrice ) {
        const data = await getProductByFilter(minPrice, maxPrice);
        setFilteredProducts(data);
      }
    }
    fetchProducts();
  }, [minPrice, maxPrice])
  

  return (
    <>
<div className="products-grid">
      {console.log(filteredProducts)} 
      <Filter/>
      {filteredProducts.map((product) => (
        <div key={product.id} className="product-card">
          <img 
            className="product-image"
            src={product.images[0]?.src} 
            alt={product.name} 
          />
          <h3 className="product-name">{product.name}</h3>
          <p className="product-price" style={{color:"#f7fcf8"}}>₹{product.price}</p>
          <button className="add-to-cart-btn">Add to Cart</button>
        </div>
      ))}
    </div>
    
    </>
  )
}

export default FilterProducts






{/* <button onClick={()=>navigate(`/filterProducts?productType=${productType}&min_price=${minPrice}&max_price=${maxPrice}`)}>Apply</button> */}



