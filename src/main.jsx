import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import { CartProvider } from './context/cart.context'
import { ProductsProvider } from './context/products.context'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    
    <BrowserRouter>
    <ProductsProvider>
      <CartProvider>
        <App />
       </CartProvider>
    </ProductsProvider>
    </BrowserRouter>
  </React.StrictMode>,
)
