import React,{useContext, useEffect, useState} from 'react';
import { useNavigate } from "react-router-dom";
import { Input, Button, Card, Row, Col } from 'antd';
import {UserOutlined,ShoppingCartOutlined} from '@ant-design/icons'
import { Cascader } from "antd";
import { AllContext } from '../context/AllContext';
import { getProductBySearch } from '../api/woocommerce';
import Filter from './Filter';


const { Search } = Input;

const DisplayNavbar = ({categoryId,setCategoryId}) => {
  
  const {searchProducts,setSearchProducts,searchTerm,setSearchTerm} = useContext(AllContext)
  const navigate = useNavigate();

  // const handleSearch = async (value) => {
  //   setSearchTerm(value); 
  


    const handleSearch = (searchTerm) => {
      navigate(`/searchProducts?${searchTerm}`)
      setSearchTerm("")
    };

  // const handleChange = (e) => {
  //   setSearchTerm(e.target.value);
  // };

    const handleViewCart = () => {
        navigate('/viewcart');
    };

    const handleViewWishlist = () => {
        navigate('/wishlist');
    };

    const handleShopNow = () => {
      navigate('/shopnow');
    };

    // useEffect(()=>{
    //   // {categoryId==55?navigate('/'):null}
    //   navigate('/')

    // },[categoryId])
    // useEffect(() => {
    //   if (categoryId === 55) {
    //     navigate('/');
    //   }
    // }, [categoryId, navigate]);
    

    // return (
    //   <nav className="navbar">
    //     {/* Logo & Category Wrapper */}
    //     <div className="navbar-header">
    //       <h1 className="navbar-title">sMart</h1>
    //       <div className="category-section">
    //         <Cascader expandTrigger="hover" placeholder="Select Category" />
    //       </div>
    //     </div>
    

    
    //   <Search
    //     placeholder="Search items"
    //     value={searchTerm}
    //     onChange={handleChange}
    //     enterButton="Search"
    //     size="small"
    //     onSearch={handleSearch} 
    //     style={{ marginBottom: '20px' }}
    //   />
           
    //     {/* Navigation Links */}
    //     <div className="navbar-links">
    //     <button 
    //       onClick={() => {
    //         setCategoryId(55); // Set categoryId first
    //         navigate('/'); // Then navigate to home
    //       }}  
    //       className="nav-btn home-btn"
    //     >
    //       Home
    //     </button>
    //       <button onClick={()=>navigate('/allProducts')}className="nav-btn allProducts-btn">
    //        All Products
    //       </button>
    //       <button onClick={handleViewCart} className="nav-btn cart-btn">
    //         My Cart
    //       </button>
    //       <button onClick={handleViewWishlist} className="nav-btn wishlist-btn">
    //         Wishlist
    //       </button>
    //       <UserOutlined />
    //     </div>
    //   </nav>
    // );

    return (
      <nav className="navbar">
        {/* Logo & Category Wrapper */}
        <div className="navbar-header">
          <h1 className="navbar-title">sMart</h1>
          
  
          {/* NEW: Wrapped Search & Cascader in a div for better alignment */}
          <div className="search-category-container">  {/* // UPDATED */}
            {/* UPDATED: Improved Cascader Styling */}
            {/* <Cascader 
              expandTrigger="hover" 
              placeholder="Select Category"
              style={{ width: 200, padding: '5px', borderRadius: '6px' }} // UPDATED
            />            */}
          </div>
        </div>
  
        {/* Navigation Links */}
        <div className="navbar-links">
          {/* UPDATED: Styled Search Bar */}
          
          <Search
              placeholder="Search items"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              enterButton="Search"
              size="large" // UPDATED: Increased size
              onSearch={()=>handleSearch(searchTerm)}
              className={"nav-searchAntd"} 
            />
            {/* <button onClick={()=>setSearchTerm("")}>Clear</button> */}
            {/* {console.log(searchProducts,"searched")} */}
          <button 
            onClick={() => {
              setCategoryId(55); 
              navigate('/');
            }}  
            className="nav-btn home-btn"
          >
            Home
          </button>
          <button onClick={() => navigate('/allProducts')} className="nav-btn allProducts-btn">
            All Products
          </button>
          <button onClick={handleViewCart} className="nav-btn cart-btn">
            MyCart
          <ShoppingCartOutlined />
          </button>
          <button onClick={handleViewWishlist} className="nav-btn wishlist-btn">
           Login
            <UserOutlined />
          </button>
          
        </div>
      </nav>
    );
          
};

export default DisplayNavbar;