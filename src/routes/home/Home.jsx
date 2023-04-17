import React, { useEffect } from 'react'
import { CartContext } from '../../context/cart.context'
import { useContext} from 'react'
import Sidebar from '../../components/sideBar/Sidebar'
import { Toaster, toast } from 'sonner'
import Banner from '../../components/Display/Banner'

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
    
    <div  className='grid grid-cols-2 space-x-5 mx-10'>
      <Banner/>
      <div className='flex flex-col '>
      <div className='grid grid-cols-2 space-x-5'>
         <div className='bg-white text-black h-80 rounded-xl'>
          Laptops & computers 
         </div>
         <div className='bg-white text-black h-80 rounded-xl'>
          Mobiles
         </div>

      </div>
      <div className='bg-white text-black my-auto rounded-xl'>
          Watches and accessories
         </div>
      </div>
    </div>
    
    </>
  )
}

export default Home