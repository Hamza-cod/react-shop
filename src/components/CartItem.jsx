import React, { useContext } from 'react';
import { Link } from 'react-router-dom';

import {IoMdClose} from 'react-icons/io'

import { FiTrash2 } from "react-icons/fi";

import { CartContext } from '../contexts/CartContext';

const CartItem = ({item}) => {
  // console.log(item)
    const {removeFromCart,descrement,increment} =useContext(CartContext)
  const {id,title,image,price,amount} =item
  return( <><div className='flex '>
          <div className='w-full min-h-[120px] flex items-center gap-x-4 gap-y-2 text-[12px]'>
            {/* image */}
            <Link to={`/product/${id}`}>
              <img src={image} alt="img"  className='max-w-[80px]'/>
            </Link>
            <div className=' w-full flex flex-col '>
            <div className='flex justify-between mb-2 '>
              {/* title and remove icon  */}
              <Link to={`/product/${id}`} className='uppercase font-semibold max-w-[150px] 
              hover:underline transition'>
                {title.slice(0,20)}
              </Link>
             {/* remove icon */}
             <div onClick={()=>removeFromCart(id)}
             className='text-gray-400 hover:text-red-500 cursor-pointer transition-all text-xl '>
              <IoMdClose/>
             </div>

            </div>
            <div className='p-3  flex gap-2 w-full items-center'>
              {/* quantity setting */}
              <div className='flex gap-x-2 items'>
                <button onClick={()=>descrement(id)} 
                 disabled={amount === 1 ?true :false}
                className='p-1 bg-blue-300 rounded-md text-sm items-center disabled:cursor-not-allowed
                disabled:bg-blue-300/10'>-</button>
                <span className='w-[25px] bg-gray-300 rounded-sm flex items-center justify-center'>{amount}</span>
                <button onClick={()=>increment(id)} className='p-1 bg-blue-300  rounded-md text-sm items-center'>+</button>
              </div>
             {/* unite price & totale price */}
              <div className='flex gap-2 text-[12px] md:text-md'>
                  <span className='font-bold'>UP:{price}</span>
                  <span className='font-bold'>total price: {parseFloat(price*amount).toFixed(2)}</span>
              </div>
            </div>
            </div>
          </div>
           
        </div>
       </>);
}

export default CartItem;
