import React, { useContext } from 'react';

import {IoMdArrowForward} from 'react-icons/io'
import {FiTrash2} from 'react-icons/fi'
// card item component
import CartItem from './CartItem';
// side bar context
import { SidebarContext } from '../contexts/SidebarContext';
// cart context
import { CartContext } from '../contexts/CartContext';
const Sidebar = () => {
  const {isOpen, handelClose} = useContext(SidebarContext)
  const {Cart,removeFromCart,clearAll,itemAmount,total}= useContext(CartContext)
  // console.log(Cart)
  return <div className={`${isOpen? 'right-0' : '-right-full'} w-full fixed bg-white  top-0 h-full 
   shadow-xl md:w-[35vw] xl:max-w[30px] transition-all duration-300 z-20 
   px-4 xl:px-[30px] 
  `}>
     <div className='flex  border-b-2 border-gray-200 p-4 items-center justify-between '>
      <span>shoping bag ({itemAmount})</span>
     <button onClick={()=>handelClose(false)} className='p-3  text-xl text-black'> 
     <IoMdArrowForward/>
     </button>
     </div>
     <div>Cart Item</div>
     <div className='max-h-[70%] overflow-y-auto'>
      <ul>
      {Cart?.map((product,index)=>(
        <CartItem item={product} removeFromCart={removeFromCart} key={index}/>
      ))}
      </ul>
      
     </div>
      {Cart.length >0 &&<div className='border flex justify-between  items-center transition-all duration-300 my-4'>
            <div className='font-bold p-3 uppercase'>total :{parseFloat(total).toFixed(2)} $</div>
            <div onClick={clearAll} className='h-12 w-12 bg-red-500 text-[40px] flex items-center justify-center
            text-white cursor-pointer'>
              <FiTrash2/>
            </div>
           </div>}
    </div>;
};

export default Sidebar;
