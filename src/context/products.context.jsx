import { createContext } from "react";
import { useState,useEffect } from "react";
import axios, { AxiosError } from "axios";

export const  ProductsContext = createContext();



export const ProductsProvider = ({children}) => {
    const [ products, setProducts] = useState('');
    const[ isLoading, setIsLoading] = useState(false);
    const [error , setError ] = useState(null);

    
      const getData = async () => {

        try{
          setIsLoading(true);
          const { data } = await axios.get(`https://api.pujakaitem.com/api/products`);
          setProducts(data);
          setIsLoading(false);
         }
    catch (err) {
     alert(err.message)
    }
  }
;

useEffect(() => {
  getData();
}, [])
 






    return (  
        <ProductsContext.Provider value={[ products, setProducts  ]}>{children}</ProductsContext.Provider>
    )
}