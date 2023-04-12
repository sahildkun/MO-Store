import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { incrementQuantity,decrementQuantity,removeItem} from '../../features/cartFeatures/cartSlice';

const CartList = ({id,name,image,price,quantity}) => {
    const dispatch = useDispatch();
 
    return (
    <>
    <div key={id} className='flex flex-row justify-between border-2 my-10'>
    <img src={image} className='h-auto w-32' alt="img" />

    <div className='flex flex-col p-1  w-full'>
    <h2 className='text-xl font-bold'>{name}</h2>
    <h3>{price*quantity}</h3>
  
    <div className='flex flex-auto text-lg text-center bg-white text-black justify-between mx-auto w-20 font-sans ' >
          <button onClick={() => dispatch(decrementQuantity(id))}>-</button>
          <p>{quantity}</p>
          <button onClick={() => dispatch(incrementQuantity(id))}>+</button>
    </div>
    <div className='flex flex-auto justify-end'>
    <button
          className='bg-black text-white p-1 w-20  ' 
          onClick={() => dispatch(removeItem(id))}>
            Remove
        </button>
    </div>
    
        </div>
    </div>
    </>
  )
}

export default CartList