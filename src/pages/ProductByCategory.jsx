import React, { useContext, useEffect, useRef, useState } from 'react'
import { CategoryContext } from '../contexts/CategoryContext'
import { ProductContext } from '../contexts/ProductContext'
import Product from '../components/Product'
import { useParams } from 'react-router-dom'

export default function ProductByCategory() {

  // -------------- conexts ---------------------
const category =useContext(CategoryContext)
  
const products = useContext(ProductContext)

  // -------------- conexts ---------------------
  //  let categoryName = {name:''}
  let categoryName = useParams()
  let  categWithouSps =null
  if(categoryName.name){
    categWithouSps=categoryName.name.replace('%', ' ')
  }
  
 const catg = useRef(null)
 const [categ,setCateg] = useState(categWithouSps?categWithouSps:'')
 useEffect(()=>{
   document.title = `${categ?categ:'All product'}`
 })

//  const [pruducByCateg,setProductBC] = useState([])

 const handelSlect = ()=>{
   setCateg(catg.current.value)
  }
  window.location.hash = `/${categ}`

  const filterProduct = products.filter((product) => {
      if(categ!=='')
      {
        return product.category === categ
      }
      else{
        return product
      }
  }
  )

  console.log(filterProduct)

  
  return (
    <div className='min-h-screen pt-[80px] felx flex-col gap-4  '>
      <div className="container mx-auto w-full  flex justify-center">

      <select name="categ" id="" ref={catg} onChange={handelSlect} defaultValue={categ} className=''>
        <option value="">Select Category</option>
        {category.map((c,index)=>(
          <option key={index} value={c.name} >{c.name}</option>
        ))}
      </select>
       
      </div>
    {/* dispaly products */}
  <div className='container mx-auto min-h-[89vh]   my-5'>

     <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 
  xl:grid-cols-6  gap-[30px] '>
    {filterProduct.map((product,index)=>{
      return <Product product={product} key={index+1}/>
    })}
  </div>
  </div>

    </div>
  )
}
