import React,{useState} from "react";
import ProductList from "./Components/ProductList";
import {BrowserRouter,Routes,Route} from "react-router-dom"
import DisplayNavbar from "./Components/DisplayNavbar"
import './App.css'

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

