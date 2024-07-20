import React from 'react'
import './portfolio.css'
import IMG1 from '../../assets/portfolio1.png'
import IMG2 from '../../assets/porfolio2.png'
import IMG3 from '../../assets/porfolio3.png'
import IMG4 from '../../assets/porfolio4.png'
import IMG5 from '../../assets/portfolio5.png'
import IMG6 from '../../assets/portfolio6.jpg'

const Portfolio = () => {
  return (
   <section id='portfolio'>
    <h5>My Recent Work</h5>
    <h2>my projects</h2>
    <div className="container portfolio_container">
      <article className="portfolio_item">
        <div className="portfolio_tem-image">
            <img src={IMG1} alt="" />
        </div>
          <h3>COLLEGE-WEBSITE</h3>
          <div className="porfolio_item-cta">
          <a href="https://github.com" className='btn'>Github</a>
          <a href="https://github.com" className='btn btn-primary'>Live Demo</a>
          </div>
          
      </article>
      <article className="portfolio_item">
        <div className="portfolio_item-image">
            <img src={IMG2} alt="" />
        </div>
          <h3>CHAT-APPLICATION</h3>
          <div className="porfolio_item-cta">
          <a href="https://github.com" className='btn'>Github</a>
          <a href="https://github.com" className='btn btn-primary'>Live Demo</a>
          </div>
          
      </article>
      <article className="portfolio_item">
        <div className="portfolio_tem-image">
            <img src={IMG3} alt="" />
        </div>
          <h3>Front End Gym React Website</h3>
          <div className="porfolio_item-cta">
          <a href="https://github.com" className='btn'>Github</a>
          <a href="https://babuaravindh.github.io/react-gym-website/" className='btn btn-primary'>Live Demo</a>
          </div>
          
      </article>
      <article className="portfolio_item">
        <div className="portfolio_tem-image">
            <img src={IMG4} alt="" />
        </div>
          <h3>Travelix Website</h3>
          <div className="porfolio_item-cta">
          <a href="https://github.com" className='btn'>Github</a>
          <a href="#" className='btn btn-primary'>Live Demo</a>
          </div>
          
      </article>
    
      
    
    </div>
   </section>
  )
}

export default Portfolio