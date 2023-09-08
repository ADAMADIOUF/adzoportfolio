import AOS from 'aos'
import 'aos/dist/aos.css'
import React,{useEffect} from 'react'
import { Link } from 'react-scroll'
const Hero = () => {
  useEffect(() => {
    AOS.init({
      offset: 200,
      duration: 1000,
      delay: 50,
      easing: 'ease-in-out',
    })
  }, [])
  return (
    <div className='hero'>
      <div className='hero-content'>
        <article className='home-content'>
          <h3 data-aos='fade-up'>
            I keep <span className='home-animate'> on growing.</span>
          </h3>
          <p data-aos='fade-right'>
            Hello, I'm <span>Adama Diouf</span> , a skilled front-end developer
            with a passion for crafting exceptional digital experiences.
            Originally from Senegal, West Africa, I now call the United States
            my home. With a strong commitment to creating innovative and
            user-friendly web applications, I bring a unique blend of creativity
            and technical expertise to every project I undertake. Welcome to my
            digital portfolio, where I showcase my work and journey as a
            developer.
          </p>
        </article>
      </div>
    </div>
  )
}

export default Hero
