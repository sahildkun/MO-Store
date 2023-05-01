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
    
    <div  className='grid   lg:grid-rows-2 items-center  gap-y-5   sm:gap-y-5  xl:grid-cols-2 space-x-10 md:mx-10 my-10'>
      <div className='mx-5 '>
      <Banner/>
      </div>
      <div className='flex flex-col px-5 md:px-0' style={{ margin: '0px' }}>
      <div className='grid grid-cols-2  space-x-5 '>
         <div className=' transition-colors duration-700 flex flex-col justify-between  bg-white p-5  text-black h-44 md:h-80 rounded-xl hover:bg-black hover:text-white   border-2 ' id='company'>
          <p className='text-2xl   md:text-5xl font-bold max-w-[200px]'> LAPTOPS & COMPUTERS </p>
         <NavLink  to='/products/laptops&computers' className="group flex justify-end text-sm md:text-lg "> 
          View More
  <span class="opacity-0 group-hover:opacity-100 ">
    <ArrowForwardIcon/>
  </span>
</NavLink>
         </div>
         <div className='transition-colors duration-700  flex flex-col justify-between   bg-white p-5  text-black h-44  md:h-80 rounded-xl hover:bg-black hover:text-white   border-2' id='company'>
          <p className='text-2xl md:text-5xl font-bold max-w-[200px]'>MOBILES</p>
          <NavLink to={'/products/mobiles'} className="group flex justify-end bottom-2 right-2 text-sm md:text-lg">
          View More
  <span class="opacity-0 group-hover:opacity-100 ">
    <ArrowForwardIcon/>
  </span>
</NavLink>
         </div>
      </div>
    <div className='transition-colors duration-700 flex flex-row justify-between text-center  items-center bg-white h-32 mt-5 py-3 px-4 text-black my-auto rounded-xl  hover:bg-black hover:text-white border-2' id='company'>
        <p className='font-bold max-w-[200px] text-2xl md:text-5xl' >Watches & Accessories</p>  
        <NavLink to={'/products/watches&accessories'} className="group items-center text-sm md:text-lg">
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