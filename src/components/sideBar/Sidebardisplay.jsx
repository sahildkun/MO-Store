import React from 'react'
import { useContext } from 'react'
import { CartContext } from '../../context/cart.context'
import Sidebar from './Sidebar'

const SidebarDisplay = () => {
    const {showSidebar} = useContext(CartContext)
  return (
    <>
    <div className={`${showSidebar ? 'fixed inset-0 bg-black bg-opacity-25 backdrop-blur-sm' : ''}`} >
      <Sidebar />
    </div>
    </>
  )
}

export default SidebarDisplay