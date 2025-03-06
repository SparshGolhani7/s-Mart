import React, { useContext, useEffect} from "react";
import { useNavigate } from "react-router-dom";
import { getProductBrands } from "../api/woocommerce";
import { AllContext } from "../context/AllContext";

const Filter = ({categoryId}) => {
  const {minPrice,setMinPrice,maxPrice,setMaxPrice,brands, setBrands,brand,setBrand} = useContext(AllContext)

  const navigate = useNavigate();

  useEffect(() => {
    async function fetchProducts() {
      const data = await getProductBrands ();
      setBrands(data);
     // console.log(brands);
    }
    fetchProducts();
  }, []);







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
       <select onChange={(e) => setBrand(e.target.value)} defaultValue="">
      <option value={brand}>{brand}</option>
      {/* {console.log(brands,"brands")} */}
      {brands?.map((brAnd) => (
        <option key={brAnd.id} value={brAnd.slug}>
          {brAnd.name}
        </option>
      ))}
    </select>

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
          setBrand("SelectBrand")
          navigate("/")
          
        }}>ClearFilter</button>
      </div>
    </div>
  );
};

export default Filter;



//           setBrands("SelectBrand");
//           navigate('/allProducts')