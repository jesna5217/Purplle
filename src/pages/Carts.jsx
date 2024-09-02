import React from 'react'
import { Link } from 'react-router-dom'
import './Cart.css'

import Button from '@mui/material/Button'

function Carts() {
  return (
  <>
  <header className='main-header' style={{position:'fixed',top:'0'}}>
                <div className=' d-flex justify-content-around align-items-center header-one' style={{ backgroundColor: '#F9D3E8', height: '50px' }} >
                    <div className='d-flex justify-content-evenly align-items-center ' style={{ marginRight: "200px" }}>

                        <img src="https://media6.ppl-media.com/mediafiles/ecomm/home/1543587824_logo.png" alt="" height='30px' />
                        <div className='pt-3 d-flex ms-3 '>

                            <p className='fw-bolder '>⭐⭐FLAT Rs. 100 OFF on your first order!⭐⭐</p>
                            <div className='d-flex coupon ms-3' ><p>Use Code: <span style={{ color: '#cc0f99', fontWeight: '700' }}>APPFIRST</span></p></div>
                        </div>
                    </div>


                    <div className='d-flex align-items-center' >
                        <div style={{ backgroundColor: '#cc0f99', color: 'white', fontWeight: '700', height: '30px', width: '130px', padding: '3px 8px' }} className='pink rounded'><p>Download App</p></div>
                        <div><i class="fa-solid fa-xmark fa-2x ms-3 icon" ></i> </div>
                    </div>

                    <div style={{color:'#cc0f99',cursor:'pointer'}}>LOGIN</div>
   
                    
                    


                </div>
          


           <div className="white d-flex justify-content-between align-items-center mt-5" style={{paddingLeft:'100px',paddingRight:'100px'}}>
             <Link to='/'>       <img src="https://media6.ppl-media.com/static/purplle/img/purplle-logo-1.svg"  alt=""  />
             </Link>
                    
                    <div  style={{ color: 'black' }} >
                    
                        <span className="material-symbols-outlined me-3" style={{ fontWeight: '300' }}>
                            search
                        </span>
                        <span className="material-symbols-outlined me-3" style={{ fontWeight: '300' }}>
                            favorite
                        </span>
               
                        <span className="material-symbols-outlined me-3" style={{ fontWeight: '300' }}>
                            add_reaction
                        </span>

                    </div>
                </div>

            </header>


<div style={{height:'100vh',backgroundColor:'#eee',width:'100%'}}>
    <div className="empty">

<div>
    <img src="https://media6.ppl-media.com/mediafiles/ecomm/promo/1669805391_empty-pana-2.png" alt="" />
  
    <div style={{fontSize:'14px',fontWeight:'600'}}><p className='mt-5'>There are no items in the cart. <br />
<span style={{fontSize:'12px',color:'grey',fontWeight:'400'}}> Let's add some items to the cart to shop</span></p>
    </div>
 <Link to='/'>   <Button style={{color:'#5b26f5',fontSize:'15px',border:'1px solid #5b26f5',fontWeight:'600'}} variant="outlined">CONTINUE SHOPPING</Button></Link>
   
</div>


    </div>
</div>
            </>
  )
}

export default Carts