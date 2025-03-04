//  import React, { useContext } from 'react'
// import { AllContext } from '../context/AllContext'
//  import { useParams,useSearchParams, useNavigate } from "react-router-dom";

 import React,{useContext,useEffect} from 'react'
 import { useParams,useSearchParams } from "react-router-dom";
import { getProductBySearch } from "../api/woocommerce";
import { AllContext } from '../context/AllContext';



 
 const SearchProducts = () => {

  const [searchParams] = useSearchParams();
   const productName = searchParams.get('prod_Name') || "";
  // const [products, setProducts] = useState([]);
  const {searchProducts,setSearchProducts,searchTerm,setSearchTerm} = useContext(AllContext)


  useEffect(() => {
    async function fetchProducts() {
      if(searchTerm){
        const data = await getProductBySearch (searchTerm);
        setSearchProducts(data);
      }
     // console.log(products);
    }
    fetchProducts();
  }, [searchTerm]);
   return (
     <>
     {searchProducts.length ===0 ?<p>No Products Found</p>:(
      <div className="products-grid">
      {/* {console.log(searchProducts)} */} 
      {searchProducts.map((product) => (
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

     )}


       
     </>
   )
 }
 
 export default SearchProducts
 

//  const SearchsearchProducts = () => {
//    const {searchProducts,setSearchProducts,searchTerm,setSearchTerm} = useContext(AllContext) 
//    const [searchParams] = useSearchParams();
//   const productName = searchParams.get('productName') || "";
//    const navigate = useNavigate();

   
//    useEffect(() => {
//       async function fetchProducts() {  
//           const data = await getProductBySearch(searchTerm);
//            setSearchProducts(data);
//         // console.log(products);
//        }
//        fetchProducts();
//   },[productName,searchTerm,setSearchTerm]);



//    return (
//      <>
//      <div className="searchProducts-grid">
//     {/* {console.log(searchProducts)} */}
//      {searchProducts.map((product) => (
//        <div key={product.id} className="product-card">
//          <img 
//            className="product-image"
//            src={product.images[0]?.src} 
//            alt={product.name} 
//          />
//          <h3 className="product-name">{product.name}</h3>
//          <p className="product-price" style={{color:"#5b2f5b "}}>₹{product.price}</p>
//          <button className="add-to-cart-btn">Add to Cart</button>
//        </div>
//      ))}
//    </div>
//    </>
    
//    )
//  }
//  export default SearchsearchProducts