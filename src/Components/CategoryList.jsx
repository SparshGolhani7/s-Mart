import React, { useState, useEffect, useContext } from "react";
import { getProduct, getProductCategories1 } from "../api/woocommerce";
import { useNavigate } from "react-router-dom";
import { AllContext } from "../context/AllContext";


const CategoryList = ({categoryId,setCategoryId}) => {
  const [categories1, setCategories1] = useState([]);
  const {searchedProduct} = useContext(AllContext)
  const navigate = useNavigate();


  useEffect(() => {
    async function fetchProductCatgeories1() {
      const data = await getProductCategories1();
      setCategories1(data);
      // console.log(products);
    }
    fetchProductCatgeories1();
  }, []);

  // useEffect(()=>{
  //   console.log("catgid",categoryId)
  //   {categoryId!=55?navigate(`/products?catg_Id=${categoryId}`):null}
  // },[categoryId])

  // const navigateToProductsById = (a,b)=>{
 
  //   setCategoryId(a)
  //   navigate(`/products?catg_id=${a}&catg_name=${b}`);
  // }

  useEffect(() => {
    if (categoryId!=55) {
      navigate(`/products?catg_id=${categoryId}`);
    }
  }, [categoryId, navigate]); // Runs when categoryId changes

  const handleCategoryClick = (id) => {
    setCategoryId(id); //  First update the state
  };

  return (
    <>
        <ul className="category-list">
          {console.log(categories1)}
          {categories1.map((category) => (
            
            <li
             key={category.id}
             className="category-item"
             onClick={()=>handleCategoryClick(category.id)}>
              <h4 className="category-title">{category.name}</h4>
              <img
                className="category-image"
                src={category.image?.src|| "https://placehold.co/600x400"}
                alt="loading"
              />
            </li>
          ))}
        </ul>
    </>
  );
};

export default CategoryList;

// import React, { useState } from "react";
// import { Cascader, Card, Row, Col } from "antd";

// // Category Structure
// const options = [
//   {
//     value: "electronics",
//     label: "Electronics",
//     children: [
//       {
//         value: "audioDevices",
//         label: "Audio Devices",
//         children: [
//           { value: "earbuds", label: "Earbuds" },
//           { value: "headphones", label: "Headphones & Earphones" },
//           { value: "speakers", label: "Speakers & Microphones" },
//         ],
//       },
//     ],
//   },
//   {
//     value: "fashion",
//     label: "Fashion",
//     children: [
//       { value: "apparel", label: "Apparel" },
//       { value: "footwear", label: "Footwear" },
//     ],
//   },
// ];

// // Product Data
// const productData = {
//   electronics: [
//     { id: 1, name: "Sony Wireless Earbuds", price: "$99" },
//     { id: 2, name: "Samsung Galaxy Buds", price: "$89" },
//     { id: 3, name: "Bose Headphones", price: "$199" },
//     { id: 4, name: "JBL Over-Ear Headphones", price: "$129" },
//     { id: 5, name: "JBL Bluetooth Speaker", price: "$79" },
//     { id: 6, name: "Sony Home Theater", price: "$299" },
//   ],
//   audioDevices: [
//     { id: 1, name: "Sony Wireless Earbuds", price: "$99" },
//     { id: 2, name: "Samsung Galaxy Buds", price: "$89" },
//     { id: 3, name: "Bose Headphones", price: "$199" },
//     { id: 4, name: "JBL Over-Ear Headphones", price: "$129" },
//     { id: 5, name: "JBL Bluetooth Speaker", price: "$79" },
//     { id: 6, name: "Sony Home Theater", price: "$299" },
//   ],
//   earbuds: [
//     { id: 1, name: "Sony Wireless Earbuds", price: "$99" },
//     { id: 2, name: "Samsung Galaxy Buds", price: "$89" },
//   ],
//   headphones: [
//     { id: 3, name: "Bose Headphones", price: "$199" },
//     { id: 4, name: "JBL Over-Ear Headphones", price: "$129" },
//   ],
//   speakers: [
//     { id: 5, name: "JBL Bluetooth Speaker", price: "$79" },
//     { id: 6, name: "Sony Home Theater", price: "$299" },
//   ],
//   fashion: [
//     { id: 7, name: "Nike T-Shirt", price: "$29" },
//     { id: 8, name: "Adidas Hoodie", price: "$59" },
//     { id: 9, name: "Puma Sneakers", price: "$89" },
//     { id: 10, name: "Reebok Running Shoes", price: "$99" },
//   ],
//   apparel: [
//     { id: 7, name: "Nike T-Shirt", price: "$29" },
//     { id: 8, name: "Adidas Hoodie", price: "$59" },
//   ],
//   footwear: [
//     { id: 9, name: "Puma Sneakers", price: "$89" },
//     { id: 10, name: "Reebok Running Shoes", price: "$99" },
//   ],
// };

// // Get all products under the selected category
// const getAllProducts = (selectedValue) => {
//   let allProducts = productData[selectedValue] || [];

//   options.forEach((category) => {
//     if (category.value === selectedValue) {
//       category.children?.forEach((subCategory) => {
//         allProducts = [...allProducts, ...(productData[subCategory.value] || [])];

//         subCategory.children?.forEach((leafCategory) => {
//           allProducts = [...allProducts, ...(productData[leafCategory.value] || [])];
//         });
//       });
//     }

//     category.children?.forEach((subCategory) => {
//       if (subCategory.value === selectedValue) {
//         subCategory.children?.forEach((leafCategory) => {
//           allProducts = [...allProducts, ...(productData[leafCategory.value] || [])];
//         });
//       }
//     });
//   });

//   return allProducts;
// };

// const App = () => {
//   const [selectedProducts, setSelectedProducts] = useState([]);

//   const onChange = (value) => {
//     const selectedCategory = value[value.length - 1];

//     // 🛠️ Fix: Always replace the selectedProducts state, preventing mixing
//     const allProducts = getAllProducts(selectedCategory);
//     setSelectedProducts(allProducts);
//   };

//   return (
//     <div>
//       {/* Cascader with parent selection enabled */}
//       <Cascader
//         options={options}
//         changeOnSelect // 👈 Makes parents selectable
//         expandTrigger="hover"
//         onChange={onChange}
//         placeholder="Select a category"
//       />

//       {/* Display Products */}
//       <Row gutter={[16, 16]} style={{ marginTop: 20 }}>
//         {selectedProducts.map((product) => (
//           <Col span={8} key={product.id}>
//             <Card title={product.name} bordered={false}>
//               <p>{product.price}</p>
//             </Card>
//           </Col>
//         ))}
//       </Row>
//     </div>
//   );
// };

// export default App;
