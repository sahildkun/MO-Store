import React, { useContext } from 'react'
import {useFormik} from 'formik' 
import { createAuthUserWithEmailAndPassword ,createUserDocumentfromAuth } from '../../utils/firebase'
import { signUpSchema } from '../../schemas'
const defaultValues = {
  displayName :  '',
  email :  '',
  password :  '',
  confirmPassword :  '',
}
import { Toaster, toast } from 'sonner'
import { UserContext } from '../../context/users.context'
import { useNavigate } from 'react-router-dom'

const SignUp = () => {
   const {setToaster} = useContext(UserContext);
   const navigate = useNavigate();
  const {values ,errors, touched , handleBlur , handleChange , handleSubmit } = useFormik({
   initialValues: defaultValues,
   validationSchema: signUpSchema,
   onSubmit: async (values,action) => {
    console.log(values);
    const {email, password , displayName} = values;
     try {
      const {user} = await createAuthUserWithEmailAndPassword(email, password);
      console.log(user);
     
      await createUserDocumentfromAuth(user, { displayName });
      setToaster(true);
      navigate('/')
     }
     catch(error) {
      if(error.code === 'auth/email-already-in-use') {
        // alert('email already in use')
        toast.error('User account with this email already exists')
      }
      console.log('user created faced issue', error)
     }
     action.resetForm();
    },
  })
 
  return (
    <>
    <Toaster richColors position='top-center'/>
    <div className='grid grid-cols-2 '>
      <div className='flex flex-auto justify-center my-auto text-xl' >
         <form  className=' flex flex-col gap-6 w-96 items-left ' onSubmit={handleSubmit}>
                  <div className="flex flex-col space-y-1 text-left">
                    <label htmlFor="name" className="text-xl" id='rel'>
                      Name
                    </label>
                    <input
                    className='bg-gray-800 w-auto border-2   text-white  p-2 rounded-md'
                      type="name"
                      autoComplete="off"
                      name="displayName"
                      id="displayName"
                      placeholder="Name"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.displayName}
                 />
                <p className='text-sm text-red-600 flex flex-auto'>{errors.displayName && touched.displayName ? (<p>{`*${errors.displayName}`}</p>) : null}</p>
                  </div>
                  <div  className="flex flex-col space-y-1 text-left">
                    <label htmlFor="email" className="input-label" id='rel'>
                      Email
                    </label>
                    <input
                     className=' bg-gray-800 w-auto border-2   text-white  p-2 rounded-md'
                      type="email"
                      autoComplete="off"
                      name="email"
                      id="email"
                      placeholder="Email"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.email}
                    />
              <p className='text-sm text-red-600 flex flex-auto'>{errors.email && touched.email ? (<p>{`*${errors.email}`}</p>) : null}</p>
                  </div>
                  <div  className="flex flex-col space-y-1 text-left">
                    <label htmlFor="password" className="input-label">
                      Password
                    </label>
                    <input
                     className=' bg-gray-800 w-auto border-2   text-white  p-2 rounded-md'
                      type="password"
                      autoComplete="off"
                      name="password"
                      id="password"
                      placeholder="Password"
                      onChange={handleChange}
                      value={values.password}
                      onBlur={handleBlur}
                    />
                   <p className='text-sm text-red-600 flex flex-auto'>{errors.password && touched.password ? (<p>{`*${errors.password}`}</p>) : null}</p>
                  </div>
                  <div className="flex flex-col space-y-1 text-left">
                    <label htmlFor="confirm_password" className="input-label">
                      Confirm Password
                    </label>
                    <input
                     className='bg-gray-800 w-auto border-2   text-white  p-2 rounded-md'
                      type="password"
                      autoComplete="off"
                      name="confirmPassword"
                      id="confirmPassword"
                      placeholder="Confirm Password"
                      onChange={handleChange}
                      value={values.confirmPassword}
                      onBlur={handleBlur}
                    />
                   <p className='text-sm text-red-600 flex flex-auto'>{errors.confirmPassword && touched.confirmPassword ? (<p>{`*${errors.confirmPassword}`}</p>) : null}</p>
                  </div>
                  <div className="modal-buttons">
                    
                    <button className="bg-white text-black p-2" type="submit">
                      Registration
                    </button>
                  </div>
                </form>
                </div>
   <div className=''>

<img src={'https://th.bing.com/th/id/OIP.OZIL58JFxpy_rqflQTQCkQHaEK?pid=ImgDet&rs=1'} alt="fd" className=' h-[80vh] px-5 rounded-[3rem] object-fill ' />
</div>
    </div>
    </>
  )
}

export default SignUp