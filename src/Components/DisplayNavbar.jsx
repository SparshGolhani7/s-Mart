import React,{useState} from 'react';
import { useNavigate } from "react-router-dom";
import { Input, Button, Card, Row, Col } from 'antd';
import {UserOutlined} from '@ant-design/icons'
import { Cascader } from "antd";




const { Search } = Input;

const DisplayNavbar = () => {
  const [searchTerm,setSearchTerm] = useState('')
  
  const handleSearch = () => {
    const filtered = jsonData.filter(item =>
      item.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    
  };

  const handleChange = (e) => {
    setSearchTerm(e.target.value);
  };
 

 
    const navigate = useNavigate();

    const handleViewCart = () => {
        navigate('/viewcart');
    };

    const handleViewWishlist = () => {
        navigate('/wishlist');
    };

    const handleShopNow = () => {
      navigate('/shopnow');
    };





    return (
      <nav className="navbar">
        {/* Logo & Category Wrapper */}
        <div className="navbar-header">
          <h1 className="navbar-title">sMart</h1>
          <div className="category-section">
            <Cascader expandTrigger="hover" placeholder="Select Category" />
          </div>
        </div>
    
        {/* Navigation Links */}
        <div className="navbar-links">
          <button onClick={() => navigate('/')} className="nav-btn home-btn">
            Home
          </button>
          <button onClick={handleViewCart} className="nav-btn cart-btn">
            My Cart
          </button>
          <button onClick={handleViewWishlist} className="nav-btn wishlist-btn">
            Wishlist
          </button>
          <UserOutlined />
        </div>
      </nav>
    );
    
};

export default DisplayNavbar;





     {/* <Search
        placeholder="Search items"
        value={searchTerm}
        onChange={handleChange}
        enterButton="Search"
        size="small"
        onSearch={handleSearch} 
        style={{ marginBottom: '20px' }}
      />
           */}