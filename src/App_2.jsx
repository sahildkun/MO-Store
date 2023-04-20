import React, { Children } from 'react'
import { createBrowserRouter,RouterProvider } from 'react-router-dom'
import RootLayout from './layouts/RootLayout'
import Home from './routes/home/Home'
import ProductsPage from './routes/productsPage/ProductsPage'
import IndividualProduct from './routes/Individual_Product_page/Individual-product-page'
import UserSignUp from './routes/sign-in/SignIn'
import SignUp from './routes/sign-up/SignUp'

import { loader as individualProductLoader } from './routes/Individual_Product_page/Individual-product-page'
import ProductPageLayout from './layouts/ProductPageLayout'
import ErrorPage from './routes/ErrorPage/Error'
import CheckoutPage from './routes/checkout/CheckoutPage'

import Mobiles from './routes/productsPage/Mobiles'
import Wacthes from './routes/productsPage/Wacthes'
import Laptops from './routes/productsPage/Laptops'
const  router = createBrowserRouter([  
    {
        path:'/',
        element: <RootLayout/>,
        errorElement: <ErrorPage/>,
        children: [  
            {
              index: true,
              element: <Home/>

            },
            {
                path: 'products',
                element: <ProductPageLayout/>,
        
                children: [  

                    {
                        index: true,
                        element:<ProductsPage/>,
                       

                    },
                    {
                        path:':id',
                        element: <IndividualProduct/>,
                        loader: individualProductLoader,
                        
                    },
                    {
                        path:'laptops&computers',
                        element: <Laptops/>
                    },
                    {
                        path:'mobiles',
                        element: <Mobiles/>
                    },
                    {
                        path:'watches&accessories',
                        element: <Wacthes/>,
                    }
                ]
            },
            {
                path: 'sign-in',
                element: <UserSignUp/>
            },
            {
                path: 'sign-up',
                element: <SignUp/>
            },
           
        ]
        
        
    },
    {
        path: '/checkout',
        element: <CheckoutPage/>
    }
])



const AppNew = () => {
  return <RouterProvider router={router}/>
}

export default AppNew