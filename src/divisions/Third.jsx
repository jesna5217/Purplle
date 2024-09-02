import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import './third.css'
import 'swiper/css/navigation';


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
        <img src="src/assets/bar3.webp" alt="" height='300px' />
      </SwiperSlide>
      <SwiperSlide>
        <img src="src/assets/bar2.webp" alt="" height='300px'/>
      </SwiperSlide>
      <SwiperSlide>
      <img src="src/assets/bar3.webp" alt="" height='300px' />
        
      </SwiperSlide>
      <SwiperSlide>
        <img src="src/assets/bar4.webp" alt="" height='300px' />
      </SwiperSlide>
     
    </Swiper>
    </div>
  </>
  )
}

export default Third