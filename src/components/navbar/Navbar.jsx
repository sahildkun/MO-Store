import React from 'react'

import { useContext } from 'react'
import { CartContext } from '../../context/cart.context'
import { getTotal } from '../Cart_List/CartTotal'
import { NavLink } from 'react-router-dom'
import { Badge, Button } from '@mui/material'

import ShoppingCartTwoTone from '@mui/icons-material/ShoppingCartTwoTone'
import { UserContext } from '../../context/users.context'
const Navbar = () => {
  const {showSidebar, setShowSidebar} = useContext(CartContext);
  const {setToaster} = useContext(UserContext);
  const currentUser = localStorage.getItem('currentUser');
  const user = JSON.parse(currentUser);
  // console.log(user.displayName);
  const handleClick =() => {
    
    setShowSidebar(!showSidebar)
  }
  const closeClick = () => {
    setToaster(false)
  }
   const signOutHandler =() => {
     localStorage.removeItem('currentUser')
   }

  return (
    
    <div className="  flex flex-row justify-between p-5 md:justify-around items-center md:p-10 font-bold " id='rel'>
    <NavLink 
     to={'/'}
     className=' text-2xl md:text-3xl max-w-2xl'
     onClick={closeClick}
     >
      Mo store
     </NavLink>

 
    <div className=' flex flex-auto text-xs md:text-lg  justify-end space-x-5 items-center md:space-x-10'>
    <NavLink 
    to={'/products'}
    onClick={closeClick}
    className={({isActive}) => isActive ? 'text-blue-600 ' : 'hover:text-blue-400'}
    >Products
    </NavLink>
   {!showSidebar && <h1 className='hover:cursor-pointer ' onClick={handleClick}>
    <Badge badgeContent={getTotal().totalQuantity} color='primary'>
    <ShoppingCartTwoTone className='font-bold' />
    </Badge>
   
 

    </h1>}
   {currentUser ? <NavLink onClick={signOutHandler} className={'cursor-pointer hover:text-blue-400'}>Sign Out</NavLink> 
   : <NavLink 
    className={({isActive}) => isActive ? 'text-blue-600' : 'hover:text-blue-400'}
    to={'/sign-in'}>Sign In</NavLink>}
    </div>
  
    {/* <NavLink className='block text-end md:hidden '>
      Hamburger
     </NavLink> */}
  </div>

   
  )
}

export default Navbar