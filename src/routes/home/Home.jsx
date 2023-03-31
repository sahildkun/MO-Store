import React from 'react'
import { CartContext } from '../../context/cart.context'
import { useContext } from 'react'
import Sidebar from '../../components/sideBar/Sidebar'
import SidebarDisplay from '../../components/sideBar/Sidebardisplay'
 
const Home = () => {
  const {showSidebar ,setShowSidebar} = useContext(CartContext)
  return (
    <>

    <Sidebar/>
   
    <div>Home
     
    </div>
    </>
  )
}

export default Home