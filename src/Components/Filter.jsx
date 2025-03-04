import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { AllContext } from "../context/AllContext";

const Filter = () => {
  const {minPrice,setMinPrice,maxPrice,setMaxPrice} = useContext(AllContext)

  const navigate = useNavigate();

  return (
    <div className="filter-container">
      <h2>Filter Products</h2>
      
      {/* <div className="filter-group">
        <label>Product Type:</label>
        <select onChange={(e) => setProductType(e.target.value)} value={productType}>
          <option value="simple">Simple</option>
          <option value="variable">Variable</option>
        </select>
      </div> */}

      <div className="filter-group">
        <label>Min Price:</label>
        <input
          type="number"
          value={minPrice}
          onChange={(e) => setMinPrice(e.target.value)}
        />
      </div>

      <div className="filter-group">
        <label>Max Price:</label>
        <input
          type="number"
          value={maxPrice}
          onChange={(e) => setMaxPrice(e.target.value)}
        />
    <br/>
        <button onClick={()=>navigate(`/filterProducts?min_price=${minPrice}&max_price=${maxPrice}`)}>Apply</button>
        <br />        
        <button onClick={()=>{
          setMinPrice(100);
          setMaxPrice(500);
        }}>ClearFilter</button>
      </div>
    </div>
  );
};

export default Filter;
