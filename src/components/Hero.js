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
            Hello, my name is <span> Adama Diouf ,</span> I am a front end
            developer. I was born in Senegal, West Africa. Currently, I am based
            in the United States, Minot, North Dakota.
          </p>
        </article>
      </div>
    </div>
  )
}

export default Hero
