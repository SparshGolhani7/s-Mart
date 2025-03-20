import React,{useState} from "react";
import ProductList from "./Components/ProductList";
import {BrowserRouter,Routes,Route} from "react-router-dom"
import DisplayNavbar from "./Components/DisplayNavbar"
import './App.css'
import Home from "./Components/Home";
import CategoryList from "./Components/CategoryList";
import AllProducts from "./Components/AllProducts";
import { AllProvider } from "./context/AllContext";
import SearchProducts from "./Components/SearchProducts";
import Filter from "./Components/Filter";
import FilterProducts from "./Components/FilterProducts";
import { Footer } from "antd/es/layout/layout";
import FooterComponent from "./Components/Footer";
import MyCart from "./Components/MyCart";
import { Descriptions } from "antd";
import Description from "./Components/Description";

function App() {
  const [categoryId,setCategoryId] = useState(55)
  

  return (
    <AllProvider>
    {/* <BrowserRouter> */}
   
    {/* <Navbar/> */}
    <DisplayNavbar categoryId={categoryId} setCategoryId={setCategoryId} />
    <Routes>

      <Route index element={<CategoryList categoryId={categoryId} setCategoryId={setCategoryId}/>}></Route>
      <Route path="/products" element={<ProductList categoryId={categoryId}/>}></Route>
      <Route path="/allProducts" element={<AllProducts/>}></Route> 
      <Route path="/searchProducts" element={<SearchProducts/>}></Route>
     <Route path="/filter" element={<Filter categoryId={categoryId}/>}></Route> 
        <Route path="/filterProducts" element={<FilterProducts/>}></Route>
        <Route path="/myCart" element={<MyCart/>}></Route>
        <Route path="/productDetail/:id" element={<Description/>}></Route>

      {/* 
      <Route path="/bestSeller" element={<BestSellers  />}></Route>
      <Route path="/viewcart" element={<MyCart/>}></Route>
      <Route path="/wishlist" element={<Wishlist/>}></Route> */}
    </Routes>
    
    {/* <FooterComponent/> */}
    
    {/* </BrowserRouter> */}
    
    </AllProvider>


  
  );
}

export default App;


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




