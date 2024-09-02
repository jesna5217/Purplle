import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

import 'swiper/css/navigation';


// import required modules
import { Navigation, Pagination,Autoplay } from 'swiper/modules';
function Fifth() {
  
  return (
    <>
<div className='mt-3 mb-5'>
    <Swiper pagination={{clickable:true}}
    navigation
    
          autoplay={{ delay: 5000, disableOnInteraction: false }} 
          modules={[Pagination,Navigation,Autoplay]} 
    
    className="mySwiper">
      <SwiperSlide>
        <img src="src/assets/abc4.webp" alt="" height='400px' width='100%'/>
      </SwiperSlide>
      <SwiperSlide>
        <img src="src/assets/abc2.webp" alt="" height='400px' width='100%'/>
      </SwiperSlide>
      <SwiperSlide>
      <img src="src/assets/abc3.webp" alt="" height='400px'width='100%' />
        
      </SwiperSlide>
      <SwiperSlide>
        <img src="src/assets/abc1.webp" alt="" height='400px' width='100%'/>
      </SwiperSlide>
     
    </Swiper>
    </div>

    <div>
        <img src="src/assets/banner3.webp" alt="" width='100%' />
    </div>
  </>
  )
}

export default Fifth