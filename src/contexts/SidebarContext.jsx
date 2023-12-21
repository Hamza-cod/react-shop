import React, { createContext, useState } from 'react';

export const SidebarContext = createContext()

const SidebarProvider = ({children}) => {
     
  const [isOpen,setIsOpen] = useState(false)
  
  const handelClose = (chenge)=>{
    setIsOpen(chenge)
  }
  
  console.log(isOpen)
  // console.log(handelClose())
  return <SidebarContext.Provider value={{isOpen,setIsOpen , handelClose}}>
    {children}
  </SidebarContext.Provider>;
};

export default SidebarProvider;
