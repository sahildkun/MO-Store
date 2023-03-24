import { fontWeight } from '@mui/system';
import React from 'react'
import { useContext } from 'react';
import { useSelector } from 'react-redux';
import { CartContext } from '../../context/cart.context';

const Sidebar = (props) => {
  const {showSidebar,setShowSidebar} = useContext(CartContext);
  const cart = useSelector((state) => state.cart.cart)

  return (
    
<>
  <div className='bg-black bg-opacity-25 backdrop-blur-sm'/>
  {showSidebar ? (
    <button
      className="flex text-4xl text-black items-center cursor-pointer fixed right-10 top-6 z-50"
      onClick={() => setShowSidebar(!showSidebar)}
    >
      x
    </button>
  ) : (
    <>
    </>
  )}

<div
id='rel'
  className={`top-0 right-0 w-[35vw] bg-white p-10 pl-20 text-black fixed h-full z-40  ease-in-out duration-300 ${
    showSidebar ? "translate-x-0  " : "translate-x-full "
  }`}
>

 <text classname=' 'style={{
  color: 'black',
  fontWeight: 'bold',
  textAlign: 'center',
  fontSize: 50
 }} >CART</text>
 <h1>{cart.length !== 0 ?  cart.map(item => {
  return (
    <div key={item.id}>
    <h2>{item.name}</h2>
    </div>
  )
 })
:
<h1>
the cart is empty
</h1>

}
</h1>
</div>

</>
  )
}

export default Sidebar