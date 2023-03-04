import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { useContext } from 'react';
import { ProductsContext } from '../../context/products.context';
import { useSearchParams } from 'react-router-dom';
const IndividualProduct = () => {
    
    const [products,setProducts] = useContext(ProductsContext);
    const { id} = useParams();
    console.log(id);
   
    useEffect(() => {
       
    },[products]);
    
    if(products[0] === undefined || products === ' ') {
        return(  
          <>
       
          <h1>Loading...</h1>
          </>
        )
      }

    const individualProduct = products.find((product) => product.id === id);
    



   

   

   
    

  return (
    <div>
       {individualProduct.name}
    </div>
  )
}

export default IndividualProduct