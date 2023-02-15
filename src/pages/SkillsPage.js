import React from 'react'
import html from "../assets/html.png"
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
import canva from "../assets/t.png"
const SkillsPage = () => {
  return (
    <div className='skills section-center' id='skills'>
      <div className='title'>
        <h3>skills</h3>
        <div className='underline'></div>
      </div>
      <div className='skills-container'>
        <article className='skill-content'>
          <h3>I Am On My Way To Be One Of The Best Developers</h3>
          <p>
            Now I am making solid progress to be a good developer.I am always
            looking for new challenges.I keep on growing.
          </p>
          <h3>What Is My Goal</h3>
          <p>
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