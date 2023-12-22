import React, { useContext } from 'react';
import SloderSwiper from './SliderSwiper';
import { CategoryContext } from '../contexts/CategoryContext';



const Hero = () => {
  const swiperData = useContext(CategoryContext)
  return <div className='min-h-[calc(100vh-100px)] flex items-center 
  w-full mx-auto
   mb-3  px-[6%]'>
    <SloderSwiper data={swiperData} />
  
  </div>;
};

export default Hero;
