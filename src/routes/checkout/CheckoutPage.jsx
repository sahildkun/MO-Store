import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import CartList from '../../components/Cart_List/Cart_List';
import CartTotal from '../../components/Cart_List/CartTotal';
import PaymentForm from '../../components/PaymentForm/PaymentForm';
import { NavLink, useNavigate } from 'react-router-dom';
import WestIcon from '@mui/icons-material/West';
import CheckOut from '../../components/Checkout_List/CheckOut';
import { Toaster } from 'sonner';
const CheckoutPage = () => {

  const cart = useSelector((state) => state.cart);
  const navigate = useNavigate();


  
  return (
    <>
    <Toaster richColors/>
    <div className='bg-white'>
   
    <div className='grid grid-cols-2 bg-white max-w-[80rem] m-auto'>

  <div className='flex flex-col m-10 ' >
   <NavLink to={'/'} id='rel' className='text-black'><WestIcon/>Go back to Home</NavLink>
   <div className='my-10 text-black'>
   <NavLink 
     to={'/'}
     className='text-4xl  font-bold text-black'
     id='rel'
     >
      Mo store
     </NavLink>
     <CartTotal/>
     </div>

{ cart.map(item => 

<CheckOut
 key={item.id}
 id={item.id} 
 name={item.name}
 image={item.img}
 price={item.price}
 quantity={item.quantity}
 />
)

}
{cart.length !== 0 ? <CartTotal/> : <NavLink to={'/products'} >Add products</NavLink>}
</div>
  <PaymentForm/>
    </div>
  
    </div>
    </>
  )
 }


export default CheckoutPage