import React, { Children } from 'react'
import { createBrowserRouter,RouterProvider } from 'react-router-dom'
import RootLayout from './layouts/RootLayout'
import Home from './routes/home/Home'
import ProductsPage from './routes/productsPage/ProductsPage'
import IndividualProduct from './routes/Individual_Product_page/Individual-product-page'
import UserSignUp from './routes/sign-in/User-sign-up'
import SignUp from './routes/sign-up/SignUp'
import { loader as productsLoder } from './routes/productsPage/ProductsPage'
import { loader as individualProductLoader } from './routes/Individual_Product_page/Individual-product-page'
import ProductPageLayout from './layouts/ProductPageLayout'
const  router = createBrowserRouter([  
    {
        path:'/',
        element: <RootLayout/>,
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
                        loader: productsLoder,

                    },
                    {
                        path:':id',
                        element: <IndividualProduct/>,
                        loader: individualProductLoader,
                        
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
            }
        ]
        
        
    }
])



const AppNew = () => {
  return <RouterProvider router={router}/>
}

export default AppNew