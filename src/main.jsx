import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import { ProductsProvider } from './context/products.context'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    
    <BrowserRouter>
    <ProductsProvider>
    <App />
    </ProductsProvider>
    </BrowserRouter>
  </React.StrictMode>,
)
