import React from 'react'
import { Outlet, useNavigation } from 'react-router-dom'
import ProductsPage from '../routes/productsPage/ProductsPage'
const ProductPageLayout = () => {
    const navigation = useNavigation()
  return (
    <>


    <main>
     
   
    <Outlet/>
    </main>
    
    
    </>
  )
}

export default ProductPageLayout