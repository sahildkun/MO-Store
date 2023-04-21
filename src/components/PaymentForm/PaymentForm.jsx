import React, { useContext,useState } from 'react'
import { CardElement , useElements,useStripe } from '@stripe/react-stripe-js'
import AButton from '../UI/Button/Button'
import { useSelector } from 'react-redux'
import CircularProgress from '@mui/material/CircularProgress';
import { getTotal } from '../Cart_List/CartTotal'
import Navbar from '../navbar/Navbar';
import { NavLink, useNavigate } from 'react-router-dom';
import { Toaster, toast } from 'sonner'
const PaymentForm = () => {
  const cart = useSelector((state) => state.cart);
  const elements = useElements();
  const stripe = useStripe();
  const {totalPrice} = getTotal();
  const currentUser = JSON.parse(localStorage.getItem('currentUser')) ;
  const navigate = useNavigate();


 
  const [isProcessingPayment, setIsProcessingPayment] = useState(false);

  const paymentHandler = async (event ) => {
   event.preventDefault();

   if(!stripe || !elements){
    return ;
   }
   setIsProcessingPayment(true);
   const response = await fetch('/.netlify/functions/create-payment-intent', {
    method: 'post',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ amount: totalPrice}),
  }).then((res) => res.json()  );

  console.log(response)
  
  const clientSecret = response.paymentIntent.client_secret;
   
   const paymentResult = await stripe.confirmCardPayment(clientSecret, {
    payment_method: {
      card: elements.getElement(CardElement),
      billing_details: {
        name: 'userName',
      },
    },
  });

  setIsProcessingPayment(false);

  if (paymentResult.error) {
    toast.error(paymentResult.error.message);
  } else {
    if (paymentResult.paymentIntent.status === 'succeeded') {
     
      toast.success('Payment Successful!');
    
    }
  }
}
 
  return (
   
   
    <div className='h-[300px]flex flex-col py-10 text-black items-center justify-center h-screen shadow-[-15px_10px_30px_-15px_rgba(0,0,0,0.3)]'>
      <form onSubmit={paymentHandler} action="">
        <label className='text-5xl p-5' id='rel'>Pay With Card</label>
        {currentUser ?   <div className='flex flex-col items-center justify-center mt-[10rem]  '>
        <CardElement className='p-5 rounded-lg border w-96 bg-white  border-gray-200  '/>
        <AButton type='submit' disabled={cart.length === 0 || isProcessingPayment} background='bg-black text-white rounded w-[24rem]' hoverBackground=' hover:bg-white'>
          
          
          {isProcessingPayment ? <p className=' flex items-center justify-center'><CircularProgress size={30} color='inherit'/></p> : <>Pay Now</> }
           </AButton>
           </div>
          :
          <NavLink to={'/sign-in'} className={'flex flex-col items-center justify-center mt-[10rem]'}>Sign in first to proceed</NavLink>  
          }
        </form>
    </div>
   
  )
}

export default PaymentForm