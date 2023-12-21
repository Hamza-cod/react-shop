import React from 'react';
 
// import react router

import {BrowserRouter,Route,Routes} from 'react-router-dom'
// import pages
import Sidebar from './components/Sidebar'
import Header from './components/Header'
import Footer from './components/Footer';
import Home from './pages/Home';
import ProductDetails from './pages/ProductDetails';
import ProductProvider from './contexts/ProductContext';
import ProductByCategory from './pages/ProductByCategory';
import CategoryProvider from './contexts/CategoryContext';


const App = () => {
  return <CategoryProvider>
  <ProductProvider>
  <BrowserRouter>
  <Header/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/product/:id' element={<ProductDetails/>}/>
        <Route path='/all-product/:name' element={<ProductByCategory/>}/>
        <Route path='/all-product/' element={<ProductByCategory/>}/>
      </Routes>
    <Sidebar/>
    <Footer/>
  </BrowserRouter>
  </ProductProvider>
  </CategoryProvider>
};

export default App;
