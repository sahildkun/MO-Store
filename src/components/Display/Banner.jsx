import React, { useContext,useEffect } from 'react'
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { NavLink } from 'react-router-dom';
import { Carousel } from 'react-responsive-carousel';
import { CircularProgress } from '@mui/material'
import { ProductsContext } from '../../context/products.context';
import { CartContext } from '../../context/cart.context';


const Banner = () => {

    const [products,setProducts] = useContext(ProductsContext);
    const {showSidebar} = useContext(CartContext)
    useEffect(() => {
        // console.log(products)
      }, [products])
    

      if(products === '') {

        return (  
          <div className='flex justify-center items-center '>
          <CircularProgress color='inherit' size={50}/>
          </div>
        )
      }


    console.log(products)

    const featuredProducts = products.filter((product) => product.featured === true);

    console.log(featuredProducts);
  return (
  
  
<div className={` ${showSidebar ? 'hidden md:block' : 'visible'} border-2 border-white w-fit rounded-md  `}> 
<Carousel 
  
    autoPlay
    interval={2000}
   infiniteLoop
   showThumbs={false}
   dynamicHeight={1000}
   
    showStatus={false}
   >

    {
        featuredProducts.map((prod) => 
         
        <div className='shadow-2xl ' key={prod.id}>
        <NavLink to={`/products/${prod.id}`}>
        <img src={prod.image} />
        <p className="legend flex flex-col">
            <p className='text-xl'>{prod.name}</p>
            <p className='hover:underline'>View More...</p>
             
        </p>
        
        </NavLink>
       </div>
         
        )
    }
         
   </Carousel>
   </div> 
  
  )
}

export default Banner