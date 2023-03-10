import React from 'react'
import { NavLink } from 'react-router-dom'
const Navbar = () => {
  return (
    
    <div class="flex flex-row font-bold p-10">
    <NavLink to={'/'}>Mo store</NavLink>
    <div className='invisible md:visible flex flex-auto justify-end space-x-10'>
    <NavLink to={'/products'}>Products</NavLink>
    <h1>CART</h1>
    <NavLink to={'/sign-in'}>Sign In</NavLink>
    </div>

  </div>

   
  )
}

export default Navbar