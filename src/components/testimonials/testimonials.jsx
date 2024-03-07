import React from 'react'
import './testimonials.css'
import AVT1 from '../../assets/avatar1.jpg'
import AVT2 from '../../assets/avatar2.jpg'
import AVT3 from '../../assets/avatar3.jpg'
import AVT4 from '../../assets/avatar4.jpg'

// import Swiper core and required modules
// import { Pagination} from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';

import 'swiper/css/pagination';

















const Testimonials = () => {
const data =[
  {
    avatar:AVT1,
    name:' Sarah W',
    review:'"I hired this company for their services, and they exceeded my expectations. Professional, knowledgeable, and efficient team. Highly recommended!'
  },
  {
    avatar:AVT2,
    name:'John D',
    review:'A loyal customer for years, this service provider never fails to impress. Responsive, friendly, and goes the extra mile'
  },
  {
    avatar:AVT3,
    name:'Lisa M.',
    review:'Impressed by their expertise and professionalism. Excellent communication and exceptional results. Highly recommend!'
  },
 
  {
    avatar:AVT4,
    name:'Emily L',
    review:'This service provider delivered beyond expectations. Deep understanding, attention to detail, and remarkable reliability'
  }
]











  return (
    <section id='testimonials'>
      <h5>Review from Clients</h5>
      <h2>Testimonials</h2>
        <Swiper className="container testimonials_container"
        // install Swiper modules
      // modules={[ Pagination]}
      spaceBetween={40}
      slidesPerView={1}
      
      pagination={{ clickable: true }}
      
      
        >
       {
          data.map(({avatar,name,review},index) =>{
            return(
              <SwiperSlide  key={index}  className='testimonial'>
              <div className="client_avatar">
                <img src={avatar} alt="Avatar one" />
              </div>
              <h5 className='client_name'>{name}</h5>
                <small className='client_review'>
                    {review}
                </small>
                </SwiperSlide>
            )
          })
       }
            
          
        </Swiper>
        
       
    </section>
  )
}

export default Testimonials