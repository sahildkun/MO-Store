import { useState } from 'react'
import Navbar from './components/navbar/Navbar'
import './App.css'
import axios from 'axios'
import Card from './components/productCard/product-card'
import { useEffect } from 'react'
import { Routes ,Route} from 'react-router-dom'
import Products from './routes/productsPage/ProductsPage'
import Home from './routes/homePage/Home'

function App() {
  
   
  return (

     <>
     <Navbar/>
     <Routes>
     <Route path='/' element={<Home/>}/>
     <Route path='/products' element={<Products/>} />
     <Route  />



     </Routes>
     
     
     
     </>
   
    
    
    
  
  )
}

export default App
