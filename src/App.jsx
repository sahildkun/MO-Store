import { useState } from 'react'
import Navbar from './components/navbar/Navbar'
import './App.css'
import axios from 'axios'
import Card from './components/productCard/product-card'
import { useEffect } from 'react'


function App() {
  const [filteredProducts, setFilteredProducts] = useState('');
  const getData = async () => {
    const { data } = await axios.get(`https://api.pujakaitem.com/api/products`);
    setFilteredProducts(data);
  };
  useEffect(() => {
    getData();
  }, []);



   if(filteredProducts.length == 0) {
    return <div>
      <Navbar/>
      Loading...
      </div>
   }

   
  return (
    
   
     <>
      <Navbar/>
      <div className="grid grid-rows-6 md:grid-rows-none md:grid-cols-3 gap-y-3">
      {

          filteredProducts.length > 0 ? (filteredProducts.map((product) => {

            // const product = products[product];

          return (
            <>

            <Card key={product.id} id={product.id} name={product.name} description={product.description} price={product.price} img={product.image}/>

            </>
          )
         })) : (<>
          <p className="flex justify-items-center text-3xl max-w-3xl">
          No such Product :// pls search correctly
          </p>
         </>)
      }
      </div>
    
      </>
    
    
  
  )
}

export default App
