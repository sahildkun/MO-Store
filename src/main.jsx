import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import { CartProvider } from './context/cart.context'
import { ProductsProvider } from './context/products.context'
import { Provider } from 'react-redux'
import {store} from '../src/store/store'



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    
    <BrowserRouter>
    <ProductsProvider>
      <Provider store={store}>
      <CartProvider>
        <App />
       </CartProvider>
       </Provider>
    </ProductsProvider>
    </BrowserRouter>
  </React.StrictMode>,
)
