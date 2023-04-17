import React, { useContext,useState } from 'react'
import { CardElement , useElements,useStripe } from '@stripe/react-stripe-js'
import AButton from '../UI/Button/Button'
import { useSelector } from 'react-redux'

import { getTotal } from '../Cart_List/CartTotal'

const PaymentForm = () => {
  const cart = useSelector((state) => state.cart);
  const elements = useElements();
  const stripe = useStripe();
  const {totalPrice} = getTotal();

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
    body: JSON.stringify({ amount: totalPrice*100 }),
  }).then((res) => {
  return res.json();
  })

  
  const clientSecret = response.paymentIntent.client_secret;
   
   const paymentResult = await stripe.confirmCardPayment(clientSecret, {
    payment_method: {
      card: elements.getElement(CardElement),
      billing_details: {
        name: 'Yihua Zhang',
      },
    },
  });

  setIsProcessingPayment(false);

  if (paymentResult.error) {
    alert(paymentResult.error.message);
  } else {
    if (paymentResult.paymentIntent.status === 'succeeded') {
      alert('Payment Successful!');
    }
  }
}
 
  return (
    <div className='h-[300px]flex flex-col items-center justify-center h-screen '>
      <form onSubmit={paymentHandler} action="">
        <CardElement className='p-5 rounded-lg border w-96 bg-white  border-gray-200  '/>
        <AButton type='submit' disabled={cart.length === 0 || isProcessingPayment} background='bg-black text-white' hoverBackground=' hover:bg-white'>Pay Now </AButton>
        </form>
    </div>
  )
}

export default PaymentForm