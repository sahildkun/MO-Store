import React from 'react'
import { useState } from 'react';
import { useContext } from 'react';
import { CartContext } from '../../context/cart.context';
const Sidebar = () => {
  const {showSidebar,setShowSidebar} = useContext(CartContext);

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
  className={`top-0 right-0 w-[35vw] bg-white p-10 pl-20 text-black fixed h-full z-40  ease-in-out duration-300 ${
    showSidebar ? "translate-x-0 " : "translate-x-full"
  }`}
>
  <h3 className="mt-20 text-4xl font-semibold text-black">I am a sidebar</h3>
</div>
</>
  )
}

export default Sidebar