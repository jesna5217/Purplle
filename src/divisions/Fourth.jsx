import React from 'react'
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import './Fourth.css'


import now from '../assets/now.webp'
import caro1 from "../assets/caro1.webp"
import caro2 from "../assets/caro2.webp"
import caro3 from "../assets/caro3.webp"
import caro4 from "../assets/caro4.webp"
import caro5 from "../assets/caro5.webp"
import caro6 from "../assets/caro6.webp"
import caro7 from "../assets/caro7.webp"


function Fourth() {

    const options = {
         items: 4.6, // Adjust the number of items displayed
        dots: false, // Hide pagination dots
       nav:true,
        navText: ["<i class='fa fa-chevron-left'></i>", "<i class='fa fa-chevron-right'></i>"], // Customize the navigation arrows
      }

  return (
   
   <>
   <div className='d-flex justify-content-center align-items-center ban4'>
  <img src={now} alt="" />
   </div>
   
<div className='owl4' >
   <OwlCarousel className='owl-theme' loop nav {...options}>
   <div className='item'>
    <img src={caro1} alt="" />
   </div>
   <div className='item'>
    <img src={caro2} alt="" />
   </div>
   
   <div className='item'>
    <img src={caro3} alt="" />
   </div>
   <div className='item'>
    <img src={caro4} alt="" />
   </div>
   <div className='item'>
    <img src={caro5} alt="" />
   </div>
   <div className='item'>
    <img src={caro6} alt="" />
   </div>
   <div className='item'>
    <img src={caro7} alt="" />
   </div>
</OwlCarousel>
</div>
   </>
  )
}

export default Fourth