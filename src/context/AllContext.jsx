import { useContext, createContext, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

export const AllContext = createContext();

export const AllProvider = ({ children }) => {
  const navigate = useNavigate();

  // Load cart from localStorage or initialize it as an empty array
  const [cart, setCart] = useState(() => {
    const storedCart = localStorage.getItem("cart");
    return storedCart ? JSON.parse(storedCart) : [];
  });

  const [searchProducts, setSearchProducts] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [minPrice, setMinPrice] = useState(100);
  const [maxPrice, setMaxPrice] = useState(500);
  const [brands, setBrands] = useState([]);
  const [brand, setBrand] = useState("SelectBrand");
  const [productDetail, setProductDetail] = useState(null);

  // Save cart to localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  // Increment function
  const increment = (product) => {
    setCart((prevCart) => {
      const existingItem = prevCart.find((item) => item.id === product.id);
      if (existingItem) {
        return prevCart.map((item) =>
          item.id === product.id ? { ...item, qty: item.qty + 1 } : item
        );
      } else {
        return [...prevCart, { ...product, qty: 1 }];
      }
    });
  };

  // Decrement function
  const decrement = (product) => {
    setCart((prevCart) =>
      prevCart
        .map((item) =>
          item.id === product.id ? { ...item, qty: item.qty - 1 } : item
        )
        .filter((item) => item.qty > 0)
    );
  };

  const handleDetail = (product) => {
    setProductDetail(product);
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
        handleDetail,
      }}
    >
      {children}
    </AllContext.Provider>
  );
};
