import React from 'react'
import './about.css'
import Me from '../../assets/me1.png'
import {FaAward} from 'react-icons/fa'
import {FiUser} from 'react-icons/fi'
import {VscFolderLibrary} from 'react-icons/vsc'
const About = () => {
  return (
    <section id='about'>
        <h5>Get To Know</h5>
        <h2>About me</h2>
        <div className="container about_container">
          <div className="about_me">
<div className="about_me-image">
  <img src={Me} alt="me" />
</div>
          </div>
          <div className="about_content">
          <div className="about_cards">
            <article className='about_card'>
              <FaAward className='about_icons'/>
              <h5>Experience</h5>
              <small>3+ year Experience</small>
            </article>
            <article className='about_card'>
            <FiUser className='about_icons'/>
              <h5>Clients</h5>
              <small>200+ worldwide</small>
            </article>
            <article className='about_card'>
              <VscFolderLibrary className='about_icons'/>
              <h5>Project</h5>
              <small>80+ completed</small>
            </article>
          </div>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quisquam repellat dicta fuga consequatur numquam atque minus ipsum? Animi ullam excepturi harum qui optio aliquid consequatur velit similique. Ut, modi alias.
          </p>
          <a href="#contact" className='btn btn-primary'>Let's Talk</a>
          </div>
        </div>
    </section>
  )
}

export default About
