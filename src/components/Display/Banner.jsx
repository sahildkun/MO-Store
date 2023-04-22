import React, { useContext,useEffect } from 'react'
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { NavLink } from 'react-router-dom';
import { Carousel } from 'react-responsive-carousel';
import Skeleton from 'react-skeleton-loader';
import { ProductsContext } from '../../context/products.context';


const Banner = () => {

    const [products,setProducts] = useContext(ProductsContext);
    
    useEffect(() => {
        // console.log(products)
      }, [products])
    

      if(products === '') {

        return (  
          <>
         <Skeleton height='100%' width='750px' color='#525252' animated='true' />
          </>
        )
      }


    console.log(products)

    const featuredProducts = products.filter((product) => product.featured === true);

    console.log(featuredProducts);
  return (
  
  
<div className=' border-2 border-white w-fit rounded-md'> 
<Carousel 
  
    autoPlay
    interval={2000}
   infiniteLoop
   showThumbs={false}
   dynamicHeight={1000}
   width={700}
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