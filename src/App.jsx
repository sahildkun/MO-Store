import { useState } from 'react'
import Navbar from './components/navbar/Navbar'
import './App.css'
import axios from 'axios'
import Card from './components/productCard/product-card'
import { useEffect } from 'react'
import { Routes ,Route} from 'react-router-dom'
import Products from './routes/productsPage/ProductsPage'
import Home from './routes/home/Home'
import IndividualProduct from './routes/Individual_Product_page/Individual-product-page'
import UserSignUp from './routes/sign-in/User-sign-up'
import Sidebar from './components/sideBar/Sidebar'
import NotFound from './routes/404_error/NotFound'
import SignUp from './routes/sign-up/SignUp'



function App() {
  
   
  return (

     <>
     <Navbar/>
     
     <Routes>
     <Route path='/' element={<Home/>}/>
     <Route path='/products' element={<Products/>} />
     <Route path='/products/:id' element={<IndividualProduct/>} />
     <Route path='/sign-in'  element={<UserSignUp/>}/>
     <Route path='/sign-up'  element={<SignUp/>}/>
   
     <Route path='*' element={<NotFound/>}/>
    
     <Route  />



     </Routes>
     
     
     
     </>
   
    
    
    
  
  )
}

export default App
