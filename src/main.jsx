import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import { CartProvider } from './context/cart.context'
import { ProductsProvider } from './context/products.context'
import { Provider } from 'react-redux'
import {store} from '../src/store/store'
import AppNew from './App_2'
import { UserProvider } from './context/users.context'

ReactDOM.createRoot(document.getElementById('root')).render(
  
    
    
    <ProductsProvider>
      <Provider store={store}>
      <UserProvider>
      <CartProvider>
        <AppNew />
       </CartProvider>
       </UserProvider>
       </Provider>
    </ProductsProvider>
   

)
