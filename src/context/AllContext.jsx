import { useContext, createContext, useState } from "react";

export const AllContext = createContext();

export const AllProvider = ({ children }) => {
  const [searchProducts, setSearchProducts] = useState([]);
  const [searchTerm, setSearchTerm] = useState([]);
  const [minPrice, setMinPrice] = useState(100);
  const [maxPrice, setMaxPrice] = useState(500);
  // const [productType, setProductType] = useState("simple"); brand,setBrand
  const [brands, setBrands] = useState([]);
  const [brand, setBrand] = useState("SelectBrand");


  return (
    <AllContext.Provider
      value={{
        searchProducts,
        setSearchProducts,
        searchTerm,
        setSearchTerm,
        minPrice,
        setMinPrice,
        maxPrice,
        setMaxPrice,
        brands,
        setBrands,
        brand,
        setBrand

      }}
    >
      {children}
    </AllContext.Provider>
  );
};
