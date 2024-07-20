import React, { useRef } from 'react';
import emailjs from 'emailjs-com';
import './contact.css';
import { MdOutlineEmail } from 'react-icons/md';
import { RiMessengerLine } from 'react-icons/ri';
import { BsWhatsapp } from 'react-icons/bs';

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_sm08p8q', 'template_9a0hii6', form.current, '7ih0lCIDpw_nNYe6o')
      .then(
        () => {
          console.log('SUCCESS!');
          alert('Message sent successfully!');
        },
        (error) => {
          console.log('FAILED...', error.text);
          alert('Failed to send the message, please try again.');
        },
      );

    e.target.reset();
  };

  return (
    <section id='contact'>
      <h5>Get In Touch</h5>
      <h2>Contact Us</h2>

      <div className="container contact_container">
        <div className="contact_options">
          <article className="contact_option">
            <MdOutlineEmail className='contact_option-icons' />
            <h4>Email</h4>
            <h5>BabuAravindh637@gmail.com</h5>
            <a href="mailto:BabuAravindh637@gmail.com" target='_blank' rel='noopener noreferrer'>Send a Message</a>
          </article>
          <article className="contact_option">
            <RiMessengerLine className='contact_option-icons' />
            <h4>Instagram</h4>
            <h5>Babu Aravindh</h5>
            <a href="https://instagram.com" target='_blank' rel='noopener noreferrer'>Send a Message</a>
          </article>
          <article className="contact_option">
            <BsWhatsapp className='contact_option-icons' />
            <h4>WhatsApp</h4>
            <h5>91123456789</h5>
            <a href="https://api.whatsapp.com/send?phone=+91123456789" target='_blank' rel='noopener noreferrer'>Send a Message</a>
          </article>
        </div>
        {/* END OF CONTACT OPTIONS */}
        <form ref={form} onSubmit={sendEmail} autoComplete='off'>
          <label>Name</label>
          <input type="text" name="user_name" placeholder='Your Full Name' required />
          <label>Email</label>
          <input type="email" name="user_email" placeholder='Your Email' required />
          <label>Message</label>
          <textarea name="message" rows="7" placeholder='Your Message' required></textarea>
          <button type='submit' className='btn btn-primary'>Submit</button>
        </form>
      </div>
    </section>
  );
}

export default Contact;
