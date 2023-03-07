import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { useContext } from 'react';
import { ProductsContext } from '../../context/products.context';
import LocalShippingTwoToneIcon from '@mui/icons-material/LocalShippingTwoTone';



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
    



   

   

   
    const {image,name,description,category,colors,rating , shipping} = individualProduct;
    
    let colour = colors[0];
    console.log(colour);

  return (
    <>
      <div className='grid grid-cols-2 m-14 gap-x-10 '>
        
     <img src={image} alt="img" className='h-auto w-auto rounded-lg'/>
     <div className=' flex flex-col '>
      <h1 className='text-5xl text-center'>{name.toUpperCase()}</h1>
      <p className='text-slate-500 m-5'>{description}</p> 
      <p className='m-5'>category: {category.toUpperCase()}</p>
      {
        shipping ? <div className='mx-5 my-2'><LocalShippingTwoToneIcon fontSize='large' color='success'/> </div>:<div className='mx-5 my-2 '><LocalShippingTwoToneIcon fontSize='large' color='error'/>(*not shipping)</div>
      }
      <div >
        {colors.map((currColor, key) => {
          
          return (  
            <button style={{backgroundColor: currColor}} key={currColor} className='rounded-full h-10 w-10 mx-3 mt-5 border-2 focus:border-4 ml-5'>
              
            </button>
          )
        })}
      </div>

     </div>

        
      </div> 
    </>
  )
}

export default IndividualProduct