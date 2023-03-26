import React from 'react'

import { useContext } from 'react'
import { CartContext } from '../../context/cart.context'
import { getTotal } from '../Cart_List/CartTotal'
import { NavLink } from 'react-router-dom'
import { Badge } from '@mui/material'

import ShoppingCartTwoTone from '@mui/icons-material/ShoppingCartTwoTone'
const Navbar = () => {
  const {showSidebar, setShowSidebar} = useContext(CartContext);

  const handleClick =() => {
    
    setShowSidebar(!showSidebar)
  }
  return (
    
    <div class="flex flex-row items-center p-10 font-bold" id='rel'>
    <NavLink to={'/'} className='text-3xl'>Mo store</NavLink>
    <div className='invisible md:visible flex flex-auto justify-end space-x-10'>
    <NavLink to={'/products'}>Products</NavLink>
   {!showSidebar && <h1 className='hover:cursor-pointer' onClick={handleClick}>
    <Badge badgeContent={getTotal().totalQuantity} color='primary'>
    <ShoppingCartTwoTone className='font-bold'/>
    </Badge>
   
 

    </h1>}
    <NavLink to={'/sign-in'}>Sign In</NavLink>
    </div>

  </div>

   
  )
}

export default Navbar