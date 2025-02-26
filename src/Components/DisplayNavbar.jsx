import React,{useState} from 'react';
import { useNavigate } from "react-router-dom";
import { Input, Button, Card, Row, Col } from 'antd';


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
        <h1 className="navbar-title">sMart</h1>
        <div className="navbar-links">

          
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



          <button onClick={() => navigate('/')} className="nav-btn home-btn" >
            Home
          </button>
          <button onClick={handleShopNow} className="nav-btn " >
            ShopNow
          </button>
          <button onClick={() => navigate('/bestSeller')} className="nav-btn home-btn" >
            BestSeller
          </button>
          <button onClick={handleViewCart} className="nav-btn cart-btn">
            My Cart 
          </button>
          <button onClick={handleViewWishlist} className="nav-btn wishlist-btn">
            Wishlist 
          </button>
          

        </div>
      </nav>
    );
};

export default DisplayNavbar;
