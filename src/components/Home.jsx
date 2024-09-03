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
import upto1  from "../assets/upto1.webp"
import upto2  from "../assets/upto2.webp"
import upto3  from "../assets/upto3.webp"
import upto4  from "../assets/upto4.webp"
import upto5  from "../assets/upto5.webp"
import upto6  from "../assets/upto6.webp"
import upto7  from "../assets/upto7.webp"
import upto9  from "../assets/upto9.webp"
import upto10  from "../assets/upto10.webp"
import banner2 from  "../assets/banner2.webp"
import img from '../assets/bar.webp'

function Home() {
  return (<>


    <div className='box'>


      <Swiper
        pagination={{
    
          clickable: true
        }}
    


        autoplay={{ delay: 4000, disableOnInteraction: false }}
        modules={[Pagination, Navigation, Autoplay]}
        className="mySwiper"
      >
        <SwiperSlide><img height='400px' width='88%' src="https://media6.ppl-media.com/tr:w-1280,c-at_max,pr-true,dpr-2/mediafiles/ecomm/misc/1725022748_lakme_powered_by_sunscreen_revised_2596x836.jpeg" alt="" /></SwiperSlide>
        <SwiperSlide><img height='400px' width='88%' src="https://media6.ppl-media.com/tr:w-1280,c-at_max,pr-true,dpr-2/mediafiles/ecomm/misc/1725043361_ubtan-de-tan-powder-banner_web.jpg" alt="" /></SwiperSlide>
        <SwiperSlide><img height='400px' width='88%' src="https://media6.ppl-media.com/tr:w-1280,c-at_max,pr-true,dpr-2/mediafiles/ecomm/misc/1725084749_lakme_hul_makeup_2596x836.jpeg" alt="" /></SwiperSlide>
        <SwiperSlide><img height='400px' width='88%' src="https://media6.ppl-media.com/tr:w-1280,c-at_max,pr-true,dpr-2/mediafiles/ecomm/misc/1724911956_web-hero_1298x418.jpg"alt="" /></SwiperSlide>
        <SwiperSlide><img height='400px' width='88%' src="https://media6.ppl-media.com/tr:w-1280,c-at_max,pr-true,dpr-2/mediafiles/ecomm/misc/1725084747_cetaphil_radiance_2596x836.jpeg" alt="" /></SwiperSlide>
        <SwiperSlide><img height='400px' width='88%' src="https://media6.ppl-media.com/tr:w-1280,c-at_max,pr-true,dpr-2/mediafiles/ecomm/misc/1725046660_ag-pu_webhp-1.jpg" alt="" /></SwiperSlide>
        <SwiperSlide><img height='400px' width='88%' src="https://media6.ppl-media.com/tr:w-1280,c-at_max,pr-true,dpr-2/mediafiles/ecomm/misc/1725085155_dot_and_key_eventone_-_skincare_2596x836.jpeg" alt="" /></SwiperSlide>
        <SwiperSlide><img height='400px' width='88%' src="https://media6.ppl-media.com/tr:w-1280,c-at_max,pr-true,dpr-2/mediafiles/ecomm/misc/1725090185_mars-_makeup-_blush_2596x836.jpeg" alt="" /></SwiperSlide>
        <SwiperSlide><img height='400px' width='88%' src="https://media6.ppl-media.com/tr:w-1280,c-at_max,pr-true,dpr-2/mediafiles/ecomm/misc/1724836179_global_store_skinmakeup_and_hair_2596x836.jpeg" alt="" /></SwiperSlide>
        <SwiperSlide><img height='400px' width='88%' src="https://media6.ppl-media.com/tr:w-1280,c-at_max,pr-true,dpr-2/mediafiles/ecomm/misc/1725084752_mamaearth_everday_makeup_2596x836.jpeg" alt="" /></SwiperSlide>
       



      </Swiper>

      <div  className='ban'>
        <img src="src/assets/week.webp"  alt="" />
      </div>
    </div>

    <div className="cards">
      <div className='d-flex justify-content-center aign-items-center'>
        <div ><p style={{  fontWeight: 700, fontFamily: '"Manrope", sans-serif'}}  className="featured">FEATURED</p>
          <p style={{ fontWeight: '600' }} className='view text-center mb-4' >View ALL <i class="fa-solid fa-arrow-right"></i></p></div></div>


          </div>

<div className="owl1"><Owl /></div>
      <div style={{ marginTop: '0px' }}  className='owl1'>
        <img src={img} width='100% ' alt="" />
      </div>
<div className="owl1"> <Third /></div>
     <div className="owl1">

      <div>
        <img src={upto1} alt="" width='50%' />
        <img src={upto3} alt="" width='50%' />
      </div>

      <div>
        <img src={upto2} alt="" width='50%' />
        <img src={upto4} alt="" width='50%' />
      </div>
      <div>
        <img src={upto5} alt="" width='50%' />
        <img src={upto6} alt="" width='50%' />
      </div>
      <div>
        <img src={upto7} alt="" width='50%' />
        <img src={upto3} alt="" width='50%' />

        <div>
          <img src={upto9} alt="" width='50%' />
          <img src={upto10} alt="" width='50%' />
        </div>
      </div>

      <div style={{ marginTop: '50px' }} >
        <img src={banner2} width='100% ' alt="" />
      </div>

      </div>

      <div className='d-flex justify-content-center aign-items-center mt-3 '>
        <div ><p style={{ letterSpacing: '2px', fontWeight: 700,fontFamily: '"Manrope", sans-serif' }} className="featured">BEST SELLERS</p>
         </div></div>

         <div className="owl1"><Owl2/></div>

<div className="owl1"><Fourth/></div>

<div className="owl1"><Fifth/></div>
<div className="owl1"><Sixth/></div>
   
<hr />

  </>

  )
}

export default Home;