import React from 'react'
import { Outlet , useNavigation} from 'react-router-dom'
import Navbar from '../components/navbar/Navbar'
import { LinearProgress } from '@mui/material'
import Home from '../routes/home/Home'
const RootLayout = () => {
    const navigation = useNavigation();

    // let isLoadingProducts = navigation.state === 'loading' && navigation.location.pathname

    return (
    <>
    {navigation.state === 'loading' && <LinearProgress/>}
    <Navbar/>

    <main>
   
    <Outlet/>
    </main>
    
    
    </>
  )
}

export default RootLayout