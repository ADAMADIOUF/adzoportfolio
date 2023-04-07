import AOS from 'aos'
import 'aos/dist/aos.css'
import React, { useEffect } from 'react'
import html from '../assets/html.png'
import css from '../assets/css.png'
import boostrap from '../assets/boostrap.jpeg'
import jquery from '../assets/jquery.png'
import javascript from '../assets/javascript.png'
import world from '../assets/world.png'

import react from '../assets/react.png'
import next from '../assets/next.png'

import redux from '../assets/redux.png'
import tailwind from '../assets/tailwind.png'

import starapi from '../assets/strapi.png'
import airtable from '../assets/airtable.png'
import netlify from '../assets/netlify.png'
import canva from '../assets/t.png'
const SkillsPage = () => {
  useEffect(() => {
    AOS.init({
      offset: 200,
      duration: 1000,
      delay: 50,
      easing: 'ease-in-out',
    })
  }, [])
  return (
    <div className='skills section-center' id='skills'>
      <div className='title'>
        <h3 data-aos='fade-up'>skills</h3>
        <div className='underline' data-aos='fade-right'></div>
      </div>
      <div className='skills-container'>
        <article className='skill-content'>
          <h3 data-aos='fade-up'>
            I strive to become one of the best developers, and I'm currently
            making solid progress towards achieving that goal.
          </h3>
          <p data-aos='fade-right'>
            I constantly seek out new challenges to help me grow and improve.
            Ultimately, my aim is to become a skilled and innovative developer,
            collaborating with clients from all over the world.
          </p>
          <h3 data-aos='fade-up'>What Is My Goal</h3>
          <p data-aos='fade-right'>
            My future goal is to be a great and capable creative developer
            working with clients from around the world.
          </p>
        </article>
        <article className='skills-details'>
          <div className='skills-details-container'>
            <img src={html} alt='' />
            <img src={css} alt='' />
            <img src={boostrap} alt='' />
            <img src={jquery} alt='' />
            <img src={javascript} alt='' />
            <img src={world} alt='' />
            <img src={react} alt='' />
            <img src={next} alt='' />
            <img src={redux} alt='' />
            <img src={tailwind} alt='' />
            <img src={starapi} alt='' />
            <img src={airtable} alt='' />
            <img src={netlify} alt='' />
            <img src={canva} alt='' />
          </div>
        </article>
      </div>
    </div>
  )
}

export default SkillsPage
