import React from 'react'
import { useContext } from 'react'
import { CartContext } from '../../context/cart.context'
import Sidebar from './Sidebar'

const SidebarDisplay = (props) => {
    const {showSidebar ,setShowSidebar} = useContext(CartContext)
  
  
    return (
    <div  className={`fixed inset-0 bg-black bg-opacity-25 backdrop-blur-sm  ease-in-out duration-300 ${
      showSidebar ? "translate-x-0" : "translate-x-full "
    }`} >
      <Sidebar />
    </div>
   
  )
}

export default SidebarDisplay