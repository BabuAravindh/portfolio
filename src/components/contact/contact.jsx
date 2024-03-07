import React from 'react'
import './contact.css'
import {MdOutlineEmail} from  'react-icons/md'
import {RiMessengerLine} from  'react-icons/ri'
import {BsWhatsapp} from  'react-icons/bs'
const Contact = () => {
  return (
      <section id='contact'>
        <h5>Get In Touch</h5>
        <h2>Contact Us</h2>

        <div className="container contact_container">
          <div className="contact_options">
            <article className="contact_option">
              {/* <MdOutlineEmail className='contact_option-icons' /> */}
              <h4>Email</h4>
              <h5>BabuAravindh637@gmail.com</h5>
              <a href="mailto:BabuAravindh@gmail.com" target='_blank'>Send a Message</a>
            </article>
            <article className="contact_option">
              {/* <RiMessengerLine className='contact_option-icons' /> */}
              <h4>instagram</h4>
              <h5>Babu Aravindh</h5>
              <a href="https://instagram.com" target='_blank'>Send a Message</a>
            </article>
            <article className="contact_option">
              {/* <BsWhatsapp className='contact_option-icons'/> */}
              <h4>WhatApp</h4>
              <h5>91123456789</h5>
              <a href="https://api.whatsapp.com/sebd?phone=+91123456789" target='_blank'>Send a Message</a>
            </article>
          </div>
          {/* END OF CONTACT OPTIONS */}
          <form action="" autoComplete='off'>
            <input type="text" name='name' placeholder='Your Full Name' required />
            <input type="text"  name='email' placeholder='Your Email' required/>
            <textarea name='message' rows="7" placeholder='Your Message' required>

            </textarea>
            <button type='submit' className='btn btn-primary'>submit</button>
          </form>
        </div>
      </section>
  )
}

export default Contact