import { fontWeight } from '@mui/system';
import React from 'react'
import { useContext } from 'react';
import { useSelector } from 'react-redux';
import { CartContext } from '../../context/cart.context';
import CartList from '../Cart_List/Cart_List';
const Sidebar = (props) => {
  const {showSidebar,setShowSidebar} = useContext(CartContext);
  const cart = useSelector((state) => state.cart.cart)

  return (
    
<>
  
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
  className={`top-0 right-0 w-[35vw] bg-white p-10  text-black fixed h-full z-40 overflow-auto ease-in-out duration-300 ${
    showSidebar ? "translate-x-0  " : "translate-x-full "
  }`}
>

 <h1 className=' text-7xl text-left  font-bold mb-10 ' >CART</h1>
 <h1>{cart.length !== 0 ?  cart.map(item => <CartList key={item.id} item={item} />)
:
<h1>
Your cart is empty 
</h1>

}
</h1>
</div>

</>
  )
}

export default Sidebar