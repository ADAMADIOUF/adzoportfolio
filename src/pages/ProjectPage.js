import AOS from 'aos'
import 'aos/dist/aos.css'
import React, { useEffect } from 'react'
import zana from "../assets/zana.png"
import planete from '../assets/planete.png'
import rems from '../assets/rems.jpg.png'
import worldbusiness from '../assets/worldbusiness.png'
import awagueye from '../assets/awagueye.png'

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
  const handleClick =(link)=>{
    window.open(link,`_blank`)
  }
  return (
    <section className='projects section-center' id='projects'>
      <div className='title'>
        <h3 data-aos='fade-up'>projects</h3>
        <div className='underline' data-aos='fade-right'></div>
      </div>
      <div className='project-container'>
        <article data-aos='fade-up'>
          <img src={planete} alt='' />
          <Link onClick={() => handleClick(`https://planete2.netlify.app/`)}>
            <span className='project-link'>planete2.netlify.app</span>
          </Link>
        </article>
        <article data-aos='fade-right'>
          <h3>gym/fitness exercise</h3>
          <p>
            Designed to empower fitness enthusiasts, our gym/fitness exercise
            website built with React.js, CSS, and utilizing the Context API
            offers a comprehensive platform for individuals seeking to achieve
            their fitness goals. With a sleek and modern design, our website
            provides a user-friendly interface, ensuring seamless navigation and
            effortless access to a wide range of exercise resources. Discover a
            wealth of fitness exercises, tailored workout routines, and expert
            guidance to support your fitness journey. Leveraging the power of
            APIs through Rapid API integration, our website offers real-time
            access to exercise data, allowing users to explore a vast library of
            exercises, target specific muscle groups, and access detailed
            equipment requirements. The intuitive layout of our website enables
            users to effortlessly search for exercises, filter by difficulty
            level or equipment, and explore detailed instructions and visual
            demonstrations for each exercise. The Context API provides a
            seamless data management solution, ensuring efficient and reliable
            access to exercise information across the website.
          </p>
          <p>REACT JS /API via RApid api/ CSS/CONTEXT API</p>
          <Link to='https://github.com/ADAMADIOUF/gym2'>
            <span>
              <BsGithub />
            </span>
          </Link>

          <button
            className='btn btn-project'
            onClick={() => handleClick(`https://planete2.netlify.app/`)}
          >
            demo
          </button>
        </article>
        <article data-aos='fade-up'>
          <img src={rems} alt='' />
          <Link onClick={() => handleClick(`https://annaparfum.onrender.com/`)}>
            <span className='project-link'>
              https://annaparfum.onrender.com/
            </span>
          </Link>
        </article>
        <article data-aos='fade-right'>
          <h3>Perfume Website</h3>
          <p>
            A perfume website is an online platform that allows users to buy
            perfume for personal use. At our perfume website, we strive to bring
            you a wide selection of exquisite fragrances that cater to different
            tastes and preferences. We understand that choosing the perfect
            scent is a personal and intimate experience, and our platform is
            designed to provide you with a seamless and convenient shopping
            journey. Browse through our carefully curated collection of
            perfumes, ranging from timeless classics to unique and niche
            creations. Our website offers detailed product descriptions,
            including notes, accords, and customer reviews, empowering you to
            make informed decisions. With our secure online platform, you can
            confidently shop for your favorite fragrances, whether you're
            seeking a signature scent or exploring new olfactory sensations.
            Immerse yourself in the world of perfumes and discover the art of
            scent as you create a personal collection that reflects your unique
            style and personality.
          </p>
          <p>
            REACT JS /REACT-BOOTSTRAP/ CSS/CONTEXT API/MONGO DB/EXPRESS/NODE JS
          </p>
          <Link to='https://github.com/ADAMADIOUF/anaparfum'>
            <span>
              <BsGithub />
            </span>
          </Link>

          <button
            className='btn btn-project'
            onClick={() => handleClick(`https://annaparfum.onrender.com/`)}
          >
            demo
          </button>
        </article>
        <article data-aos='fade-up'>
          <img src={zana} alt='' />
          <Link onClick={() => handleClick(`http://zanaparfumerie.com`)}>
            <span className='project-link'>zanaparfumerie.com</span>
          </Link>
        </article>
        <article data-aos='fade-right'>
          <h3>ZANA PARFUMERIE</h3>
          <p>
            A perfume website is an online platform that allows users to buy
            perfume for personal use. At our perfume website, we strive to bring
            you a wide selection of exquisite fragrances that cater to different
            tastes and preferences. We understand that choosing the perfect
            scent is a personal and intimate experience, and our platform is
            designed to provide you with a seamless and convenient shopping
            journey. Browse through our carefully curated collection of
            perfumes, ranging from timeless classics to unique and niche
            creations. Our website offers detailed product descriptions,
            including notes, accords, and customer reviews, empowering you to
            make informed decisions. With our secure online platform, you can
            confidently shop for your favorite fragrances, whether you're
            seeking a signature scent or exploring new olfactory sensations.
            Immerse yourself in the world of perfumes and discover the art of
            scent as you create a personal collection that reflects your unique
            style and personality.
          </p>
          <p>REACT JS / CSS/CONTEXT API/AIRTABLE FOR THE BACK END</p>
          <Link to='https://github.com/ADAMADIOUF/zanaparfumerie.git'>
            <span>
              <BsGithub />
            </span>
          </Link>

          <button
            className='btn btn-project'
            onClick={() => handleClick(`http://zanaparfumerie.com`)}
          >
            demo
          </button>
        </article>
        <article data-aos='fade-up'>
          <img src={worldbusiness} alt='' />
          <Link onClick={() => handleClick(`http://worldbusinesssenegal.com`)}>
            <span className='project-link'>worldbusinesssenegal.com</span>
          </Link>
        </article>
        <article data-aos='fade-right'>
          <h3>phone store</h3>
          <p>
            World Business is an online phone store platform that allows users
            to place their orders quickly and easily via WhatsApp, with speedy
            delivery options. We understand the importance of seamless and
            efficient shopping experiences, especially when it comes to
            purchasing smartphones. Our platform is designed to provide a
            streamlined process, where users can browse through a wide selection
            of the latest smartphones, compare features and specifications, and
            simply place their orders through WhatsApp. With our dedicated and
            responsive customer support team, you can receive personalized
            assistance and guidance throughout your shopping journey. We
            prioritize speedy delivery options, ensuring that your desired phone
            reaches your doorstep in the shortest possible time. At World
            Business, we strive to make your phone shopping experience
            hassle-free and convenient, putting the power of choice and
            accessibility right at your fingertips.
          </p>
          <p>REACT JS / CSS/REDUX /AIRTABLE/SERVERLESS NETLIFY</p>
          <Link to='https://github.com/ADAMADIOUF/phonestore'>
            <span>
              <BsGithub />
            </span>
          </Link>

          <button
            className='btn btn-project'
            onClick={() => handleClick(`http://worldbusinesssenegal.com`)}
          >
            demo
          </button>
        </article>

        <article data-aos='fade-up'>
          <img src={awagueye} alt='' />
          <Link onClick={() => handleClick(`http://awagueyecouture.com`)}>
            <span className='project-link'>awagueyecouture.com</span>
          </Link>
        </article>
        <article data-aos='fade-right'>
          <h3>clothing store</h3>
          <p>
            Our clothing store is an online platform that offers a diverse range
            of stylish apparel for fashion enthusiasts. We understand the
            importance of finding the perfect clothing that reflects your
            personal style and makes you feel confident. Our online store
            provides a seamless shopping experience, allowing you to browse
            through a carefully curated collection of trendy and high-quality
            clothing items. From casual wear to formal attire, we have something
            for every occasion and preference. With detailed product
            descriptions, size guides, and customer reviews, we strive to ensure
            that you make informed decisions and find the perfect fit. We
            prioritize customer satisfaction and provide excellent customer
            service, including hassle-free returns and exchanges. Discover the
            latest fashion trends, express your individuality, and elevate your
            wardrobe with our clothing store.
          </p>
          <p>REACT JS / CSS/REDUX/AIRTABLE/SERVERLESS NETLIFY</p>
          <Link to='https://github.com/ADAMADIOUF/cheikhmbaye'>
            <span>
              <BsGithub />
            </span>
          </Link>

          <button
            className='btn btn-project'
            onClick={() => handleClick(`http://awagueyecouture.com`)}
          >
            demo
          </button>
        </article>
      </div>
    </section>
  )
}

export default ProjectPage
