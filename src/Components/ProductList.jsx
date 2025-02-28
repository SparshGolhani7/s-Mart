import React, { useEffect, useState } from "react";
import { useParams,useSearchParams } from "react-router-dom";
import { getProduct,getProductCategories1 } from "../api/woocommerce";


const ProductList = () => {
  // const {categoryId} = useParams();
  const [searchParams] = useSearchParams();
  const categoryId = searchParams.get('catg_id') || "";
  const [products, setProducts] = useState([]);
 

 

  // const options = [
  //   {
  //     value: 'zhejiang',
  //     label: 'Zhejiang',
  //     children: [
  //       {
  //         value: 'hangzhou',
  //         label: 'Hangzhou',
  //         children: [
  //           {
  //             value: 'xihu',
  //             label: 'West Lake',
  //           },
  //         ],
  //       },
  //     ],
  //   },
  //   {
  //     value: 'jiangsu',
  //     label: 'Jiangsu',
  //     children: [
  //       {
  //         value: 'nanjing',
  //         label: 'Nanjing',
  //         children: [
  //           {
  //             value: 'zhonghuamen',
  //             label: 'Zhong Hua Men',
  //           },
  //         ],
  //       },
  //     ],
  //   },
  // ];

  // const onChange = (value) => {
  //   console.log(value);
  // };
  
  // // Just show the latest item.
  // const displayRender = (labels) => labels[labels.length - 1];

 
  
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

export default ProductList;







