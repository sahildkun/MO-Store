import React from 'react'
import { NavLink } from 'react-router-dom'
const Navbar = () => {
  return (
    
    <div class="flex flex-row font-bold p-10">
    <NavLink to={'/'}>Mo store</NavLink>
    <div className='flex flex-auto justify-end space-x-10'>
    <NavLink to={'/products'}>Products</NavLink>
    <h1>CART</h1>
    <h1>SIGN IN</h1>
    </div>

  </div>

   
  )
}

export default Navbar