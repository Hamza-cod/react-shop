import React, { useContext, useEffect } from 'react';
import { ProductContext } from '../contexts/ProductContext';
import Product from './../components/Product';

import errorImage from '../img/error_3576319.png'
import Hero from '../components/Hero';
import { Link } from 'react-router-dom';

const Home = () => {
  const products= useContext(ProductContext)
  const filterProducts = products.filter((p) => p.category === "men's clothing" ||
                                                 p.category === "women's clothing" );

  useEffect(()=>{
    document.title = 'Home'
  })

  // console.log(filterProducts)
  return <section className=' pt-[60px] '>
    <Hero/>
    <div className='container mx-auto min-h-[89vh]  '>
   {/* {window.onload && <div className=' p-12 bg-red-500'> </div>} */}
  {products.length<1 ? <div className='h-full flex flex-col  items-center justify-center bg-gray-400/20'>
    <div><img src={errorImage} alt=""  width={300}/></div>
      <span className='capitalize font-bold m-2  text-3xl'>problem in server</span>
    </div> :
    <>
    <div className='m-6'><Link to='/all-product/' className='capitalize bold hover:underline '>show all products</Link> </div>
    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 
  xl:grid-cols-5  gap-[30px] '>
    {filterProducts.map((product) => {
   return <Product product={product} key={product.id}/>
    })}
    </div> 
    </>
    
  }
  </div>
  </section>;
};

export default Home;
