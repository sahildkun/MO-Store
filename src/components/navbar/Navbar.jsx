import React from 'react'

import { useContext } from 'react'
import { CartContext } from '../../context/cart.context'
import { getTotal } from '../Cart_List/CartTotal'
import { NavLink } from 'react-router-dom'
import { Badge, Button } from '@mui/material'
import { signOutUser } from '../../utils/firebase'
import ShoppingCartTwoTone from '@mui/icons-material/ShoppingCartTwoTone'
import { UserContext } from '../../context/users.context'
const Navbar = () => {
  const {showSidebar, setShowSidebar} = useContext(CartContext);
  const {currentUser,setToaster} = useContext(UserContext);

  const handleClick =() => {
    
    setShowSidebar(!showSidebar)
  }
  const closeClick = () => {
    setToaster(false)
  }


  return (
    
    <div className="flex flex-row items-center p-10 font-bold" id='rel'>
    <NavLink 
     to={'/'}
     className='text-3xl'
     onClick={closeClick}
     >
      Mo store
     </NavLink>
    <div className='invisible md:visible flex flex-auto justify-end space-x-10'>
    <NavLink 
    to={'/products'}
    onClick={closeClick}
    className={({isActive}) => isActive ? 'text-blue-600 ' : 'hover:text-blue-400'}
    >Products
    </NavLink>
   {!showSidebar && <h1 className='hover:cursor-pointer' onClick={handleClick}>
    <Badge badgeContent={getTotal().totalQuantity} color='primary'>
    <ShoppingCartTwoTone className='font-bold'/>
    </Badge>
   
 

    </h1>}
   {currentUser ? <NavLink onClick={signOutUser} className={'cursor-pointer hover:text-blue-400'}>Sign Out</NavLink> 
   : <NavLink 
    className={({isActive}) => isActive ? 'text-blue-600' : 'hover:text-blue-400'}
    to={'/sign-in'}>Sign In</NavLink>}
    </div>

  </div>

   
  )
}

export default Navbar