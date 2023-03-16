import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { useContext } from 'react';
import { ProductsContext } from '../../context/products.context';
import LocalShippingTwoToneIcon from '@mui/icons-material/LocalShippingTwoTone';
import AButton from '../../components/Button/Button';
import CategoryButton from '../../components/Button/CategoryButton';
import Sidebar from '../../components/sideBar/Sidebar';

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
    



   

   

   
    const {image,name,description,category,colors,company , shipping} = individualProduct;
    
    let colour = colors[0];
    console.log(colour);

  return (
    <>
    <div className="flex flex-col items-center justify-center  ">
      <Sidebar />
    </div>
      <div className='grid grid-cols-2 m-14 gap-x-10 '>
     <div className='relative'>
     <img src={image} alt="img" className='h-auto w-auto rounded-lg'/>
     <CategoryButton>{category}</CategoryButton>
     </div>
     <div className=' flex flex-col space-y-5'>
      <h1 className='text-5xl text-center' id='rel'>{name.toUpperCase()}</h1>
      
      <p className='text-slate-500 m-5 font-light'>{description}</p> 
      {/* <button className='mx-5 bg-green-400 w-[5rem] text-center font-bold py-1 rounded-sm' id='company'>{category.toUpperCase()}</button> */}
      
      <div className='grid grid-cols-2'>
      <p className='mx-5 font-bold text-lg' id='company'>{company.toUpperCase()}</p> <p className='mx-5 font-light'>Brand warranty for 1 year(T&C)</p>
      </div>
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
      <div className='mx-5 font-bold space-x-5' id='rel' >
      <AButton background='bg-transparent' hoverBackground='hover:bg-white '>Add to Cart</AButton>
      <AButton background='bg-transparent' hoverBackground='hover:bg-yellow-500 '>BUY NOW</AButton>
      </div>

     </div>

        
      </div> 
    </>
  )
}

export default IndividualProduct