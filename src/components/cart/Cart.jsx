import React from 'react'
import { useSelector } from 'react-redux'
import Sidebar from '../sideBar/Sidebar'
const Cart = () => {
  const cart = useSelector((state) => state.cart.cart)
  console.log(cart);
  return (
  <Sidebar/>
  )
}

export default Cart