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
          <div className="about_content">
          
          <p>
          I am a passionate Full Stack Developer with a strong interest in both front-end and back-end development. 
              Although I have zero professional experience, I have gained valuable skills through personal projects and self-learning. 
              I am eager to apply my knowledge and grow in a professional setting.
          </p>
          <a href="#contact" className='btn btn-primary'>Let's Talk</a>
          </div>
        </div>
    </section>
  )
}

export default About