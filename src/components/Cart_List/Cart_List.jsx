import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { incrementQuantity,decrementQuantity,removeItem} from '../../features/cartFeatures/cartSlice';

const CartList = ({item}) => {
    const dispatch = useDispatch();
   
    return (
    <>
    <div key={item.id} className='flex flex-row border-2 my-10'>
    <img src={item.image} className='h-28 w-32' alt="" />
    <div className='flex flex-col'>
    <h2>{item.name}</h2>
    <h3>{item.price*item.quantity}</h3>
    </div>
    <div className='flex flex-auto text-3xl items-center '>
          <button onClick={() => dispatch(decrementQuantity(item.id))}>-</button>
          <p>{item.quantity}</p>
          <button onClick={() => dispatch(incrementQuantity(item.id))}>+</button>
    </div>
    <button
          className='cartItem__removeButton' 
          onClick={() => dispatch(removeItem(item.id))}>
            Remove
        </button>
    </div>
    </>
  )
}

export default CartList