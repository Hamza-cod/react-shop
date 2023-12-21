import React, { createContext, useEffect, useState } from 'react';


export const CartContext = createContext();

const CartProvider = ({children}) => {
  const [Cart,setCart] =useState([]);

  const [itemAmount,setItemAmount]= useState(0)
  const [total,setTotal]= useState(0)



useEffect(() => {
  // set number of item in the cart
 setItemAmount(Cart.length)
//  set the value of total price
const allPrice = Cart.reduce((inissialSum,currItem)=>{
    // console.log(currItem)
    return inissialSum+currItem.price* currItem.amount
},0)
 
 setTotal(allPrice)
//  console.log(allPrice)
}, [Cart]);

const clearAll= ()=>{
   setCart([])
}

 const removeFromCart =(id)=>{
  const newCart = Cart.filter(item=>(
    item.id !== id
  )) 
  setCart(newCart)
 }
  
  function addToCart (product,id){
     const newItem ={...product,amount:1}
     
    //  chek if itms have the same id
    const CartItem = Cart.find((item)=>(
      item.id ===id
    ))
    // 
    if(CartItem){
      const newCart = Cart.map(item=>{
        if(item.id === id)
        {
          return {...item,amount:CartItem.amount+1}
        }else{
          return item
        }
      });
      setCart(newCart)
    }else{
      setCart([...Cart,newItem])
    }
  

  }
    const increment =(id)=>{
    const CartItem = Cart.find((item)=>(
      item.id ===id
    ))
    // 
    if(CartItem){
      const newCart = Cart.map(item=>{
        if(item.id === id)
        {
          if(CartItem.amount>=1){
            
          }
          return {...item,amount:CartItem.amount+1}
        }else{
          return item
        }
      });
      setCart(newCart)
    }
  }

  const descrement =(id)=>{
    const CartItem = Cart.find((item)=>(
      item.id ===id
    ))
    // 
    if(CartItem){
      const newCart = Cart.map(item=>{
        if(item.id === id)
        {
          if(CartItem.amount===1){
            return {...item,amount:CartItem.amount-0}

          }else{
            return {...item,amount:CartItem.amount-1}
          }
        }else{
          return item
        }
      });
      setCart(newCart)
    }
  }
  // console.log(total)
  // const cartItems = {Cart,setCart}
  return <CartContext.Provider value={{addToCart,Cart,removeFromCart,clearAll,
  descrement,increment,itemAmount,total}}>
    {children}
    </CartContext.Provider>;
};

export default CartProvider;
