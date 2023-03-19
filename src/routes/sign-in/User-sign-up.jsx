import React, { useEffect } from 'react'
import { useState } from 'react'

export default function UserSignUp() {
  const [userName , setUserName] = useState('');
  const [userEmail , setUserEmail] = useState('');
  const [nameTouched , setNameTouched] = useState(false);
  const [emailTouched , setEmailTouched] = useState(false);
 
  
   const enteredNameisValid = userName.trim() !== '';
   const nameInputInValid = !enteredNameisValid && nameTouched;
   
   const isValidEmail =(email) => {
    return /\S+@\S+\.\S+/.test(email);
   }
   const enteredEmailisValid = isValidEmail(userEmail);
   const emailInputInValid = !enteredEmailisValid && emailTouched;
     
   let  formIsValid  = false;
 
    if(enteredNameisValid && enteredEmailisValid) {
     formIsValid = true
    }
    
  
  
   const addUsernameHandler =(event) => {
    setUserName(event.target.value);
   }
  const  addEmailhandler = (event) => {
    setUserEmail(event.target.value)
  }

  const nameInputBlurhandler = (event) => {
   
      setNameTouched(true);
  }
  const emailInputBlurhandler = (event) => {
    setEmailTouched(true);
  }

  const submitHandler =(event) => {
   event.preventDefault();

   setNameTouched(true);
   setEmailTouched(true);
   if( !enteredNameisValid || !enteredEmailisValid) {
  
    return; 
   }

   console.log(userName);


   setUserName('');
   setUserEmail('')
   setNameTouched(false);
   setEmailTouched(false);

  }
  
  return (
   <>
   <div className=' bg-white my-[10vh] shadow-2xl mx-auto max-w-sm  p-10 text-black rounded-lg '>
    <h1 className=' text-center text-3xl mb-10' id='rel'>SIGN IN</h1>
    <form action="" className='flex flex-col space-y-6 justify-center' onSubmit={submitHandler}>
        
        <div className='flex flex-col space-y-2 '>
         <label htmlFor="name" className='text-xl font-semibold' id='company'>Name</label>
         <input 
         type="text" 
         placeholder='Please enter your name' 
         className={`w-auto border-2  p-2 rounded-md ${!nameInputInValid ? 'border-slate-500 bg-white' : 'border-red-700 '}`}
         
         onChange={addUsernameHandler}
         onBlur={nameInputBlurhandler}
         value={userName}  
         />
         {nameInputInValid  &&  <p className='text-sm text-red-600 '>Name is invalid*</p>}
         </div>
        
        <div className='flex flex-col space-y-2'>
         <label htmlFor="email" className='text-xl font-semibold' id='company'>Email</label>
         <input 
         type="email" 
         placeholder='Please enter your email address' 
         name='email' 
         className={`w-auto border-2  p-2 rounded-md ${!emailInputInValid ? 'border-slate-500 bg-white' : 'border-red-700 '}`}
         
         onChange={addEmailhandler}
         onBlur={emailInputBlurhandler}
         value={userEmail}
         />
         {emailInputInValid  &&  <p className='text-sm text-red-600 '>Email is invalid*</p>}
         </div>

         <div className=' mx-auto'>
         <button 
         type='submit' 
         
         className='text-white font-semibold disabled:bg-gray-400 border-2 border-slate-900 py-2 px-3 rounded-full w-[250px]  bg-slate-900 hover:text-white cursor-pointer disabled:cursor-not-allowed  disabled:text-black' 
         id='rel' 
         >SIGN IN </button>
         </div>
    </form>
   </div>
   
   </>
  )
}
