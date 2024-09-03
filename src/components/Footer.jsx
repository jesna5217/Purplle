import React from 'react'
import './Footer.css'
function Footer() {
  return (
    <>
      <div className='d-flex justify-content-center align-items-center text-center mt-5 p-5 assist'>
        <div className='blue ' >
          <img src="src/assets/logo.webp" alt="" className='mb-4' />
          <h4>100% Secure Payments</h4>
          <p>All major credit & debit cards are accepted.</p>
        </div>
        <div className='blue'>
          <img src="src/assets/logo2.webp" alt="" className='mb-4' />
          <h4>Beauty Assistant</h4>
          <p>Tell me what you are looking for and i will work my magic to <br /> help you find your perfect match</p>
        </div>
        <div className='blue'>
          <img src="src/assets/logo3.webp" alt="" className='mb-4' />
          <h4>Help Center</h4>

          <p>Got a question? Look no further. Browse FAQs or submit <br />
            your query</p>

        </div>
      </div>

      <div style={{ height: '500px', backgroundColor: '#eee', width: '100%' }} className='d-flex justify-content-around align-items-center text-center assist'>
        <div>
          <h4 style={{ fontWeight: '400' }}>Spotlight</h4>
          <video controls height='300' width='400' className='mt-5' preload='none' poster='https://media6.ppl-media.com/mediafiles/ecomm/home/1545829914_sddefault.jpg' src="https://player.vimeo.com/progressive_redirect/playback/897095146/rendition/720p/file.mp4?loc=external&signature=5cf8273eeb7f22232df8709ffa3554b346203d0703c3732541da162d44925089"></video>




        </div>
        <div >
          <h4 style={{ fontWeight: '400' }} className='mb-4'>Shop on the go</h4>
          <img height='300px' width="400px" src="https://media6.ppl-media.com/mediafiles/ecomm/home/1703149844_download-app.jpg" alt="" />
        </div>
      </div>

      <div style={{ height: '430px', padding: ' 60px 130px', width: '100%' }} className='assist'>
        <div style={{ height: '350px', backgroundColor: '#eee', padding: '50px' }}>

          <div className='d-flex mb-1 red'>
            <span style={{ fontSize: '13px', fontWeight: '500', color: '#6c7a82' }} className='me-5'>DISCOVER:</span>
            <p style={{ fontSize: '13px', color: 'grey', marginLeft: '50px' }}>
              <span> Nail </span>
              <span>Art/</span>
              <span>Eye Makeup/</span>
              <span>Bridal Makeup/</span>
              <span>How To Do Makeup/</span>
              <span>Pimples /</span>
              <span> Stretchmark Removal / </span>
              <span>Best Eye Creams/</span>
              <span>Hairstyles/</span>
              <span>Burgundy Hair Perfumes For Men /</span>
              <span>Best Facewash For Men/</span>
              <span>Best Perfumes For Men Skincare Tips</span>
            </p></div>


          <div className='d-flex mb-1 red'>
            <span style={{ fontSize: '13px', fontWeight: '500', color: 'grey' }} className='me-5'>SHOP MAKEUP:</span>
            <p style={{ fontSize: '13px', color: 'grey', marginLeft: '20px' }}>
              <span>Lakme /</span>
              <span>Maybelline /</span>
              <span>Colorbar/</span>
              <span> L'oreal /</span>
              <span> Revlon /</span>
              <span> Avon /</span>
              <span> Elle18</span>

            </p></div>


          <div className='d-flex mb-1 red'>
            <span style={{ fontSize: '13px', fontWeight: '500', color: 'grey' }} className='me-5'>SKIN CARE:</span>
            <p style={{ fontSize: '13px', color: 'grey', marginLeft: '45px' }}>
              <span>  Bio Oil / </span>
              <span>  Olay / </span>
              <span>  Neutrogena /</span>
              <span>   Lotus Herbals/</span>
              <span>  VLCC/</span>
              <span>  Kaya/</span>
              <span>  Vichy/</span>
              <span>  Nivea/</span>

              <span>    Gillette /</span>
              <span>    Park Avenue</span>
            </p></div>


          <div className='d-flex mb-1 red '>
            <span style={{ fontSize: '13px', fontWeight: '500', color: 'grey' }} className='me-5'>HAIR PRODUCTS:</span>
            <p style={{ fontSize: '13px', color: 'grey', marginLeft: '10px' }}>
              <span>   L'oreal Professionnel/</span>
              <span>  Schwarzkopf/</span>
              <span>Matrix Biolage /</span>
              <span>Livon Hair Gain/</span>
              <span>Biotique/</span>
              <span>Roots</span>

            </p></div>

          <div className='d-flex mb-1 red'>
            <span style={{ fontSize: '13px', fontWeight: '500', color: 'grey' }} className='me-5'>FRAGRANCE:</span>
            <p style={{ fontSize: '13px', color: 'grey', marginLeft: '35px' }}>
              <span>Davidoff/</span>
              <span>Hugo Boss / </span>
              <span>Calvin Klein /</span>
              <span>Elizabeth Arden/</span>
              <span>Jaguar/</span>
              <span>Victoria's Secret</span>

            </p></div>


          <div className='d-flex red'>
            <span style={{ fontSize: '13px', fontWeight: '500', color: 'grey' }} className='me-5'>ELECTRONICS:</span>
            <p style={{ fontSize: '13px', color: 'grey', marginLeft: '26px' }}>
              <span>   Philips/</span>
              <span>   Wahl/</span>
              <span>   Braun</span>
            </p></div>

        </div>



      </div>
      <div className="foot d-flex justify-content-around align-items-center assist">
        <div >
          <h5>Purplle</h5>
          <br />
          <p>About Us</p>
          <p>Our Team</p>
          <p>Careers</p>
          <p>Press</p>
          <p>Sitemap</p>
          <p>Compliance</p>
        </div>


        <div className='purplle'>
          <h5> Purplle Business</h5><br />
          <p>Sell on Purplle</p>
        </div>
        <div className='need'>
          <h5>Privacy Info</h5><br />
          <p>Privacy Policy</p>
          <p>Terms of Use</p>
          <p>Return & Cancellation Policy</p>
        </div>

        <div className='privacy'>
          <h5> Need Help?</h5><br />
          <p>FAQ'S</p>
          <p>Contact Us</p>
        </div>
      </div>
      <hr />

      <div style={{ height: '170px' }} className='pt-3 assist'>
        <div className='pay d-flex justify-content-between'>
          <div className="d-flex">


            <h5 className='me-3' style={{ color: '#6c7a82', fontSize: '18px' }}>Payment</h5>
            <img height='23px' src="	https://media6.ppl-media.com/mediafiles/ecomm/promo/1499177379_tt.jpg" alt="" />
          </div>


          <div className='d-flex'>
            <h5 className='me-3' style={{ color: '#6c7a82', fontSize: '18px' }}>Connect</h5><div className='d-flex'>
              <i className='fb' style={{ color: 'rgb(57, 87, 154)', fontSize: '25px' }} class="fa-brands fa-facebook me-2"></i>
              <div className='twitter me-2'><i class="fa-brands fa-twitter"></i></div>
              <i style={{ color: 'rgb(237, 56, 51)', fontSize: '25px' }} class="fa-brands fa-google-plus me-2"></i>
              <i class="fa-brands fa-pinterest me-2" style={{ fontSize: '25px', color: 'rgb(205,29,31' }}></i>
              <div className='twitter me-2' style={{ backgroundColor: 'rgb(85, 85, 85)' }}><i class="far fa-envelope" ></i></div>

              <div className='twitter me-2' style={{ backgroundColor: 'rgb(237, 56, 51)' }}><i class="fa-brands fa-youtube"></i></div>
              <div className='twitter me-2' style={{ backgroundColor: 'rgb(233, 27, 144)' }}><i class="fa-brands fa-instagram"></i></div>
              <div className='twitter me-2' style={{ backgroundColor: 'rgb(57, 125, 179)' }}><i class="fa-brands fa-linkedin-in"></i></div>

            </div>



          </div></div>
         
        <div className='d-flex justify-content-center align-items-center' style={{ fontWeight: '300', color: 'black' }}>Copyright© 2020 Purplle. All Rights Reserved</div>
      </div>

    </>
  )
}

export default Footer
