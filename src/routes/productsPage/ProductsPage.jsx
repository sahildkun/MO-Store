import React from 'react'
import { useState,useEffect,useContext } from 'react';
import axios from 'axios';
import Card from '../../components/productCard/product-card';
import { ProductsContext } from '../../context/products.context';
import Navbar from '../../components/navbar/Navbar';


const Products = () => {
    const [products, setProducts] = useContext(ProductsContext);
    const [searchfield , setSearchfield] = useState("");
    useEffect(() => {
      console.log(products)
    }, [products])
    
    if(products === null) {

      console.log("pls check your internet")
    }
    if(products=== '') {
      return(  
        <>
        <Navbar/>
        <h1>Loading...</h1>
        </>
      )
    }

    const filteredProducts = products.filter((product) => (product.name.toLocaleLowerCase().includes(searchfield)));


 
  return (
    <div>
      <div className="flex flex-row justify-center py-10">
      <input type="search" className='border-white bg-transparent border-[2px]  w-96 p-5 rounded-full font-bold' placeholder="Search Your Products here" onChange={(event) => setSearchfield( event.target.value.toLowerCase()) } />
      </div>

        <div className="grid grid-rows-6 md:grid-rows-none md:grid-cols-3 gap-y-3">
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
         </>)
      }
      </div>
    </div>
  )
}

export default Products