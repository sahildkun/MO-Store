import React from 'react'

const SignUp = () => {

    const handleSubmit = () => {

    }
  return (
    <div className=''>
         <form  className=' flex flex-col gap-5 max-w-3xl items-center' onSubmit={handleSubmit}>
                  <div className="grid grid-cols-2">
                    <label htmlFor="name" className="input-label">
                      Name
                    </label>
                    <input
                      type="name"
                      autoComplete="off"
                      name="name"
                      id="name"
                      placeholder="Name"
                     
                 />
                  </div>
                  <div  className="grid grid-cols-2">
                    <label htmlFor="email" className="input-label">
                      Email
                    </label>
                    <input
                      type="email"
                      autoComplete="off"
                      name="email"
                      id="email"
                      placeholder="Email"
                     
                    />
           
                  </div>
                  <div  className="grid grid-cols-2">
                    <label htmlFor="password" className="input-label">
                      Password
                    </label>
                    <input
                      type="password"
                      autoComplete="off"
                      name="password"
                      id="password"
                      placeholder="Password"
                     
                    />
             
                  </div>
                  <div  className="grid grid-cols-2">
                    <label htmlFor="confirm_password" className="input-label">
                      Confirm Password
                    </label>
                    <input
                      type="password"
                      autoComplete="off"
                      name="confirm_password"
                      id="confirm_password"
                      placeholder="Confirm Password"
                      
                    />
                 
                  </div>
                  <div className="modal-buttons">
                    <a href="#" className="">
                      Want to register using Gmail?
                    </a>
                    <button className="bg-white text-black p-2" type="submit">
                      Registration
                    </button>
                  </div>
                </form>
    </div>
  )
}

export default SignUp