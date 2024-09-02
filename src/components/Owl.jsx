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
      <Card.Img variant="top" src="src/assets/item1.webp" />
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
      <Card.Img variant="top" src="src/assets/item2.avif" />
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
      <Card.Img variant="top" src="src/assets/item3.webp" />
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
      <Card.Img variant="top" src="src/assets/item4.webp" />
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
      <Card.Img variant="top" src="src/assets/item10.webp" />
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