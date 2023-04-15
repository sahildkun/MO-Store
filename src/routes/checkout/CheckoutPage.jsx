import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import CartList from '../../components/Cart_List/Cart_List';
import CartTotal from '../../components/Cart_List/CartTotal';
import PaymentForm from '../../components/PaymentForm/PaymentForm';
import { NavLink, useNavigate } from 'react-router-dom';
import CheckoutList from '../../components/Checkout_List/CheckoutList';
const CheckoutPage = () => {

  const cart = useSelector((state) => state.cart);
  const navigate = useNavigate();


  console.log(cart.length);
  return (
    <>
   
    <div className='grid grid-cols-2  '>

  <div className='flex flex-col ' >
{ cart.map(item => 

<CheckoutList
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
  
    </>
  )
 }


export default CheckoutPage