import React, { useContext } from 'react';
import SloderSwiper from './SliderSwiper';
import { CategoryContext } from '../contexts/CategoryContext';

const carouselImg = [
 "https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=600",
 "https://images.pexels.com/photos/5632382/pexels-photo-5632382.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
 "https://images.pexels.com/photos/4009024/pexels-photo-4009024.jpeg?auto=compress&cs=tinysrgb&w=600",
 "https://images.pexels.com/photos/996329/pexels-photo-996329.jpeg?auto=compress&cs=tinysrgb&w=600",
 "https://images.pexels.com/photos/356056/pexels-photo-356056.jpeg?auto=compress&cs=tinysrgb&w=600"
]


const Hero = () => {
  const swiperData = useContext(CategoryContext)
  return <div className='min-h-[calc(100vh-100px)] flex items-center 
  w-full mx-auto
   mb-3  px-[6%]'>
    <SloderSwiper data={swiperData} />
  
  </div>;
};

export default Hero;
