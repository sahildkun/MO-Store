import React from 'react'
import { useState,useEffect,useContext } from 'react';
import axios from 'axios';
import Card from '../../components/productCard/product-card';
import { ProductsContext } from '../../context/products.context';

const Products = () => {
    const [filteredProducts, setFilteredProducts] = useContext(ProductsContext);
 




 
  return (
    <div>
        <div className="grid grid-rows-6 md:grid-rows-none md:grid-cols-3 gap-y-3">
      {

          filteredProducts.length > 0 ? (filteredProducts.map((product) => {

            // const product = products[product];

          return (
            <>

            <Card key={product.id} id={product.id} name={product.name} description={product.description} price={product.price} img={product.image}/>

            </>
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