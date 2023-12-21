import React, { useContext } from 'react';
import {BsEyeFill, BsPlus} from 'react-icons/bs'
import { Link } from 'react-router-dom';
import { CartContext } from '../contexts/CartContext';

const Product = ({product}) => {
      const {addToCart} = useContext(CartContext)
  const  {id,title,image,category,price} =product
 

  // console.log(addToCart)
  // const AddProductToCart=()=>{
  //  cartItems.setCart(prev=>[...prev,product])
  // }
  //  console.log(product.id)
  return <div className=' group/prod'>
   <div   className='border border-[#E4E4E4 ] h-[300px]  mb-4 group transition
   relative overflow-hidden '>
    <div className="flex h-full w-full justify-center items-center">
         {/* image */}
         <div className='w-[200px]  mx-auto flex justify-center items-center '> 
          <img src={image} alt="im" className='h-[160px] transition group-hover:scale-110
          duration-300  ' />
          <div className='absolute top-6 right-0 md:-right-11 group-hover/prod:right-4  p-2 flex flex-col
          items-center justify-center gap-y-2 opacity-100 md:opacity-0 group-hover/prod:opacity-100  transition-all duration-300 '>
            <button >
              <div className='flex justify-center items-center h-12 w-12 primary text-white'
               onClick={()=>addToCart(product,id)}>
                <BsPlus  className='text-3xl'/>
              </div>
            </button>
            <Link to={`/product/${id}`}
            className='flex justify-center items-center h-12 w-12 bg-white text-primary
            drop-shadow-2xl'>
             <BsEyeFill/>
            </Link>
          </div>
         </div>
        </div>
    </div>
     {/* tite & proce & category */}
         <div className='p-2'>
            <p className='text-sm  '>{category}</p>
            <Link to={`/product/${id}`} ><h2 className=' font-bold  '> {title} </h2></Link>
            <div className='flex justify-between items-center   '>
            <p className='font-semibold'> $ {price} </p>
             <Link to={`/product/${id}`} ><p className='p-2
             text-blue-400 hover:underline hover:text-blue-600 transition duration-200 '>More ...</p></Link>
            </div>
         </div>
         
  </div>;
};

export default Product;
