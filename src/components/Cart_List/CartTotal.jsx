import React from 'react'
import { useSelector } from 'react-redux'
const getTotal= () => {

    const cart = useSelector(state => state.cart.cart);
    console.log(cart);
    let totalQuantity = 0
    let totalPrice = 0
    cart.forEach(item => {
      totalQuantity += item.quantity
      totalPrice += item.price * item.quantity
    })


  return {totalPrice, totalQuantity}
}



const CartTotal = () => {
  return (
    <p className="total__p">
  total ({getTotal().totalQuantity} items) 
  : <strong>${getTotal().totalPrice}</strong>
</p>
  )
}

export default CartTotal