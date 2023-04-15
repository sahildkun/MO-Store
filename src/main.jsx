import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'

import { CartProvider } from './context/cart.context'
import { ProductsProvider } from './context/products.context'
import { Provider } from 'react-redux'
import {store} from '../src/store/store'
import AppNew from './App_2'
import { UserProvider } from './context/users.context'
import { Elements } from '@stripe/react-stripe-js'
import { stripePromise } from './stripe/stripe.utils'

ReactDOM.createRoot(document.getElementById('root')).render(
  
    
    
    <ProductsProvider>
      <Provider store={store}>
      <UserProvider>
      <CartProvider>
        <Elements stripe={stripePromise}>
          <AppNew />
        </Elements>
       </CartProvider>
       </UserProvider>
       </Provider>
    </ProductsProvider>
   

)
