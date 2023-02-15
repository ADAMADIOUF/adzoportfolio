import React from 'react'
import project1 from "../assets/project1.png"
import project2 from '../assets/project2.png'
import project3 from '../assets/project3.png'
import project4 from '../assets/project4.png'
import project5 from '../assets/project5.png'



const ProjectPage = () => {
  return (
    <section className='projects section-center' id='projects'>
      <div className='title'>
        <h3>projects</h3>
        <div className='underline'></div>
      </div>
      <div className='project-container'>
        <article>
          <img src={project1} alt='' />
        </article>
        <article>
          <h3>fashion website</h3>
          <p>
            Lorem ipsum dolor, sit amet Lorem ipsum dolor sit amet, consectetur
            adipisicing elit. Esse ipsa deleniti ullam amet nulla atque saepe
            inventore maxime commodi laudantium.
          </p>
          <button className='btn btn-project'>fashion</button>
        </article>
        <article>
          <img src={project2} alt='' />
        </article>
        <article>
          <h3>fashion website</h3>
          <p>
            Lorem ipsum dolor, sit amet Lorem ipsum dolor sit amet, consectetur
            adipisicing elit. Esse ipsa deleniti ullam amet nulla atque saepe
            inventore maxime commodi laudantium.
          </p>
          <button className='btn btn-project'>fashion</button>
        </article>
        <article>
          <img src={project3} alt='' />
        </article>
        <article>
          <h3>fashion website</h3>
          <p>
            Lorem ipsum dolor, sit amet Lorem ipsum dolor sit amet, consectetur
            adipisicing elit. Esse ipsa deleniti ullam amet nulla atque saepe
            inventore maxime commodi laudantium.
          </p>
          <button className='btn btn-project'>fashion</button>
        </article>
        <article>
          <img src={project4} alt='' />
        </article>
        <article>
          <h3>fashion website</h3>
          <p>
            Lorem ipsum dolor, sit amet Lorem ipsum dolor sit amet, consectetur
            adipisicing elit. Esse ipsa deleniti ullam amet nulla atque saepe
            inventore maxime commodi laudantium.
          </p>
          <button className='btn btn-project'>fashion</button>
        </article>
        <article>
          <img src={project5} alt='' />
        </article>
        <article>
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