import React, { useEffect } from 'react'
import axios from 'axios';
// import Image from 'next/image'
// // import { Button } from "@/components/ui/button"
// // import { useDispatch } from 'react-redux'
// // import { addToCart } from '@/features/Cart/CartSlice'
// import Link from 'next/link'
import { NavLink } from 'react-router-dom';
const Card = ({name, description,price,img , id}) => {

//   const dispatch = useDispatch();




  return (
    <div className='m-10 mx-auto max-w-sm  shadow-2xl'>

  <div className="max-w-[18rem] md:max-w-sm rounded-lg m-0 shadow-lg bg-gray-700">
  <NavLink to={`/products/${id}`}>
    <div className='w-auto md:h-60 md:w-96'>
  <img src={img}  width={500} height={200} className="h-full"  />
  </div>
  <div className="px-6 py-4">
    <div className="font-bold text-xl mb-2">{name.toUpperCase()}</div>
    <div className="font-bold text-lg mb-2">Rs. {price}</div>
    <p className="text-gray-400 text-base line-clamp-2 ">
      {description}
    </p>
  </div>
  {/* <div className="px-6 pt-4 pb-2">
    <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#photography</span>
    <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#travel</span>
    <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#winter</span>
  </div> */}
  <div className='flex flex-auto  justify-center space-x-4 p-3'>
    <div>
   {/* <Button className='w-32'>Buy Now </Button> */}
   </div>
   <div>
   {/* <Button className='w-32' onClick={() => {
   dispatch(addToCart({
    id, name, img, price
  }))
   }}>Add to Cart</Button> */}
   </div>
  </div>
  </NavLink>
</div>


    </div>
  )
}

export default Card