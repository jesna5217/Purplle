import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import './Fourth.css'


// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

import 'swiper/css/navigation';


// import required modules
import { Navigation, Pagination,Autoplay } from 'swiper/modules';

function Sixth() {
  
    const options = {
        items: 4.6, // Adjust the number of items displayed
       dots: false, // Hide pagination dots
      nav:true,
       navText: ["<i class='fa fa-chevron-left'></i>", "<i class='fa fa-chevron-right'></i>"], // Customize the navigation arrows
     }
  return (
    <>
<div className='mt-3 mb-5'>
    <Swiper pagination={{clickable:true}}
    navigation
    
          autoplay={{ delay: 5000, disableOnInteraction: false }} 
          modules={[Pagination,Navigation,Autoplay]} 
    
    className="mySwiper">
      <SwiperSlide>
        <img src="src/assets/abc5.webp" alt="" height='400px' width='100%'/>
      </SwiperSlide>
      <SwiperSlide>
        <img src="src/assets/abc6.webp" alt="" height='400px' width='100%'/>
      </SwiperSlide>
      <SwiperSlide>
      <img src="src/assets/abc7.webp" alt="" height='400px'width='100%' />
        
      </SwiperSlide>
      <SwiperSlide>
        <img src="src/assets/abc8.webp" alt="" height='400px' width='100%'/>
      </SwiperSlide>
     
    </Swiper>
    </div>

     
<div className='mb-5'>
   <OwlCarousel className='owl-theme' loop nav {...options}>
  
   <div className='it me-3'>
    <img src="src/assets/caro9.webp" alt=""  width='80%'  height='100%'/>
   </div>
   
   <div className='it me-3'>
    <img src="src/assets/caro10.webp" alt="" width='80%'  height='100%' />
   </div>
   <div className='it me-3'>
    <img src="src/assets/caro11.webp" alt="" width='80%'  height='100%' />
   </div>
   <div className='it me-3'>
    <img src="src/assets/caro12.webp" alt="" width='80%'  height='100%'/>
   </div>
   <div className='it me-3'>
    <img src="src/assets/caro13.webp" alt=""width='80%'  height='100%' />
   </div>
   
</OwlCarousel>
</div>


<div className='d-flex justify-content-center align-items-center'>
<h4 style={{fontWeight:'600'}}>Top Brands For You</h4>
</div>


<div className='d-flex glow  mt-4' >

<img src="src/assets/glow.webp" alt="" />
<img src="src/assets/glow2.webp" alt="" />
<img src="src/assets/glow3.webp" alt="" />
<img src="src/assets/glow4.webp" alt="" />
<img src="src/assets/glow5.webp" alt="" />
<img src="src/assets/glow6.webp" alt="" />
<img src="src/assets/glow7.webp" alt="" />
<img src="src/assets/glow8.webp" alt="" />
<img src="src/assets/glow9.webp" alt="" />

<img src="src/assets/glow10.webp" alt="" />

</div>


<div className='mb-4'>
    <img src="src/assets/banner4.webp" alt="" />
</div>

<div className='mb-4'>
    <img src="src/assets/banner5.webp" alt="" />
</div>

<div>
    <img src="src/assets/banner6.webp" alt="" />
</div>


  </>
  )
}

export default Sixth