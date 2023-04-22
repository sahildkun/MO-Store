import React from 'react'
import { useContext, useState, useEffect } from 'react'
import { ProductsContext } from '../../context/products.context'
import { CartContext } from '../../context/cart.context'
import Sidebar from '../sideBar/Sidebar'
import Card from '../productCard/product-card'
import { CircularProgress } from '@mui/material'
import ErrorPage from '../../routes/ErrorPage/Error'
const CategoryFilter = (props) => {
    const [products, setProducts] = useContext(ProductsContext);
    
    const {showSidebar} = useContext(CartContext) 
  
     const [searchfield , setSearchfield] = useState("");
    useEffect(() => {
      // console.log(products)
    }, [products])
     
    if(products === '') {
  
      return (  
        <>
        <div className='flex  justify-center text-center items-center m-auto h-screen'>
        <CircularProgress size={70} color='inherit' />
        </div>
        </>
      )
    }

    if(products === null) {
        <ErrorPage/>
      }


      const categoriesToInclude = props.categoriesToInclude;
      const categoryProducts = products.filter((product) => categoriesToInclude.includes(product.category));
      const filteredProducts = categoryProducts.filter((product) => (product.name.toLocaleLowerCase().includes(searchfield)));
  
      return (
        <>
       
    
         <p className='flex flex-row justify-center text-3xl items-center  text-center' id='rel'>{props.category.toUpperCase()}</p>
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

export default CategoryFilter