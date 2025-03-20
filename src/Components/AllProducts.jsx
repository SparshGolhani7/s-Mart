// import React, { useContext, useEffect, useState } from "react";
// import { allProducts } from "../api/woocommerce";
// import { AllContext } from "../context/AllContext";
// import Filter from "./Filter";

// const AllProducts = () => {
//   const [products, setProducts] = useState([]);
//   // const {setSearchedProducts} = useContext(AllContext)
//   const [page,setPage] = useState(1);

//   useEffect(() => {
//     async function fetchProducts() {
//       const data = await allProducts (page);
//       setProducts(prev =>[...prev,...data]);
//      // console.log(products);
//     }
//     fetchProducts();
//   }, [page]);

//   const handleScroll=()=>{
//     // console.log("height",document.documentElement.scrollHeight);
//     // console.log("top",document.documentElement.scrollTop);
//     // console.log("window",window.innerHeight);

//     if(window.innerHeight + document.documentElement.scrollTop + 1 >= document.documentElement.scrollHeight){
//       setPage((prev)=>prev+1);
//     }
//   }

//   useEffect(()=>{
//     window.addEventListener("scroll",handleScroll);
//     return ()=>window.removeEventListener("scroll",handleScroll);
//   },[]);

//   return (
//     <>

//   <div className="products-grid">

//     {/* <Filter/> */}

//     <img

//         className="category-banner"
//        src="https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=2700/layout-engine/2022-05/Group-33704.jpg"></img>

//   {console.log(products)}
//   {products.map((product) => (
//     <div key={product.id} className="product-card">
//       <img
//         className="product-image"
//         src={product.images[0]?.src}
//         alt={product.name}
//       />
//       <h3 className="product-name">{product.name}</h3>
//       <p className="product-price" style={{color:"#f7fcf8 "}}>₹{product.price}</p>
//       <button className="add-to-cart-btn">Add to Cart</button>
//     </div>
//   ))}
// </div>
// </>
// );
// };

// export default AllProducts;

import React, { useContext, useEffect, useState } from "react";
import { allProducts } from "../api/woocommerce";
import { AllContext } from "../context/AllContext";

const AllProducts = () => {
  const [products, setProducts] = useState([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const [hasMore, setHasMore] = useState(true);

  const {increment,decrement,cart,handleDetail} = useContext(AllContext)

  useEffect(() => {
    async function fetchProducts() {
      if (!hasMore) return; // Stop fetching
      setLoading(true);
      try {
        const data = await allProducts(page);
        if (data.length === 0) {
          setHasMore(false);
        } else {
          setProducts((prev) => [...prev, ...data]);
        }
      } catch (error) {
        console.error("Error fetching products:", error);
      }
      setLoading(false);
    }
    fetchProducts();
  }, [page]);

  const handleScroll = () => {
    if (
      window.innerHeight + document.documentElement.scrollTop + 1 >=
      document.documentElement.scrollHeight
    ) {
      setPage((prev) => prev + 1);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const loadMoreProduct = () => {
    async function fetchProducts() {
      if (!hasMore) return; // Stop fetching
      setLoading(true);
      try {
        const data = await allProducts(page);
        if (data.length === 0) {
          setHasMore(false);
        } else {
          setProducts((prev) => [...prev, ...data]);
        }
      } catch (error) {
        console.error("Error fetching products:", error);
      }
      setLoading(false);
    }
    fetchProducts();
  };

  return (
    <>
      <div className="products-grid">
        <img
          className="category-banner"
          src="https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=2700/layout-engine/2022-05/Group-33704.jpg"
          alt="Category Banner"
        />

        {products?.map((product) => {
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
            <p className="product-price" style={{ color: "#f7fcf8" }}>
              ₹{product.price}
            </p>
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
        {/* <button onClick={()=>{
         handlePageIncrement()
          setPage(page+1)}}> 
          Load More
        </button> */}

        {!loading && !hasMore && (
          <p style={{ textAlign: "center", margin: "20px", color: "black" }}>
            No more products available
          </p>
        )}
      </div>
    </>
  );
};

export default AllProducts;

