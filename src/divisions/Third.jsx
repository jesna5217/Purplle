import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import './third.css'
import 'swiper/css/navigation';
import bar3 from "../assets/bar3.webp"
import bar2 from "../assets/bar2.webp"
import bar3 from "../assets/bar3.webp"
import bar4 from "../assets/bar4.webp"

// import required modules
import { Navigation, Pagination,Autoplay } from 'swiper/modules';
function Third() {
  
  return (
    <>
<div className='mt-3 mb-5'>
    <Swiper pagination={{clickable:true}}
    navigation
    
          autoplay={{ delay: 5000, disableOnInteraction: false }} 
          modules={[Pagination,Navigation,Autoplay]} 
    
    className="mySwiper">
      <SwiperSlide>
        <img src={bar3} alt="" height='300px' />
      </SwiperSlide>
      <SwiperSlide>
        <img src={bar2} alt="" height='300px'/>
      </SwiperSlide>
      <SwiperSlide>
      <img src={bar3} alt="" height='300px' />
        
      </SwiperSlide>
      <SwiperSlide>
        <img src={bar4} alt="" height='300px' />
      </SwiperSlide>
     
    </Swiper>
    </div>
  </>
  )
}

export default Third