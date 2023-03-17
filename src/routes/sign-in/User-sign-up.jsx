import React from 'react'
import { useState } from 'react'
export default function UserSignUp() {
  return (
   <>
   <div className=' bg-slate-300 my-[10vh] shadow-2xl mx-auto max-w-sm  p-10 text-black rounded-lg '>
    <h1 className=' text-center text-3xl mb-10' id='rel'>SIGN IN</h1>
    <form action="" className='flex flex-col space-y-10 justify-center'>
        
        <div className='flex flex-col space-y-2 '>
         <label htmlFor="name" className='text-xl font-semibold' id='company'>Name</label>
         <input type="text" placeholder='Please enter your name' name='name' className='w-auto border-2 p-2 border-slate-500 rounded-md'/>
         </div>
        
        <div className='flex flex-col space-y-2'>
         <label htmlFor="email" className='text-xl font-semibold' id='company'>Email</label>
         <input type="email" placeholder='Please enter your email address' name='email' className='w-auto border-2 border-slate-500 p-2 rounded-md' />
         </div>

         <div className=' mx-auto'>
         <button type='submit' className='text-black font-semibold bg-gray-400 border-2 border-slate-900 py-2 px-3 rounded-full w-[250px]  hover:bg-slate-900 hover:text-white hover:cursor-pointer' id='rel'>SIGN IN </button>
         </div>
    </form>
   </div>
   
   </>
  )
}
