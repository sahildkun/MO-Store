import React, { useEffect } from 'react'
import { useState,useContext } from 'react'
import { NavLink } from 'react-router-dom';
import { signInWithGoogle ,createUserDocumentfromAuth ,signInAuthUserWithEmailAndPassword} from '../../utils/firebase';
import { Toaster, toast } from 'sonner'
import { useNavigation,Form,useNavigate } from 'react-router-dom';
import { UserContext } from '../../context/users.context';
import google from '../../images/Google__G__Logo.svg.png'
import img from '../../images/pexels-photo-322207.jpeg'
export default function UserSignUp() {
  const [userName , setUserName] = useState('');
  const [userEmail , setUserEmail] = useState('');
  const [nameTouched , setNameTouched] = useState(false);
  const [emailTouched , setEmailTouched] = useState(false);
  const [ loading , setloading]    = useState(false);
  const {setToaster} = useContext(UserContext)
   
  const navigate = useNavigate();

   const logGoogleUser = async  () => {
   const {user } = await  signInWithGoogle();
   localStorage.setItem('currentUser', JSON.stringify(user));
   setToaster(true)
   navigate('/')
   }


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

  const submitHandler = async (event) => {
   event.preventDefault();
   setloading(true);
   setNameTouched(true);
   setEmailTouched(true);
   
   if( !enteredNameisValid || !enteredEmailisValid) {
    setloading(false);
    return; 
   }
   try {
    console.log(userEmail, userName);

    const {user} = await signInAuthUserWithEmailAndPassword(userEmail,userName);

    
    localStorage.setItem('currentUser', JSON.stringify(user));
    setToaster(true);
    navigate('/')
    setloading(false);
    setUserName('');
    setUserEmail('')
    setNameTouched(false);
    setEmailTouched(false);

   }
   catch(error) {
    setloading(false)
   switch (error.code) {
    case 'auth/wrong-password': 
      toast.error('Wrong Password !')
      break;
    case 'auth/user-not-found': 
      toast.error('User not found')
      break;
    default:
      console.log(error);
      break;
   }
   }
  




  }
  
  return (
  <>
   <Toaster richColors theme='dark'  position='top-center'/>
   <div className='grid grid-cols-1 md:grid-cols-2'>
   <div className=' bg-black  shadow-2xl   md:mx-5 p-10 text-white rounded-lg '>
    <h1 className=' text-center text-3xl md:text-5xl mb-2 ' >Welcome back</h1>
    <h1 className=' text-center text-xs text-slate-500 md:text-xl mb-10 font-extralight' >Please enter your contact details to connect.</h1>
    <Form action="" className='flex flex-col space-y-6 justify-center' onSubmit={submitHandler}>
        
        <div className='flex flex-col space-y-2 mx-2 md:mx-10 '>
          
         <label htmlFor="name" className='text-sm md:text-xl font-semibold' id='company'>Email address</label>
         <input 
         type="email" 
         placeholder='Please enter your email address' 
         name='email' 
         className={`bg-gray-800 w-auto border-2 text-white  p-2 rounded-md ${!emailInputInValid ? 'border-slate-500 ' : 'border-red-700 '}`}
         
         onChange={addEmailhandler}
         onBlur={emailInputBlurhandler}
         value={userEmail}
         />
         {emailInputInValid  &&  <p className='text-sm text-red-600 '>Email is invalid*</p>}
    
         </div>
        
        <div className='flex flex-col space-y-2 mx-2 md:mx-10'>
         <label htmlFor="password" className='text-sm md:text-xl font-semibold' id='company'>Password</label>
         <input 
         type="password" 
         placeholder='Please enter your name' 
         className={`bg-gray-800 w-auto border-2   text-white  p-2 rounded-md ${!nameInputInValid ? 'border-slate-500 ' : 'border-red-700 '}`}
            
         onChange={addUsernameHandler}
         onBlur={nameInputBlurhandler}
         value={userName}    
         />
         {nameInputInValid  &&  <p className='text-sm text-red-600 '>Password is invalid*</p>}
         </div>

         <div className='flex flex-col space-y-5 mx-auto  '>
         <button 
         type='submit' 
         disabled={loading}
         className='text-white font-semibold  disabled:bg-gray-400 border-2 w-full border-slate-900 py-2 px-3 rounded-full  bg-slate-900 hover:text-white cursor-pointer disabled:cursor-not-allowed  disabled:text-black' 
         id='rel' 
         >{loading ? 'Logging...' : 'Login'}</button>
          <button 
         type='button'
         onClick={logGoogleUser}
         className='text-white font-semibold flex flex-row items-center justify-center space-x-5  disabled:bg-gray-400 border-2 border-slate-900 py-2 px-3 rounded-full  bg-slate-900 hover:text-white cursor-pointer disabled:cursor-not-allowed  disabled:text-black' 
         id='rel' 
         >
          <img src={google} alt="" className='h-5 w-5'/>
          <p>Log in with Google</p> 
          </button>
         <p className='text-xs md:text-lg'>Don’t have an account ? <NavLink to={'/sign-up'} className={'underline'}>Sign up here</NavLink></p>
         </div>
    </Form>
   </div>

   <div className=''>

    <img src={img} alt="fd" className='hidden md:block h-[80vh] px-5 rounded-[3rem] object-fill ' />
   </div>
   
   </div>
   </>
  )
}
