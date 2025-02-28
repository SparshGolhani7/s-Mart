import { useContext,createContext, useState } from "react";


export  const AllContext = createContext()

export const AllProvider = ({children})=>{
 const [searchProducts,setSearchProducts]= useState([])
  
    return (
      <AllContext.Provider value={{ searchProducts,setSearchProducts }}>
        {children}
      </AllContext.Provider>
    );
  };