import { createContext } from "react";
import { useState,useEffect } from "react";
import axios from "axios";

export const  ProductsContext = createContext();



export const ProductsProvider = ({children}) => {
    const [ products, setProducts] = useState('');
    const getData = async () => {
    const { data } = await axios.get(`https://api.pujakaitem.com/api/products`);

    
      setProducts(data);
    
    
  };
  useEffect(() => {
    getData();
  }, []);

 






    return (  
        <ProductsContext.Provider value={[ products, setProducts]}>{children}</ProductsContext.Provider>
    )
}