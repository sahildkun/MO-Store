import React from 'react'
import { useRouteError } from 'react-router-dom'
import Navbar from '../../components/navbar/Navbar';



const ErrorPage = () => {
    const error = useRouteError();
    let title = 'An error occurred!';
    let message = 'Something went wrong!';
  
    if (error.status === 500) {
      message = error.data.message;
    }
  
    if (error.status === 404) {
      title = 'Not found!';
      message = 'Could not find resource or page.';
    }
  
  return (
    <>
      <Navbar/>
      <div className='flex flex-col text-center'>
        <h1 className='text-3xl'>{title}</h1>
        <p>{message}</p>
      </div>
    </>
  

  )
}

export default ErrorPage