import React,{useContext, useEffect, useState} from 'react';
import { SidebarContext } from './../contexts/SidebarContext';

// bs bag icon
import {BsBag} from 'react-icons/bs'

// import cart context 
import { CartContext } from '../contexts/CartContext';
import { Link } from 'react-router-dom';

// import logo
import logo from '../img/logo.svg'
const Header = () => {

  const { handelClose} = useContext(SidebarContext)

  const {itemAmount} = useContext(CartContext)

  const [Active, setActive] = useState(false);

  useEffect(()=>{
    // document.querySelector('footer').addEventListener('click',()=>handelClose(false))
  })

   useEffect(()=>{
    window.addEventListener("scroll",()=>{
      window.scrollY >= 40? setActive(true): setActive(false)
    })
  },[])

  return <header className={`${Active ?'pb-2 bg-gray-100 shadow-md shadow-black/25':'bg-none   py-1'} 
  w-[100%]  fixed  z-10  transition-all duration-200`}>
    
    
    <div className=' container mx-auto  flex justify-between items-center'>
      <Link to='/'>
        <img src={logo} alt="" className='w-9' />
      </Link>

      <Link to='/all-product/'>All pp products</Link>
    <div onClick={()=>handelClose(true)} className='p-4 relative max-w-max cursor-pointer' id='bag'>
      <BsBag className='text-xl'/>
      <div className={` ${itemAmount<1?'opacity-0':'opacity-100'} absolute bottom-1 right-1
       bg-red-500 h-5 w-5 flex items-center justify-center text-white rounded-full  transition-all duration-300 `}>
        {itemAmount}
        
         </div>
      </div>
    </div>
    
  </header>;
};

export default Header;
