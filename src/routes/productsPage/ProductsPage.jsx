import React, { Suspense } from 'react';
import { useState,useEffect,useContext } from 'react';
import CircularProgress from '@mui/material/CircularProgress';
import Card from '../../components/productCard/product-card';
import { ProductsContext } from '../../context/products.context';

import { CartContext } from '../../context/cart.context';
import Sidebar from '../../components/sideBar/Sidebar';
import ErrorPage from '../ErrorPage/Error';

const Products = () => {

    // const data = useLoaderData();
    // const navigation = useNavigation();

    //  console.log(data);
    const [products, setProducts] = useContext(ProductsContext);
   
    //  const products = data;
    const {showSidebar} = useContext(CartContext) 

     const [searchfield , setSearchfield] = useState("");
    useEffect(() => {
      // console.log(products)
    }, [products])
     
    if(products === '') {

      return (  
        <div className='flex  justify-center text-center items-center m-auto h-screen'>
        <CircularProgress size={70} color='inherit' />
        </div>
      )
    }
    
    if(products === null) {
      <ErrorPage/>
    }


   

    const filteredProducts = products.filter((product) => (product.name.toLocaleLowerCase().includes(searchfield)));
   

 
  return (
    <>

   <div  className={`${showSidebar ? 'fixed inset-0 bg-black bg-opacity-50  ' : ''} `} >
   <Sidebar/>
   </div>
    <div>
      
      <div className="flex flex-row justify-center py-10">
      <input type="search" className='border-white bg-transparent border-[2px] w-72 md:w-96 p-3 md:p-5 rounded-full font-bold' placeholder="Search Your Products here" onChange={(event) => setSearchfield( event.target.value.toLowerCase()) } />
      </div>
      
      
        <div className="grid grid-rows-6   items-center justify-center mx-auto sm:grid-cols-2  lg:grid-rows-none lg:grid-cols-3 gap-y-3">

      {
         
          filteredProducts.length > 0 ? (filteredProducts.map((product) => {

            // const product = products[product];

          return (
            

            <Card key={product.id} id={product.id} name={product.name} description={product.description} price={product.price} img={product.image}/>

          
          )
         })) : (<>
          <p className="flex justify-items-center text-3xl max-w-3xl">
          No such Product :// pls search correctly
          </p>
         </>)}
      

      </div>
     
    </div>
    </>
  )
}

export default React.memo(Products)


export  const loader = async () => {

    const response = await fetch('https://api.pujakaitem.com/api/products');
  // const resData = await response.json();

  
    return response;

}

// export const loader = async () => {

//   return defer({
//     products: loadProducts(),
//   })
// }