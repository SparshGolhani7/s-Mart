import { useContext, createContext, useState } from "react";
import { useNavigate} from "react-router-dom";

export const AllContext = createContext();

export const AllProvider = ({ children }) => {
  const [searchProducts, setSearchProducts] = useState([]);
  const [searchTerm, setSearchTerm] = useState([]);
  const [minPrice, setMinPrice] = useState(100);
  const [maxPrice, setMaxPrice] = useState(500);
  // const [productType, setProductType] = useState("simple"); brand,setBrand
  const [brands, setBrands] = useState([]);
  const [brand, setBrand] = useState("SelectBrand");
  const [cart,setCart] = useState([]);
  const [productDetail,setProductDetail] = useState(null);
  const navigate = useNavigate();

    // Increment function
    const increment = (product) => {
      setCart((prevCart) => {
        const existingItem = prevCart.find((item) => item.id === product.id);
        if (existingItem) {
  
          return prevCart.map((item) =>
            item.id === product.id ? { ...item, qty: item.qty + 1 } : item
          );
        } else {
          return [...prevCart, {...product,qty: 1 }];
        }
      });
    };
  
    // Decrement function
    const decrement = (product) => {
      setCart((prevCart) => {
        return prevCart
          .map((item) =>
            item.id === product.id ? { ...item, qty: item.qty - 1 } : item
          )
          .filter((item) => item.qty > 0);
      });
    };

      const handleDetail = (product) => {
        setProductDetail(product)

        navigate(`/productDetail/${product.id}`);
      };
    
  


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
        setBrand,
        increment,
        decrement,
        cart,
        setCart,
        productDetail,
        setProductDetail,
        handleDetail


      }}
    >
      {children}
    </AllContext.Provider>
  );
};


