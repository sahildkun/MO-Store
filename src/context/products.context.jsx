import { createContext } from "react";
import { useState,useEffect } from "react";
import axios, { AxiosError } from "axios";
import { json } from "react-router-dom";
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
        setProducts(null);
      throw json({message: 'Could not load data for this product'} , {
        status: 500,
      })
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