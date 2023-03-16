import React from 'react'
import { NavLink } from 'react-router-dom'
import { useContext } from 'react'
import { CartContext } from '../../context/cart.context'
const Navbar = () => {
  const {showSidebar, setShowSidebar} = useContext(CartContext);

  const handleClick =() => {
    
    setShowSidebar(!showSidebar)
  }
  return (
    
    <div class="flex flex-row  p-10 font-bold" id='rel'>
    <NavLink to={'/'} className='text-3xl'>Mo store</NavLink>
    <div className='invisible md:visible flex flex-auto justify-end space-x-10'>
    <NavLink to={'/products'}>Products</NavLink>
    <h1 className='hover:cursor-pointer' onClick={handleClick}>CART</h1>
    <NavLink to={'/sign-in'}>Sign In</NavLink>
    </div>

  </div>

   
  )
}

export default Navbar