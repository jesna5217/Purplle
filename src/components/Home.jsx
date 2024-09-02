import React from 'react'

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import './Home.css'

// import required modules
import { Pagination, Navigation, Autoplay } from 'swiper/modules';

import Owl from './Owl';
import Third from '../divisions/Third';
import Owl2 from '../divisions/Owl2';
import Fourth from '../divisions/Fourth';
import Fifth from '../divisions/Fifth';
import Sixth from '../divisions/Sixth';


function Home() {
  return (<>


    <div className='box' style={{ width: '100%', margin: '50px 100px 0px 100px',height:'auto' }}>


      <Swiper
        pagination={{
    
          clickable: true
        }}
    


        autoplay={{ delay: 4000, disableOnInteraction: false }}
        modules={[Pagination, Navigation, Autoplay]}
        className="mySwiper"
      >
        <SwiperSlide><img height='400px' width='88%' src="src/assets/1724914731_wake_up_makeup_sale__2596x836.webp" alt="" /></SwiperSlide>
        <SwiperSlide><img height='400px' width='88%' src="src/assets/img2.webp" alt="" /></SwiperSlide>
        <SwiperSlide><img height='400px' width='88%' src="src/assets/img3.webp" alt="" /></SwiperSlide>
        <SwiperSlide><img height='400px' width='88%' src="src/assets/img4.webp" alt="" /></SwiperSlide>
        <SwiperSlide><img height='400px' width='88%' src="src/assets/img5.webp" alt="" /></SwiperSlide>
        <SwiperSlide><img height='400px' width='88%' src="src/assets/img6.webp" alt="" /></SwiperSlide>
        <SwiperSlide><img height='400px' width='88%' src="src/assets/img7.webp" alt="" /></SwiperSlide>
        <SwiperSlide><img height='400px' width='88%' src="src/assets/img8.webp" alt="" /></SwiperSlide>
        <SwiperSlide><img height='400px' width='88%' src="src/assets/img9.webp" alt="" /></SwiperSlide>
        <SwiperSlide><img height='400px' width='88%' src="src/assets/img10.webp" alt="" /></SwiperSlide>
        <SwiperSlide><img height='400px' width='88%' src="src/assets/img11.webp" alt="" /></SwiperSlide>



      </Swiper>

      <div style={{ marginTop: '30px' }} >
        <img src="src/assets/week.webp" width='87% ' alt="" />
      </div>
    </div>

    <div className="cards" style={{ margin: '20px 100px' }}>
      <div className='d-flex justify-content-center aign-items-center'>
        <div ><p style={{ letterSpacing: '2px', fontWeight: 700, fontSize: '19px', fontFamily: '"Manrope", sans-serif' }}>FEATURED</p>
          <p style={{ fontWeight: '600' }} className='view ps-3 mb-4' >View ALL <i class="fa-solid fa-arrow-right"></i></p></div></div>





      <Owl />

      <div style={{ marginTop: '0px' }} >
        <img src="src/assets/bar.webp" width='100% ' alt="" />
      </div>

      <Third />

      <div>
        <img src="src/assets/upto1.webp" alt="" width='50%' />
        <img src="src/assets/upto3.webp" alt="" width='50%' />
      </div>

      <div>
        <img src="src/assets/upto2.webp" alt="" width='50%' />
        <img src="src/assets/upto4.webp" alt="" width='50%' />
      </div>
      <div>
        <img src="src/assets/upto5.webp" alt="" width='50%' />
        <img src="src/assets/upto6.webp" alt="" width='50%' />
      </div>
      <div>
        <img src="src/assets/upto7.webp" alt="" width='50%' />
        <img src="src/assets/upto3.webp" alt="" width='50%' />

        <div>
          <img src="src/assets/upto9.webp" alt="" width='50%' />
          <img src="src/assets/upto10.webp" alt="" width='50%' />
        </div>
      </div>

      <div style={{ marginTop: '50px' }} >
        <img src="src/assets/banner2.webp" width='100% ' alt="" />
      </div>



      <div className='d-flex justify-content-center aign-items-center mt-3'>
        <div ><p style={{ letterSpacing: '2px', fontWeight: 700, fontSize: '19px', fontFamily: '"Manrope", sans-serif' }}>BEST SELLERS</p>
         </div></div>
<Owl2/>

<Fourth/>
<Fifth/>
<Sixth/>
    </div>
<hr />

  </>

  )
}

export default Home;