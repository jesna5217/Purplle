import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import './owl.css'
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';

import { Card } from 'react-bootstrap';


// import required modules
import { Navigation } from 'swiper/modules';
function Owl() {
  return (
  <>
  <div className='mb-3'>
   <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
        <SwiperSlide>
          <div className='d-flex'>
          
          <Card style={{ width: '15rem',height:'370px' ,border:'none'}} className='me-4'>
      <Card.Img variant="top" src="https://media6.ppl-media.com/tr:h-250,w-250,c-at_max,dpr-2/static/img/product/367224/aqualogica-detan-dewy-sunscreen-with-cherry-tomato-and-hyaluronic-acid-50-g_1_display_1678534840_a56b7b57.jpg" />
      <Card.Body>
        <div className='free bie'>
        <p>Freebie on 349+</p></div>
        <Card.Text style={{ fontFamily: 'sans-serif',fontSize:'14px'}}>
         Aqualogica Radiance+Dewy Sunscreen with Watermelon...
         <h6 className='mt-2'>&#8377; 439 &nbsp; <span className='span'><strike>&#8377; 499</strike></span><span className='off'>&nbsp;13% off</span></h6>
        
        </Card.Text>
       
      </Card.Body>
    </Card>


    <Card style={{ width: '15rem',height:'340px' ,border:'none'}}  className='me-4'>
      <Card.Img variant="top" src="https://media6.ppl-media.com//tr:h-750,w-750,c-at_max,dpr-2/static/img/product/379610/lakme-lumi-skin-30g_1_display_1706349867_d24b737d.jpg" />
      <Card.Body>
        <div className='free'>
        <p>Freebie on 349+</p></div>
        <Card.Text style={{ fontFamily: 'sans-serif',fontSize:'14px'}}>
        Lakme Lumi Cream Face Cream with moisturiser and highlighter
         <h6 className='mt-2'>&#8377; 293 &nbsp; <span className='span'><strike>&#8377; 325</strike></span><span className='off'>&nbsp;10% off</span></h6>
        
        </Card.Text>
      </Card.Body>
    </Card>


    <Card style={{ width: '15rem',height:'340px' ,border:'none'}}  className='me-4'>
      <Card.Img variant="top" src="https://media6.ppl-media.com/tr:h-550,w-550,c-at_max,dpr-2/static/img/product/341938/jaquline-usa-3in1-daily-skin-brightening-wipes-30n_1_display_1673428218_486d330e.jpg" />
      <Card.Body>
        <div className='free'>
        <p>Freebie on 349+</p></div>
        <Card.Text style={{ fontFamily: 'sans-serif',fontSize:'14px'}}>
        Jaquline Usa 3 in 1 Daily skin Brightening wipes
         <h6 className='mt-2'>&#8377; 98 &nbsp; <span className='span'><strike>&#8377; 150</strike></span><span className='off'>&nbsp;35% off</span></h6>
        
        </Card.Text>
      </Card.Body>
    </Card>

    <Card style={{ width: '15rem',height:'340px' ,border:'none'}}  className='me-4'>
      <Card.Img variant="top" src="https://media6.ppl-media.com//tr:h-750,w-750,c-at_max,dpr-2/static/img/product/371894/the-derma-co-2-percentage-salicylic-acid-face-serum-with-witch-hazel-and-willow-bark-for-active-acne-8-ml_12_display_1706679604_ee790804.jpg" />
      <Card.Body>
        <div className='free'>
        <p>Freebie on 349+</p></div>
        <Card.Text style={{ fontFamily: 'sans-serif',fontSize:'14px'}}>
        The Derma Co, 10% Salicylic Acid  Face Serum
         <h6 className='mt-2'>&#8377; 571 &nbsp; <span className='span'><strike>&#8377; 649</strike></span><span className='off'>&nbsp;12% off</span></h6>
        
        </Card.Text>
      </Card.Body>
    </Card>

    <Card style={{ width: '15rem',height:'340px' ,border:'none'}} className='me-4'>
      <Card.Img variant="top" src="https://media6.ppl-media.com/tr:h-550,w-550,c-at_max,dpr-2/static/img/product/374610/mamaearth-vitamin-c-face-wash-with-vitamin-c-and-turmeric-for-skin-illumination-100-ml_8_display_1700631264_c8b8e372.jpg" />
      <Card.Body>
        <div className='free'>
        <p>Freebie on 349+</p></div>
        <Card.Text style={{ fontFamily: 'sans-serif',fontSize:'14px'}}>
        Mamaearth Vitamin C Daily Glow Face Wash
         <h6 className='mt-2'>&#8377; 229 &nbsp; <span className='span'><strike>&#8377; 249</strike></span><span className='off'>&nbsp;8% off</span></h6>
        
        </Card.Text>
      </Card.Body>
    </Card>
    </div>
    </SwiperSlide>
        <SwiperSlide>
        <div className='d-flex' >
          
          <Card style={{ width: '15rem',height:'340px' ,border:'none'}} className='me-4' >
      <Card.Img variant="top" src="src/assets/item.webp" />
      <Card.Body>
        <div className='free'>
        <p>Freebie on 349+</p></div>
        <Card.Text style={{ fontFamily: 'sans-serif',fontSize:'14px'}}>
        Jaquline Vitamin C Glow Sheet Mask
         <h6 className='mt-2'>&#8377; 99 &nbsp; <span className='span'><strike>&#8377; 130</strike></span><span className='off'>&nbsp;7% off</span></h6>
        
        </Card.Text>
      </Card.Body>
    </Card>


    <Card style={{ width: '15rem',height:'340px' ,border:'none'}}  className='me-4'>
      <Card.Img variant="top" src="src/assets/item7.webp" />
      <Card.Body>
        <div className='free'>
        <p>Freebie on 349+</p></div>
        <Card.Text style={{ fontFamily: 'sans-serif',fontSize:'14px'}}>
     Loreal Excellence No Ammonia Rich Hair Color
         <h6 className='mt-2'>&#8377; 571 &nbsp; <span className='span'><strike>&#8377; 650</strike></span><span className='off'>&nbsp;17% off</span></h6>
        
        </Card.Text>
      </Card.Body>
    </Card>


    <Card style={{ width: '15rem',height:'340px' ,border:'none'}}  className='me-4'>
      <Card.Img variant="top" src="src/assets/item8.webp" />
      <Card.Body>
        <div className='free'>
        <p>Freebie on 349+</p></div>
        <Card.Text style={{ fontFamily: 'sans-serif',fontSize:'14px'}}>
         Aqualogica Radiance+Dewy Sunscreen with Watermelon...
         <h6 className='mt-2'>&#8377; 439 &nbsp; <span className='span'><strike>&#8377; 499</strike></span><span className='off'>&nbsp;13% off</span></h6>
        
        </Card.Text>
      </Card.Body>
    </Card>

    <Card style={{ width: '15rem',height:'340px' ,border:'none'}}  className='me-4'>
      <Card.Img variant="top" src="src/assets/item9.webp" />
      <Card.Body>
        <div className='free'>
        <p>Freebie on 349+</p></div>
        <Card.Text style={{ fontFamily: 'sans-serif',fontSize:'14px'}}>
        Mamaearth Vitamin C Daily Glow Face Wash
         <h6 className='mt-2'>&#8377; 229 &nbsp; <span className='span'><strike>&#8377; 249</strike></span><span className='off'>&nbsp;8% off</span></h6>
        
        </Card.Text>
      </Card.Body>
    </Card>

    <Card style={{ width: '15rem',height:'340px' ,border:'none'}} >
      <Card.Img variant="top" src="src/assets/item1.webp" />
      <Card.Body>
        <div className='free'>
        <p>Freebie on 349+</p></div>
        <Card.Text style={{ fontFamily: 'sans-serif',fontSize:'14px'}}>
         Aqualogica Radiance+Dewy Sunscreen with Watermelon...
         <h6 className='mt-2'>&#8377; 439 &nbsp; <span className='span'><strike>&#8377; 499</strike></span><span className='off'>&nbsp;13% off</span></h6>
        
        </Card.Text>
      </Card.Body>
    </Card>
    </div>

        </SwiperSlide>
        
      </Swiper>
</div>




  </>
  )
}

export default Owl