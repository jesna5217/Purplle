import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import './Fourth.css'


import abc5 from "../assets/abc5.webp"
import abc6 from "../assets/abc6.webp"
import abc7 from "../assets/abc7.webp"
import abc8 from "../assets/abc8.webp"


// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

import 'swiper/css/navigation';

import caro9 from "../assets/caro9.webp"
import caro10 from "../assets/caro10.webp"
import caro11 from "../assets/caro11.webp"
import caro12 from "../assets/caro12.webp"
import caro13 from "../assets/caro13.webp"


import glow from "../assets/glow.webp"
import glow2 from "../assets/glow2.webp"
import glow3 from "../assets/glow3.webp"
import glow4 from "../assets/glow4.webp"
import glow5 from "../assets/glow5.webp"
import glow6 from "../assets/glow6.webp"
import glow7 from "../assets/glow7.webp"
import glow8 from "../assets/glow8.webp"
import glow9 from "../assets/glow9.webp"
import glow10 from "../assets/glow10.webp"

import banner4 from "../assets/banner4.webp"
import banner5 from "../assets/banner5.webp"
import banner6 from "../assets/banner6.webp"


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
        <img src={abc5} alt="" height='400px' width='100%'/>
      </SwiperSlide>
      <SwiperSlide>
        <img src={abc6} alt="" height='400px' width='100%'/>
      </SwiperSlide>
      <SwiperSlide>
      <img src={abc7} alt="" height='400px'width='100%' />
        
      </SwiperSlide>
      <SwiperSlide>
        <img src={abc8} alt="" height='400px' width='100%'/>
      </SwiperSlide>
     
    </Swiper>
    </div>

     
<div className='mb-5'>
   <OwlCarousel className='owl-theme' loop nav {...options}>
  
   <div className='it me-3'>
    <img src={caro9} alt=""  width='80%'  height='100%'/>
   </div>
   
   <div className='it me-3'>
    <img src={caro10} alt="" width='80%'  height='100%' />
   </div>
   <div className='it me-3'>
    <img src={caro11} alt="" width='80%'  height='100%' />
   </div>
   <div className='it me-3'>
    <img src={caro12}alt="" width='80%'  height='100%'/>
   </div>
   <div className='it me-3'>
    <img src={caro13} alt=""width='80%'  height='100%' />
   </div>
   
</OwlCarousel>
</div>


<div className='d-flex justify-content-center align-items-center'>
<h4 style={{fontWeight:'600'}}>Top Brands For You</h4>
</div>


<div className='d-flex glow  mt-4' >

<img src={glow} alt="" />
<img src={glow2} alt="" />
<img src={glow3} alt="" />
<img src={glow4} alt="" />
<img src={glow5} alt="" />
<img src={glow6} alt="" />
<img src={glow7} alt="" />
<img src={glow8} alt="" />
<img src={glow9} alt="" />

<img src={glow10} alt="" />

</div>


<div className='mb-4'>
    <img src={banner4} alt="" />
</div>

<div className='mb-4'>
    <img src={banner5} alt="" />
</div>

<div>
    <img src={banner6} alt="" />
</div>


  </>
  )
}

export default Sixth