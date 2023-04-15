import React from 'react'
import { CardElement } from '@stripe/react-stripe-js'
import AButton from '../UI/Button/Button'
import { useSelector } from 'react-redux'
const PaymentForm = () => {
  const cart = useSelector((state) => state.cart);
  return (
    <div className='h-[300px]flex flex-col items-center justify-center h-screen '>
        <CardElement className='p-5 rounded-lg border w-96 border-gray-200 shadow-sm bg-white'/>
        <AButton disabled={cart.length === 0} background='bg-black text-white' hoverBackground=' hover:bg-white'>Pay Now </AButton>
    </div>
  )
}

export default PaymentForm