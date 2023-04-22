import React from 'react'
import { useLoaderData, useNavigate } from 'react-router-dom'
import { useContext } from 'react';
import { CartContext } from '../../context/cart.context';
import ReactStars from 'react-stars'
import LocalShippingTwoToneIcon from '@mui/icons-material/LocalShippingTwoTone';
import AButton from '../../components/UI/Button/Button';
import Sidebar from '../../components/sideBar/Sidebar';
import { useDispatch } from 'react-redux';
import { addToCart } from '../../features/cartFeatures/cartSlice';
import { Toaster, toast } from 'sonner'
const IndividualProduct = () => {
    const dispatch = useDispatch();
    const  {showSidebar,setShowSidebar}   = useContext(CartContext); 
   const navigate = useNavigate()
   const data = useLoaderData();
   const individualProduct = data;
  //  console.log(individualProduct);
   

   

   
    const {id,image,name,description,stock,reviews,stars,category,colors,company, price, shipping} = individualProduct;
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
      <div className='flex flex-row justify-between items-center'>
      <h1 className='m-5 text-2xl text-center rounded-md text-black font-bold w-36  bg-white' id='company'>₹ {price}</h1>
      <div>
      {!showSidebar &&
      <div className='flex flex-col '>
      <ReactStars
         count={5}
         value={stars}
         edit={false}
         size={30}
      /><p className='text-xs text-end text-gray-600'>{reviews} reviews...</p>
      </div>}
      </div>
      </div>
      <p className='text-slate-500 m-5 font-light' >{description}</p> 
      {/* <button className='mx-5 bg-green-400 w-[5rem] text-center font-bold py-1 rounded-sm' id='company'>{category.toUpperCase()}</button> */}
      
      <div className='grid grid-cols-2'>
      <p className='mx-5 font-bold text-lg' id='company'>{company.toUpperCase()}</p> 
      <p className='mx-5 font-light'>Brand warranty for 1 year(T&C)</p>
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
        })),
        toast.success('Added to cart', {
          action: {
            label: 'View Cart',
            onClick: () => setShowSidebar(true)
          },
        })
       

      }}>Add to Cart</AButton>
      <AButton background='bg-transparent' hoverBackground='hover:bg-yellow-500 ' 
      onClick= {() => {
        dispatch(addToCart({
          id,name,price,img
        })),
        toast('Go to Orders checkout', {
          action: {
            label: 'Proceed',
            onClick: () => navigate('/checkout')
          },
        })
  }}
      >BUY NOW</AButton>
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
  throw json({message: 'Could not load data for this product'} , {
    status: 500,
  })
}
else{
  return response 

}

}