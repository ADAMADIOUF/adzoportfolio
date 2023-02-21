import AOS from 'aos'
import 'aos/dist/aos.css'
import React, { useEffect } from 'react'
import project1 from '../assets/project1.png'
import project2 from '../assets/project2.png'
import project3 from '../assets/project3.png'
import project4 from '../assets/project4.png'
import project5 from '../assets/project5.png'

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
          <img src={project1} alt='' />
        </article>
        <article data-aos='fade-right'>
          <h3>fashion website</h3>
          <p>
            Lorem ipsum dolor, sit amet Lorem ipsum dolor sit amet, consectetur
            adipisicing elit. Esse ipsa deleniti ullam amet nulla atque saepe
            inventore maxime commodi laudantium.
          </p>
          <button className='btn btn-project'>fashion</button>
        </article>
        <article data-aos='fade-up'>
          <img src={project2} alt='' />
        </article>
        <article data-aos='fade-right'>
          <h3>fashion website</h3>
          <p>
            Lorem ipsum dolor, sit amet Lorem ipsum dolor sit amet, consectetur
            adipisicing elit. Esse ipsa deleniti ullam amet nulla atque saepe
            inventore maxime commodi laudantium.
          </p>
          <button className='btn btn-project'>fashion</button>
        </article>
        <article data-aos='fade-up'>
          <img src={project3} alt='' />
        </article>
        <article data-aos='fade-right'>
          <h3>fashion website</h3>
          <p>
            Lorem ipsum dolor, sit amet Lorem ipsum dolor sit amet, consectetur
            adipisicing elit. Esse ipsa deleniti ullam amet nulla atque saepe
            inventore maxime commodi laudantium.
          </p>
          <button className='btn btn-project'>fashion</button>
        </article>
        <article data-aos='fade-up'>
          <img src={project4} alt='' />
        </article>
        <article data-aos='fade-right'>
          <h3>fashion website</h3>
          <p>
            Lorem ipsum dolor, sit amet Lorem ipsum dolor sit amet, consectetur
            adipisicing elit. Esse ipsa deleniti ullam amet nulla atque saepe
            inventore maxime commodi laudantium.
          </p>
          <button className='btn btn-project'>fashion</button>
        </article>
        <article data-aos='fade-up'>
          <img src={project5} alt='' />
        </article>
        <article data-aos='fade-right'>
          <h3>fashion website</h3>
          <p>
            Lorem ipsum dolor, sit amet Lorem ipsum dolor sit amet, consectetur
            adipisicing elit. Esse ipsa deleniti ullam amet nulla atque saepe
            inventore maxime commodi laudantium.
          </p>
          <button className='btn btn-project'>fashion</button>
        </article>
      </div>
    </section>
  )
}

export default ProjectPage
