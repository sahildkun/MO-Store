import React, { Suspense } from 'react';
import { useState,useEffect,useContext } from 'react';
import axios from 'axios';
import Card from '../../components/productCard/product-card';
import { ProductsContext } from '../../context/products.context';
import SidebarDisplay from '../../components/sideBar/Sidebardisplay';
import { CartContext } from '../../context/cart.context';
import Sidebar from '../../components/sideBar/Sidebar';
import { Await, defer, useLoaderData ,useNavigation} from 'react-router-dom';
const Products = () => {

    // const data = useLoaderData();
    // const navigation = useNavigation();

    //  console.log(data);
    const [products, setProducts] = useContext(ProductsContext);
    //  const products = data;
    const {showSidebar} = useContext(CartContext) 
    const isLoading = useContext(ProductsContext);
      // console.log(isLoading);
     const [searchfield , setSearchfield] = useState("");
    useEffect(() => {
      // console.log(products)
    }, [products])
     
    if(products === '') {

      return (  
        <>
        loading...
        </>
      )
    }
    


   

    const filteredProducts = products.filter((product) => (product.name.toLocaleLowerCase().includes(searchfield)));


 
  return (
    <>
   {/* { showSidebar && <SidebarDisplay/>} */}
   <div  className={`${showSidebar ? 'fixed inset-0 bg-black bg-opacity-50  ' : ''} `} >
   <Sidebar/>
   </div>
    <div>
      
      <div className="flex flex-row justify-center py-10">
      <input type="search" className='border-white bg-transparent border-[2px]  w-96 p-5 rounded-full font-bold' placeholder="Search Your Products here" onChange={(event) => setSearchfield( event.target.value.toLowerCase()) } />
      </div>
      
      
        <div className="grid grid-rows-6  md:grid-rows-none md:grid-cols-3 gap-y-3">

      {
         
          filteredProducts.length > 0 ? (filteredProducts.map((product) => {

            // const product = products[product];

          return (
            <div key={product.id}>

            <Card key={product.id} id={product.id} name={product.name} description={product.description} price={product.price} img={product.image}/>

            </div>
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