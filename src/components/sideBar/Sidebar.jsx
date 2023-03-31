import { fontWeight } from '@mui/system';
import React, { useEffect } from 'react'
import { useRef } from 'react';
import { useContext } from 'react';
import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { CartContext } from '../../context/cart.context';
import CartTotal from '../Cart_List/CartTotal';

import CartList from '../Cart_List/Cart_List';
const Sidebar = (props) => {
  const {showSidebar,setShowSidebar} = useContext(CartContext);
  const cart = useSelector((state) => state.cart)
  let sidebarRef = useRef();

  useEffect(() => {
    let handler = (event) => {
      if(!sidebarRef.current.contains(event.target)){
        setShowSidebar(false);
      }
    }

    document.addEventListener('mousedown',handler);

    return () => {
      document.removeEventListener('mousedown',handler);
    }
  })
  return (
    
<div ref={sidebarRef}>
  
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
  className={`top-0 right-0 w-[35vw] bg-white  p-10  text-black fixed h-full z-40 overflow-scroll  ease-in-out duration-300 ${
    showSidebar ? "translate-x-0 " : "translate-x-full "
  }`}
>

 <h1 className=' text-7xl text-left  font-bold mb-10 ' >CART</h1>
 <h1>{cart.length !== 0 ? <>{cart.map(item => 

 <CartList 
  key={item.id}
  id={item.id} 
  name={item.name}
  image={item.image}
  price={item.price}
  quantity={item.quantity}
  />
 )}
 <CartTotal/>
 </> 


:

<div className='flex flex-col'>
<h1>
Your cart is empty 
</h1>
<NavLink to={'/products'} onClick={() => {setShowSidebar(false)}} className='text-3xl bg-black text-white my-44 mx-auto p-3'>View Products</NavLink>

</div>

}
</h1>
</div>

</div>
  )
}

export default Sidebar