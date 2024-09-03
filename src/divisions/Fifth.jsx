import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

import 'swiper/css/navigation';
import abc2 from "../assets/abc2.webp"
import abc3 from "../assets/abc3.webp"
import abc4 from "../assets/abc4.webp"
import banner3 from "../assets/banner3.webp"
import './fifth.css'

// import required modules
import { Navigation, Pagination,Autoplay } from 'swiper/modules';
function Fifth() {
  
  return (
    <>
<div className='mt-3 mb-5 swiper3 dry'>
    <Swiper pagination={{clickable:true}}
    navigation
    
          autoplay={{ delay: 5000, disableOnInteraction: false }} 
          modules={[Pagination,Navigation,Autoplay]} 
    
    className="mySwiper">
      <SwiperSlide>
        <img src={abc4} alt="" height='400px' width='100%'/>
      </SwiperSlide>
      <SwiperSlide>
        <img src={abc2} alt="" height='400px' width='100%'/>
      </SwiperSlide>
      <SwiperSlide>
      <img src={abc3} alt="" height='400px'width='100%' />
        
      </SwiperSlide>
    
    </Swiper>
    </div>

    <div>
        <img src={banner3} alt="" width='100%' />
    </div>
  </>
  )
}

export default Fifth