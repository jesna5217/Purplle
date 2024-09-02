import React, { useEffect, useState } from 'react'
import './Header.css'
import './Header2.css'
import './Home.css'
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import { Link } from 'react-router-dom';
;

function Header() {
    const [isVisible, setIsVisible] = useState(false);

    const handleScroll = () => {
        if (window.scrollY > 100) { // Adjust the scroll position as needed
            setIsVisible(true);
        } else {
            setIsVisible(false);
        }
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true)

   

   


    
    return (
        <>
        
            <header className='main-header'>
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

                    <div style={{color:'#cc0f99',cursor:'pointer'}} onClick={handleShow}>LOGIN</div>
   
                    
                    
                    <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title><img src="src/assets/log.webp" height='100' width='450' alt="" className='m-3' />

<div style={{fontSize:'14px',fontWeight:'500',marginLeft:'200px'}}>Login or Signup</div></Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
          
              <Form.Control
                type="email"
                placeholder="Enter 10-digit phone number"
            
              />
            </Form.Group>
            
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose} style={{width:'100%',backgroundColor:'rgba(0,0,0,.2)'}}>
            <span style={{color:'grey'}}>CONTINUE</span>
          </Button>
          <div className='d-flex text-center' style={{fontSize:'10px',marginRight:'70px'}}>By creating an account or logging in, you agree to Purplle's 
        Terms of Use and
            <br /> Privacy Policy 
            and consent to the collection and use of your personal 
            <br />information/sensitive personal data or information.</div>
        
        </Modal.Footer>
      </Modal>


                </div>
            </header>



            <header className={`scroll-header ${isVisible ? 'show' : ''}`}>
                <div style={{ height: '80px', width: '100%' }} className='d-flex justify-content-evenly align-items-center'>
                    <img src="https://media6.ppl-media.com/static/purplle/img/purplle-logo-1.svg" className='mt-5' alt="" />

                    <nav className='nav' >
                        <ul>
                            <li><a href="">SHOP CATEGORIES</a></li>
                            <li><a href="">BRANDS</a></li>

                            <li><a href="">OFFERS</a></li>
                            <li><a href="">NEW</a></li>
                            <li><a href="">SPLURGE</a></li>
                            <li><a href="">MAGAZINE</a></li>
                            <li><a href="">ELITE OFFER</a></li>

                        </ul>
                    </nav>

                    <div className='third' style={{ color: 'black' }}>
                    
                        <span className="material-symbols-outlined me-3" style={{ fontWeight: '300' }}>
                            search
                        </span>
                        <span className="material-symbols-outlined me-3" style={{ fontWeight: '300' }}>
                            favorite
                        </span>
                 <Link to={'/cart'} style={{textDecoration:'none',color:'black'}}>  <span className="material-symbols-outlined me-3" style={{ fontWeight: '300' ,cursor:'pointer'}}>
                            shopping_cart
                        </span></Link>
                        <span className="material-symbols-outlined me-3" style={{ fontWeight: '300' }} >
                            add_reaction
                        </span>
















                    </div>
                </div>

            </header>


            <header>
                <div className='app' style={{ paddingTop: '60px', paddingRight: '100px', height: '70px' }}>
                    <p>DOWNLOAD APP  &nbsp; | </p>
                    <p>SUPPORT &nbsp;  |  </p>
                    <p>  TRACK ORDER</p>
                </div>
                <hr />
                <div className='d-flex justify-content-around align-items-center' style={{ height: '60px' }}>

                    <div className='d-flex input'><input type="text" placeholder='What you looking for?' />
                        <i class="fa-solid fa-magnifying-glass me-3" style={{ color: 'grey' }}></i>
                    </div>
                    <div className="d-flex">
                        <Link to='/'>
                        <img src="https://media6.ppl-media.com/static/purplle/img/purplle-logo-1.svg" height='60px' alt="" />
                        <img className='mt-3 ms-1 ' src="https://media6.ppl-media.com/mediafiles/ecomm/promo/1537798844_try-logo-3x.png" alt="" height='27px' /></Link>
                    </div>
                    <div style={{ color: 'black' }}>
                        <span className="material-symbols-outlined me-3" style={{ fontWeight: '300', fontSize: '35px' }}>
                            favorite
                        </span>
                     <Link to='/cart' style={{textDecoration:'none'}} >  <span className="material-symbols-outlined me-3" style={{ fontWeight: '300', fontSize: '35px',color:'black',cursor:'pointer' }}>
                            shopping_cart
                        </span></Link>
                        <span className="material-symbols-outlined me-3" style={{ fontWeight: '300', fontSize: '35px' }}>
                            add_reaction
                        </span>

                    </div>

                </div>
                <hr />

                <nav className='nav-bar'>
                    <ul>
                        <li><a href=""><span className="material-symbols-outlined" style={{ fontWeight: '300' }}>
                            sort
                        </span>SHOP CATEGORIES</a></li>
                        <li><a href="">BRANDS</a></li>

                        <li><a href="">OFFERS</a></li>
                        <li><a href="">NEW</a></li>
                        <li><a href="">SPLURGE</a></li>
                        <li><a href="">MAGAZINE</a></li>
                        <li><a href="">ELITE OFFER</a></li>

                    </ul>
                </nav>
                <hr />

            </header>
        </>
    )
}

export default Header