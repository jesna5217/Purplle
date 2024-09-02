import React from 'react'
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import './Fourth.css'
function Fourth() {

    const options = {
         items: 4.6, // Adjust the number of items displayed
        dots: false, // Hide pagination dots
       nav:true,
        navText: ["<i class='fa fa-chevron-left'></i>", "<i class='fa fa-chevron-right'></i>"], // Customize the navigation arrows
      }

  return (
   
   <>
   <div className='d-flex justify-content-center align-items-center'>
  <img src="src/assets/now.webp" alt="" />
   </div>
   
<div className='mb-5'>
   <OwlCarousel className='owl-theme' loop nav {...options}>
   <div className='item'>
    <img src="src/assets/caro1.webp" alt="" />
   </div>
   <div className='item'>
    <img src="src/assets/caro2.webp" alt="" />
   </div>
   
   <div className='item'>
    <img src="src/assets/caro3.webp" alt="" />
   </div>
   <div className='item'>
    <img src="src/assets/caro4.webp" alt="" />
   </div>
   <div className='item'>
    <img src="src/assets/caro5.webp" alt="" />
   </div>
   <div className='item'>
    <img src="src/assets/caro6.webp" alt="" />
   </div>
   <div className='item'>
    <img src="src/assets/caro7.webp" alt="" />
   </div>
</OwlCarousel>
</div>
   </>
  )
}

export default Fourth