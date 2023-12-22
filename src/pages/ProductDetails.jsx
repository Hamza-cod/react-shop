import React, { useContext, useEffect } from 'react';
import { useParams } from 'react-router-dom';
// import { CartContext } from '../contexts/CartContext';
import { ProductContext } from '../contexts/ProductContext';
import { CartContext } from '../contexts/CartContext';
import Product from '../components/Product';

const ProductDetails = () => {
  const {id} =useParams()
  const products =useContext(ProductContext)
  const {addToCart}= useContext(CartContext)

  // const [scroll,setScroll]=useState(false)

  const currProduct = products.find((item)=>{
    // console.log(item)
    return item.id === parseInt(id)
  })
  // console.log(currProduct)
  useEffect(() => {
     document.title = 'Product Datials'
     window.scrollTo({top: 0, left: 0, behavior: 'smooth'});
  }, [currProduct]);
  
  if(!currProduct){
    return <section className='min-h-screen pt-[100px] flex items-center justify-center  '>Loading....</section>
  }
  const  {title,image,category,price,description}= currProduct

  const ProducSameCAtegory = products.filter((item)=>(
    item.category===category && item.id !== parseInt(id)
  ))

  return (
  <section className='container min-h-screen pt-[100px] mx-auto grid grid-cols-6 gap-4 items-center justify-center' id='up'>
    <div className=" col-span-6 md:col-span-2 mx-auto flex items-center justify-center">
  <img src={image} className='w-[200PX] ' alt="alt"  />
    </div>
    <div className='col-span-6 md:col-span-4 flex flex-col gap-5 text-center md:text-start'>
     <h1 className='font-bold '>{title}</h1>
     <h2 className='font-semibold'>{category}</h2>
     <p>{description}</p>
     <span className='font-bold'>PRICE : {price} $ </span>
     <button  onClick={()=>addToCart(currProduct,currProduct.id)}
     className='p-4 px-5 rounded bg-blue-900 max-w-[200px] text-white mx-auto md:mx-0'>Add to Card</button>
    </div>
    <div className='col-span-6   flex flex-col gap-5 my-6'>

       <div className='capitalize'> pruducts in the same category</div>
       <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 
  xl:grid-cols-5  gap-[30px]  '>
    {ProducSameCAtegory.map((product) => {
   return <Product product={product} key={product.id}/>
    })}
    
  </div>
    </div>
  </section>);
};

export default ProductDetails;
