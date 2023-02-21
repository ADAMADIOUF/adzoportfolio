import AOS from 'aos'
import 'aos/dist/aos.css'
import React, { useEffect } from 'react'
import about from '../assets/about1.png'
const AboutPage = () => {
  useEffect(() => {
    AOS.init({
      offset: 200,
      duration: 1000,
      delay: 50,
      easing: 'ease-in-out',
    })
  }, [])
  return (
    <section className='about section-center' id='about'>
      <div className='title'>
        <h3 data-aos='fade-up'>about me</h3>
        <div className='underline' data-aos='fade-right'></div>
      </div>
      <div className='about-me-container'>
        <article className='about-me-content'>
          <h3 data-aos='fade-up'>Hi,My Name Is Adama Diouf.</h3>
          <p data-aos='fade-right'>
            I started studying engineering in March 2020.Since then I have been
            learning a lot of things every day to further my skills.I like to
            learn and try new things.I am a big fan of learning programing while
            making productions. I am proud to say that I always work hard and do
            my best to live up to expectations people have for me.😎
          </p>
          <p data-aos='fade-up'>
            I am a <span> creative developer </span> who has a great passion for
            learning engineering.😎 currently I'm a freelancer.
          </p>
        </article>
        <article className='about-img' data-aos='fade-up'>
          <img src={about} alt='' />
          <div className='about-creative'>
            <h6>hard-working</h6>
            <h6>creative</h6>
            <h6>Passionate</h6>
            <h6>Motivated</h6>
            <h6>Reliable</h6>
            <h6>Productive</h6>
          </div>
        </article>
      </div>
    </section>
  )
}

export default AboutPage
