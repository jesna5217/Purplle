import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import './Owl2.css'
  import owl1 from "../assets/owl1.webp"
  import owl2 from "../assets/owl2.webp"
  import owl3 from "../assets/owl3.webp"
  import owl4 from "../assets/owl4.webp"
  import owl5 from "../assets/owl5.webp"
  import owl6 from "../assets/owl6.webp"
  import owl7 from "../assets/owl7.webp"
  import owl9 from "../assets/owl9.webp"
  import owl10 from "../assets/owl10.webp"

import { Card ,Button} from 'react-bootstrap';


// import required modules
import { Navigation } from 'swiper/modules';
function Owl2() {
  return (
  <>
  <div className='mt-5'>
   <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
        <SwiperSlide>
          <div className='d-flex justify-content-evenly'>
          
          <Card style={{ width: '13rem',height:'370px' ,border:'none'}} className='me-4'>
      <Card.Img variant="top" src={owl1}/>
      <Card.Body>
        <div className='free bie buy'>
        <p>Buy 2, Get Extra 5%</p></div>
        <Card.Text style={{ fontFamily: 'sans-serif',fontSize:'14px'}} >
         Alps Goodness Rosemary Water (100ml)
         <h6 className='mt-2 fs-6'>&#8377; 199 &nbsp; <span className='span'><strike>&#8377; 225</strike></span><span className='off' style={{color:'green'}}>&nbsp;12% off</span></h6>
        <Button className='w-100' style={{fontSize:'15px',color:' #6600ff',border:'1px solid #6600ff',backgroundColor:'transparent',fontWeight:'600'}}>Add to cart</Button>
        </Card.Text>
       
      </Card.Body>
    </Card>


    <Card style={{ width: '13rem',height:'340px' ,border:'none'}}  className='me-4'>
      <Card.Img variant="top" src={owl2} />
      <Card.Body>
        <div className='free gift'>
        <p>Free gift on &#8377;599 </p></div>
        <Card.Text style={{ fontFamily: 'sans-serif',fontSize:'14px'}}>
         DERDOC by Purple 5% Glycolic Acid
         <h6 className='mt-2'>&#8377; 439 &nbsp; <span className='span'><strike>&#8377; 499</strike></span><span className='off'>&nbsp;13% off</span></h6>
         <Button className='w-100' style={{fontSize:'15px',color:' #6600ff',border:'1px solid #6600ff',backgroundColor:'transparent',fontWeight:'600'}}>Add to cart</Button>
        
        </Card.Text>
      </Card.Body>
    </Card>


    <Card style={{ width: '13rem',height:'340px' ,border:'none'}}  className='me-4'>
      <Card.Img variant="top" src={owl3} />
      <Card.Body>
        <div className='free gift'>
        <p>Freebie on 349+</p></div>
        <Card.Text style={{ fontFamily: 'sans-serif',fontSize:'14px'}}>
        DERMDOC by Purple 10% Niacinamide Face Serum...
         <h6 className='mt-2'>&#8377; 228 &nbsp; <span className='span'><strike>&#8377; 285</strike></span><span className='off'>&nbsp;20% off</span></h6>
         <Button className='w-100' style={{fontSize:'15px',color:' #6600ff',border:'1px solid #6600ff',backgroundColor:'transparent',fontWeight:'600'}}>Add to cart</Button>
        
        </Card.Text>
      </Card.Body>
    </Card>

    <Card style={{ width: '13rem',height:'340px' ,border:'none'}}  className='me-4'>
      <Card.Img variant="top" src={owl4} />
      <Card.Body>
      
      
        <Card.Text style={{ fontFamily: 'sans-serif',fontSize:'14px'}}>
         DERMDOC by Purple 2% Kojic Acid Night Cream ...
         <h6 className='mt-2'>&#8377; 275 &nbsp; <span className='span'><strike>&#8377; 350</strike></span><span className='off'>&nbsp;21% off</span></h6>
         <Button className='w-100' style={{fontSize:'15px',color:' #6600ff',border:'1px solid #6600ff',backgroundColor:'transparent',fontWeight:'600'}}>Add to cart</Button>
        
        </Card.Text>
      </Card.Body>
    </Card>

    <Card style={{ width: '13rem',height:'340px' ,border:'none'}} className='me-4'>
      <Card.Img variant="top" src={owl5} />
      <Card.Body>
        <div className='free buy'>
        <p>Buy 2, Get Extra 10%</p></div>
        <Card.Text style={{ fontFamily: 'sans-serif',fontSize:'14px'}}>
        Alps Goodness Beetroot(50g)100% Natura..
         <h6 className='mt-2'>&#8377; 94 &nbsp; <span className='span'><strike>&#8377;99</strike></span><span className='off'>&nbsp;5% off</span></h6>
         <Button className='w-100' style={{fontSize:'15px',color:' #6600ff',border:'1px solid #6600ff',backgroundColor:'transparent',fontWeight:'600'}}>Add to cart</Button>
        
        </Card.Text>
      </Card.Body>
    </Card>
    </div>
    </SwiperSlide>
        <SwiperSlide>
        <div className='d-flex justify-content-evenly' >
          
          <Card style={{ width: '13rem',height:'340px' ,border:'none'}} className='me-4' >
      <Card.Img variant="top" src={owl6} />
      <Card.Body>
        
        <Card.Text style={{ fontFamily: 'sans-serif',fontSize:'14px'}}>
         Good Vibes De-Tan Glow Night Cream Ubtan...
         <h6 className='mt-2'>&#8377; 199 &nbsp; <span className='span'><strike>&#8377; 290</strike></span><span className='off'>&nbsp;30% off</span></h6>
         <Button className='w-100' style={{fontSize:'15px',color:' #6600ff',border:'1px solid #6600ff',backgroundColor:'transparent',fontWeight:'600'}}>Add to cart</Button>
        
        </Card.Text>
      </Card.Body>
    </Card>


    <Card style={{ width: '13rem',height:'340px' ,border:'none'}}  className='me-4'>
      <Card.Img variant="top" src={owl7} />
      <Card.Body>
     
        <Card.Text style={{ fontFamily: 'sans-serif',fontSize:'14px'}}>
         NY Bae PRO Strobe Cream | Prime + Highlighter..,
         <h6 className='mt-2'>&#8377; 269</h6>
         <Button className='w-100' style={{fontSize:'15px',color:' #6600ff',border:'1px solid #6600ff',backgroundColor:'transparent',fontWeight:'600'}}>Add to cart</Button>
        
        </Card.Text>

      </Card.Body>
    </Card>


    <Card style={{ width: '13rem',height:'340px' ,border:'none'}}  className='me-4'>
      <Card.Img variant="top" src={owl5} />
      <Card.Body>
        <div className='free gift'>
        <p>Free pouch</p></div>
        <Card.Text style={{ fontFamily: 'sans-serif',fontSize:'14px'}}>
        Alps Goodness Beetroot(50g)100% Natura..
         <h6 className='mt-2'>&#8377; 94 &nbsp; <span className='span'><strike>&#8377; 99</strike></span><span className='off'>&nbsp;5% off</span></h6>
         <Button className='w-100' style={{fontSize:'15px',color:' #6600ff',border:'1px solid #6600ff',backgroundColor:'transparent',fontWeight:'600'}}>Add to cart</Button>
        
        </Card.Text>
      </Card.Body>
    </Card>

    <Card style={{ width: '13rem',height:'340px' ,border:'none'}}  className='me-4'>
      <Card.Img variant="top" src={owl9} />
      <Card.Body>
        <div className='free'>
        <p>Freebie on 349+</p></div>
        <Card.Text style={{ fontFamily: 'sans-serif',fontSize:'14px'}}>
       Good Vibes Brightening PeeL-Off Mask 
         <h6 className='mt-2'>&#8377; 249 &nbsp; <span className='span'><strike>&#8377; 268</strike></span><span className='off'>&nbsp;12% off</span></h6>
         <Button className='w-100' style={{fontSize:'15px',color:' #6600ff',border:'1px solid #6600ff',backgroundColor:'transparent',fontWeight:'600'}}>Add to cart</Button>
        
        </Card.Text>
      </Card.Body>
    </Card>

    <Card style={{ width: '13rem',height:'340px' ,border:'none'}} >
      <Card.Img variant="top" src={owl10} />
      <Card.Body>
        <div className='free'>
        <p>Freebie on 349+</p></div>
        <Card.Text style={{ fontFamily: 'sans-serif',fontSize:'14px'}}>
      POND'S Bright Beauty Serum Cream Spot-less...
         <h6 className='mt-2'>&#8377; 143 &nbsp; <span className='span'><strike>&#8377; 159</strike></span><span className='off'>&nbsp;10% off</span></h6>
         <Button className='w-100' style={{fontSize:'15px',color:' #6600ff',border:'1px solid #6600ff',backgroundColor:'transparent',fontWeight:'600'}}>Add to cart</Button>
        
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

export default Owl2