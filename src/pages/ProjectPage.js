import AOS from 'aos'
import 'aos/dist/aos.css'
import React, { useEffect } from 'react'
import project1 from '../assets/lh.mp4'
import project2 from '../assets/ps.mp4'
import project3 from '../assets/wb.mp4'
import project4 from '../assets/rc.mp4'
import project5 from '../assets/lf.mp4'


import{BsGithub} from "react-icons/bs"
import { Link } from 'react-router-dom'
const ProjectPage = () => {
  useEffect(() => {
    AOS.init({
      offset: 200,
      duration: 1000,
      delay: 50,
      easing: 'ease-in-out',
    })
  }, [])
  return (
    <section className='projects section-center' id='projects'>
      <div className='title'>
        <h3 data-aos='fade-up'>projects</h3>
        <div className='underline' data-aos='fade-right'></div>
      </div>
      <div className='project-container'>
        <article data-aos='fade-up'>
          <video autoPlay loop muted poster='' onCanPlayThrough={() => {}}>
            <source src={project1} type='video/webm' />
          </video>
        </article>
        <article data-aos='fade-right'>
          <h3>landing page hotel</h3>
          <p>
            With a focus on simplicity and clean design, this landing page
            prioritizes user experience, making it easy for customers to find
            and book the room they need.
          </p>
          <p>REACT JS /REACT-BOOTSTRAP/ CSS</p>
          <a href='https://github.com/ADAMADIOUF/hotellandingpage.git'>
            <span>
              <BsGithub />
            </span>
          </a>
          <a href={'https://hotellandingpage1.netlify.app/ '}>
            <button className='btn btn-project'>demo</button>
          </a>
        </article>
        <article data-aos='fade-up'>
          <video autoPlay loop muted poster='' onCanPlayThrough={() => {}}>
            <source src={project2} type='video/webm' />
          </video>
        </article>
        <article data-aos='fade-right'>
          <h3>ZANA PARFUMERIE</h3>
          <p>
            A perfume website is an online platform that allows users to buy
            perfume for personal use.
          </p>
          <p>REACT JS / CSS/CONTEXT API</p>
          <a href='https://github.com/ADAMADIOUF/zanaparfumerie.git'>
            <span>
              <BsGithub />
            </span>
          </a>
          <a href={'https://zanaparfumerie.com/ '}>
            <button className='btn btn-project'>demo</button>
          </a>
        </article>
        <article data-aos='fade-up'>
          <video autoPlay loop muted poster='' onCanPlayThrough={() => {}}>
            <source src={project3} type='video/webm' />
          </video>
        </article>
        <article data-aos='fade-right'>
          <h3>phone store</h3>
          <p>
            World Business is an online phone store platform that allows users
            to place their orders quickly and easily via WhatsApp, with speedy
            delivery options.
          </p>
          <p>REACT JS / CSS/CONTEXT API/AIRTABLE/SERVERLESS NETLIFY</p>
          <a href='https://github.com/ADAMADIOUF/absaBoutique.git'>
            <span>
              <BsGithub />
            </span>
          </a>
          <a href={'https://worldbusinesssenegal.com/ '}>
            <button className='btn btn-project'>demo</button>
          </a>
        </article>

        <article data-aos='fade-up'>
          <video autoPlay loop muted poster='' onCanPlayThrough={() => {}}>
            <source src={project4} type='video/webm' />
          </video>
        </article>
        <article data-aos='fade-right'>
          <h3>accessories store</h3>
          <p>
            Rems' Clamour a store website is an online platform that allows
            users to buy perfume,shoes and make up for personal use.
          </p>
          <p>REACT JS / CSS/CONTEXT API/AIRTABLE/SERVERLESS NETLIFY</p>
          <a href='https://github.com/ADAMADIOUF/marieme.git'>
            <span>
              <BsGithub />
            </span>
          </a>
          <a href={'https://remsclamour.netlify.app/ '}>
            <button className='btn btn-project'>demo</button>
          </a>
        </article>
        <article data-aos='fade-up'>
          <video autoPlay loop muted poster='' onCanPlayThrough={() => {}}>
            <source src={project5} type='video/webm' />
          </video>
        </article>
        <article data-aos='fade-right'>
          <h3>lamp fall house</h3>
          <p>
            Lamp Fall House is a real estate agency that offers properties for
            rent or sale.
          </p>
          <p>REACT JS / CSS/CONTEXT API/AIRTABLE/SERVERLESS NETLIFY</p>
          <a href='https://github.com/ADAMADIOUF/lampfall.git'>
            <span>
              <BsGithub />
            </span>
          </a>
          <a href={'https://lampfallhouse.netlify.app/ '}>
            <button className='btn btn-project'>demo</button>
          </a>
        </article>
      </div>
    </section>
  )
}

export default ProjectPage
