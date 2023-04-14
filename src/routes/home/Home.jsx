import React, { useEffect } from 'react'
import { CartContext } from '../../context/cart.context'
import { useContext ,useState} from 'react'
import Sidebar from '../../components/sideBar/Sidebar'
import SidebarDisplay from '../../components/sideBar/Sidebardisplay'
import { Toaster, toast } from 'sonner'
import { UserContext } from '../../context/users.context'
const Home = () => {
  const {showSidebar ,setShowSidebar} = useContext(CartContext);
  const {toaster ,currentUser} = useContext(UserContext);
  
  useEffect(() => {
   
      toast.success('Successfully logged in');
  

  }, [toaster])
  

  return (
    <>
    { toaster && <Toaster richColors position='top-center'  closeButton/>}
    <Sidebar/>
   
    <div>Home
     
    </div>
    </>
  )
}

export default Home