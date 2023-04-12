import React, { useEffect } from 'react'
import { useLoaderData, useParams } from 'react-router-dom'
import { useContext } from 'react';
import { ProductsContext } from '../../context/products.context';
import { CartContext } from '../../context/cart.context';
import LocalShippingTwoToneIcon from '@mui/icons-material/LocalShippingTwoTone';
import AButton from '../../components/UI/Button/Button';
import CategoryButton from '../../components/UI/Button/CategoryButton';
import Sidebar from '../../components/sideBar/Sidebar';
import SidebarDisplay from '../../components/sideBar/Sidebardisplay';
import { useDispatch } from 'react-redux';
import { addToCart } from '../../features/cartFeatures/cartSlice';
import { Toaster, toast } from 'sonner'
import NotFound from '../404_error/NotFound';
import { NavLink } from 'react-router-dom';
const IndividualProduct = () => {
    const dispatch = useDispatch();
    const  {showSidebar,setShowSidebar}   = useContext(CartContext); 
  //    const [products,setProducts] = useContext(ProductsContext);
  //   const { id } = useParams();
   
  //  console.log(id);
  //   useEffect(() => {
       
  //   },[products]);
    
  //   if(products[0] === undefined || products === ' ') {
  //       return(  
  //         <>
       
  //         <h1>Loading...</h1>
  //         </>
  //       )
  //   }
    
  //   const individualProduct = products.find((product) => product.id === id);
    
  //   if(individualProduct === undefined) {

  //     return (  
  //       <>
  //       <NotFound/>
  //       </>
  //     )
  //   }

   const data = useLoaderData();
   const individualProduct = data;
   console.log(individualProduct);
   

   

   
    const {id,image,name,description,stock,category,colors,company, price, shipping} = individualProduct;
    const img = image[0].url;
    console.log(img)
    let colour = colors[0];
    // console.log(image[2]);

  return (
    <div className=''>
    <Toaster position="bottom-left"/>
   
    <div  className={`${showSidebar ? 'fixed inset-0 bg-black bg-opacity-50' : ''} `} >
   <Sidebar/>
   </div>
      <div className='grid grid-cols-2 m-14 gap-x-10 '>
     <div className=''>
     <img src={img} alt="img" className='h-auto w-auto rounded-lg'/>
     {/* <CategoryButton>{category}</CategoryButton> */}
     </div>
     <div className=' flex flex-col space-y-5'>
      <h1 className='text-5xl text-center' id='rel'>{name.toUpperCase()}</h1>
      <h1 className='m-5 text-2xl text-center text-black font-bold w-36 mx-auto bg-white' id='company'>₹ {price}</h1>
      <p className='text-slate-500 m-5 font-light' >{description}</p> 
      {/* <button className='mx-5 bg-green-400 w-[5rem] text-center font-bold py-1 rounded-sm' id='company'>{category.toUpperCase()}</button> */}
      
      <div className='grid grid-cols-2'>
      <p className='mx-5 font-bold text-lg' id='company'>{company.toUpperCase()}</p> <p className='mx-5 font-light'>Brand warranty for 1 year(T&C)</p>
      </div>
      {
        shipping ? <div className='mx-5'><LocalShippingTwoToneIcon fontSize='large' color='success'/> </div>:<div className='mx-5 my-2 '><LocalShippingTwoToneIcon fontSize='large' color='error'/>(*not shipping)</div>
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
      <AButton  background='bg-transparent' hoverBackground='hover:bg-white ' onClick={() => {
       dispatch(addToCart({
          id,name,price,img
        }),
        toast.success('Added to cart', {
          action: {
            label: 'View Cart',
            onClick: () => setShowSidebar(true)
          },
        })
       )

      }}>Add to Cart</AButton>
      <AButton background='bg-transparent' hoverBackground='hover:bg-yellow-500 '>BUY NOW</AButton>
      </div>
    
     </div>

 
      </div> 
    </div>
  )
}

export default IndividualProduct

export const loader = async ({request,params}) => {
 const id = params.id;

 const response = await  fetch('https://api.pujakaitem.com/api/products/' + id );
 if(!response.ok) {
  throw json({message: 'Could not load data for this event'} , {
    status: 500,
  })
}
else{
  return response 

}

}