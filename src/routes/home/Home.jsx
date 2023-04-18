import React, { useEffect } from 'react'
import { CartContext } from '../../context/cart.context'
import { useContext} from 'react'
import Sidebar from '../../components/sideBar/Sidebar'
import { Toaster, toast } from 'sonner'
import Banner from '../../components/Display/Banner'
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { UserContext } from '../../context/users.context'
import { NavLink } from 'react-router-dom'

const Home = () => {
  const {showSidebar ,setShowSidebar} = useContext(CartContext);
  const {toaster } = useContext(UserContext);
  
  useEffect(() => {
   
      toast.success('Successfully logged in');
  

  }, [toaster])
  

  return (
    <>
    { toaster && <Toaster richColors position='top-center'  closeButton/>}
    <div  className={`${showSidebar ? 'fixed inset-0 bg-black bg-opacity-50  ' : ''} `} >
    <Sidebar/>
    </div>
    
    <div  className='grid grid-cols-2 space-x-5 mx-10 my-10'>
      <Banner/>
      <div className='flex flex-col '>
      <div className='grid grid-cols-2 space-x-5 '>
         <div className='flex flex-col justify-between  bg-white p-5  text-black h-80 rounded-xl ' id='company'>
          <p className=' text-5xl font-bold max-w-[200px]'> LAPTOPS & COMPUTERS </p>
         <NavLink  to='/products/laptops&computers' className="group flex justify-end "> 
          View More
  <span class="opacity-0 group-hover:opacity-100 ">
    <ArrowForwardIcon/>
  </span>
</NavLink>
         </div>
         <div className=' flex flex-col justify-between   bg-white p-5  text-black h-80 rounded-xl ' id='company'>
          <p className=' text-5xl font-bold max-w-[200px]'>MOBILES</p>
          <NavLink to={'/products/mobiles'} className="group flex justify-end bottom-2 right-2">
          View More
  <span class="opacity-0 group-hover:opacity-100 ">
    <ArrowForwardIcon/>
  </span>
</NavLink>
         </div>
      </div>
    <div className='flex flex-row justify-between  items-center bg-white h-32 mt-5 py-3 px-4 text-black my-auto rounded-xl' id='company'>
        <p className='font-bold max-w-[200px] text-5xl' >Watches & Accessories</p>  
        <NavLink to={'/products/watches&accessories'} className="group items-center">
          View More
  <span class="opacity-0 group-hover:opacity-100 ">
    <ArrowForwardIcon/>
  </span>
</NavLink>
      </div>
    </div>
    </div>
    
    </>
  )
}

export default Home