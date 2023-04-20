import React from 'react'
import { useDispatch } from 'react-redux';
import { incrementQuantity,decrementQuantity,removeItem } from '../../features/cartFeatures/cartSlice';
const CheckOut = ({id,name,image,price,quantity}) => {
    const dispatch = useDispatch();
    return (
    <div className='text-black border-2'>
        <>
    <div key={id} className='flex flex-row  m-2 '>
    <img src={image} className='h-20 w-20 rounded-xl' alt="img" />

    <div className='flex flex-col p-1  w-full'>
    <h2 className='text-md font-semibold'>{name.toUpperCase()}</h2>
    <h3 className='text-xs'>₹ {price*quantity}</h3>
  
    <div className='flex flex-auto text-lg text-center bg-black text-white justify-between mx-auto w-30 border-2 border-black rounded-md font-sans ' >
          <button className='m-auto text-lg px-3' onClick={() => dispatch(decrementQuantity(id))}>-</button>
          <p className='bg-white text-black px-3'>{quantity}</p>
          <button className='m-auto text-lg px-3' onClick={() => dispatch(incrementQuantity(id))}>+</button>
    </div>
    <div className='flex flex-auto justify-end'>
    <button
          className='bg-black hover:text-black border-2 border-black hover:bg-white text-white p-1 w-20  ' 
          onClick={() => dispatch(removeItem(id))}>
            Remove
        </button>
    </div>
    
        </div>
    </div>
    </>
    </div>
  )
}

export default CheckOut