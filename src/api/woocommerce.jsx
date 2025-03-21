import axios from "axios";

const consumerKey = "ck_2b7dc2f65d2d07f1893afdc41c82c6fdd82067d3";
const consumerSecret = "cs_94e5b8c17fbf4eee8e93cebff3c4a1d92ca10d51";

const siteURL = "https://devfolio.co.in/onlinestore"; 



const woocommerce = axios.create({
  baseURL: `${siteURL}/wp-json/wc/v3`,
  auth: {
    username: consumerKey,
    password: consumerSecret,
  },
});



export const getProduct = async (catgId) => {
  try {
    const response = await woocommerce.get("/products",{
      params:{
       per_page:50,
        // category:55,
        category:catgId,

      // parent_id:55,
      },
    })
    return response.data;
    
  } catch (error) {
    console.error("Error fetching products:", error);
    return [];
  }
};

export const allProducts = async (page) => {
  try {
    const response = await woocommerce.get("/products", {
      params: {
        per_page: 4, // Load 10 products per request
        page: page,  // Dynamic page number
        category: 55,
      },
    });
    return response.data;
  } catch (error) {
    console.error("Error fetching products:", error);
    return [];
  }
};


export const getProductCategories1 = async () => {
  try {
    const response = await woocommerce.get("/products/categories",{
      params:{
        parent:55,
      },
    })
    return response.data;
    
  } catch (error) {
    console.error("Error fetching products:", error);
    return [];
  }
};


export const getProductSubCategories1 = async (subCatgId) => {
  try {
    const response = await woocommerce.get("/products/categories",{
      params:{
        parent:subCatgId,
      },
    })
    return response.data;
    
  } catch (error) {
    console.error("Error fetching products:", error);
    return [];
  }
};



export const getProductBySearch = async(value)=>{
  try {
    const response = await woocommerce.get("/products",{
      params:{
        category:55,
        search:value.toLowerCase()
      }
    }
      )
    return response.data;
    
  } catch (error) {
    console.error("Error fetching products:", error);
    return [];
  }

};

export const getProductByFilter = async(minPrice,maxPrice)=>{
  try {
    const response = await woocommerce.get("/products",{
   params: {
   category: 55, 
  //  type:productType,
   min_price: minPrice,
   max_price: maxPrice,  
    
    // product_brand: brand,
    per_page:46,
   },
    }
      )
    return response.data;
    
  } catch (error) {
    console.error("Error fetching products:", error);
    return [];
  }

};


export const getProductBrands = async()=>{
  try {
    const response = await woocommerce.get("/products/brands",{
   params: {
    parent: 178, 
   },
    }
      )
    return response.data;
    
  } catch (error) {
    console.error("Error fetching brands:", error);
    return [];
  }
};

















// https://devfolio.co.in/onlinestore/wp-json/wc/v3/products/categories?parent=52
