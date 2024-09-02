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


import img from '../assets/bar.webp'

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
        <img src={img} width='100% ' alt="" />
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