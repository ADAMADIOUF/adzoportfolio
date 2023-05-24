import AOS from 'aos'
import 'aos/dist/aos.css'
import React, { useEffect } from 'react'
import project1 from '../assets/lh.mp4'
import project2 from '../assets/ps.mp4'
import project3 from '../assets/wb.mp4'
import project4 from '../assets/aw.mp4'
import project5 from '../assets/dieuf.mp4'


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
            and book the room they need. Our intuitive interface allows users to
            navigate seamlessly through the website, effortlessly browsing
            different room options, amenities, and availability. The carefully
            crafted layout and user-friendly features ensure a hassle-free
            booking experience, where customers can quickly search for their
            desired dates, view real-time availability, and make secure
            reservations with confidence. We understand the importance of a
            streamlined process, and our landing page is designed to provide a
            seamless and efficient experience for all users, whether they are
            frequent travelers or first-time visitors. Discover the simplicity
            and convenience of booking your ideal room with ease on our
            user-centric landing page."
          </p>
          <p>REACT JS /REACT-BOOTSTRAP/ CSS/CONTEXT API</p>
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
          <a href='https://github.com/ADAMADIOUF/phonestore'>
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
          <a href='https://github.com/ADAMADIOUF/cheikhmbaye'>
            <span>
              <BsGithub />
            </span>
          </a>
          <a href={'https://awagueyecouture.com/ '}>
            <button className='btn btn-project'>demo</button>
          </a>
        </article>
        <article data-aos='fade-up'>
          <video autoPlay loop muted poster='' onCanPlayThrough={() => {}}>
            <source src={project5} type='video/webm' />
          </video>
        </article>
        <article data-aos='fade-right'>
          <h3>Online clothing</h3>
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
          <p>REACT JS / CSS/CONTEXT API/AIRTABLE/SERVERLESS NETLIFY</p>
          <a href='https://github.com/ADAMADIOUF/tailleur1'>
            <span>
              <BsGithub />
            </span>
          </a>
          <a href={'https://dieufdieul1.netlify.app/ '}>
            <button className='btn btn-project'>demo</button>
          </a>
        </article>
      </div>
    </section>
  )
}

export default ProjectPage
