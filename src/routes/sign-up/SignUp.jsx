import React from 'react'
import {useFormik} from 'formik' 
import { createAuthUserWithEmailAndPassword ,createUserDocumentfromAuth } from '../../utils/firebase'
import { signUpSchema } from '../../schemas'
const defaultValues = {
  displayName :  '',
  email :  '',
  password :  '',
  confirmPassword :  '',
}


const SignUp = () => {

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
     }
     catch(error) {
      if(error.code === 'auth/email-already-in-use') {
        alert('email already in use')
      }
      console.log('user created faced issue', error)
     }
     action.resetForm();
    },
  })
 
  return (
    <div className=''>
         <form  className=' flex flex-col gap-5 max-w-3xl items-center' onSubmit={handleSubmit}>
                  <div className="grid grid-cols-2">
                    <label htmlFor="name" className="input-label">
                      Name
                    </label>
                    <input
                    className=' text-black'
                      type="name"
                      autoComplete="off"
                      name="displayName"
                      id="displayName"
                      placeholder="Name"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.displayName}
                 />
                {errors.displayName && touched.displayName ? (<p>{errors.displayName}</p>) : null}
                  </div>
                  <div  className="grid grid-cols-2">
                    <label htmlFor="email" className="input-label">
                      Email
                    </label>
                    <input
                     className=' text-black'
                      type="email"
                      autoComplete="off"
                      name="email"
                      id="email"
                      placeholder="Email"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.email}
                    />
           {errors.email && touched.email ? (<p>{errors.email}</p>) : null}
                  </div>
                  <div  className="grid grid-cols-2">
                    <label htmlFor="password" className="input-label">
                      Password
                    </label>
                    <input
                     className=' text-black'
                      type="password"
                      autoComplete="off"
                      name="password"
                      id="password"
                      placeholder="Password"
                      onChange={handleChange}
                      value={values.password}
                      onBlur={handleBlur}
                    />
                  {errors.password && touched.password ? (<p>{errors.password}</p>) : null}
                  </div>
                  <div  className="grid grid-cols-2">
                    <label htmlFor="confirm_password" className="input-label">
                      Confirm Password
                    </label>
                    <input
                     className=' text-black'
                      type="password"
                      autoComplete="off"
                      name="confirmPassword"
                      id="confirmPassword"
                      placeholder="Confirm Password"
                      onChange={handleChange}
                      value={values.confirmPassword}
                      onBlur={handleBlur}
                    />
                  {errors.confirmPassword && touched.confirmPassword ? (<p>{errors.confirmPassword}</p>) : null}
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