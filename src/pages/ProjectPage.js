import AOS from 'aos'
import 'aos/dist/aos.css'
import React, { useEffect } from 'react'
import zana from "../assets/f3.png"
import babel from '../assets/f2.png'

import worldbusiness from '../assets/f4.png'
import awagueye from '../assets/f5.png'
import landing from "../assets/f1.png"
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
      <div className='project-container section-center'>
        <article data-aos='fade-up'>
          <img src={landing} alt='Hotel' />
          <Link
            onClick={() =>
              handleClick(`https://landingpagehtmlcssjs.netlify.app/`)
            }
          >
            <span className='project-link'>
              https://landingpagehtmlcssjs.netlify.app/
            </span>
          </Link>
        </article>
        <article data-aos='fade-right'>
          <h3>Welcome to Our Hotel</h3>
          <p>
            Discover a luxurious retreat at our hotel. Nestled in a picturesque
            location, we offer you a world-class experience like no other.
            Whether you're traveling for business or leisure, our hotel is your
            home away from home. With stunning views, top-notch amenities, and
            exceptional service, your stay with us will be truly memorable.
          </p>
          <p>
            Our hotel features:
            <ul>
              <li>Spacious and comfortable rooms and suites</li>
              <li>On-site gourmet dining with a variety of cuisines</li>
              <li>Relaxing spa and wellness center</li>
              <li>Modern fitness facilities</li>
              <li>Conference and event spaces for all your needs</li>
            </ul>
          </p>
          <p>
            Whether you're looking for a romantic getaway, a family vacation, or
            a business conference, our hotel can cater to your requirements. Our
            friendly staff is dedicated to making your stay exceptional.
          </p>
          <p>
            Explore our website to see more details about our rooms, facilities,
            and special offers. We look forward to welcoming you to our
            hotel.HTML,CSS,JAVASCRIPT
          </p>
          <Link to='https://github.com/ADAMADIOUF/landingpage'>
            <span>
              <BsGithub />
            </span>
          </Link>

          <button
            className='btn btn-project'
            onClick={() =>
              handleClick(`https://landingpagehtmlcssjs.netlify.app/`)
            }
          >
            Demo
          </button>
        </article>

        <article data-aos='fade-up'>
          <img src={babel} alt='' />
          <Link onClick={() => handleClick(`https://babelshop.onrender.com/`)}>
            <span className='project-link'>babelshop.onrender.com</span>
          </Link>
        </article>
        <article data-aos='fade-right'>
          <h3>e-commerce website</h3>
          <p>
            Welcome to our state-of-the-art e-commerce website! We have created
            a cutting-edge platform that allows you to explore a vast range of
            products and enjoy a seamless shopping experience. Our website is
            built using the latest technologies, including the MERN stack
            (MongoDB, Express.js, React.js, and Node.js), ensuring high
            performance, security, and user satisfaction. Discover a wide
            selection of products across various categories, including clothing,
            mugs, air conditioners, tables, and chairs. Whether you're looking
            for trendy apparel, unique mugs, cooling solutions, or stylish
            furniture, we have you covered. Browse through our extensive
            clothing collection and find the latest fashion trends for men,
            women, and children. From casual wear to formal attire, our diverse
            range of clothing options caters to different styles, sizes, and
            occasions. Enjoy a seamless shopping experience as you explore
            detailed product descriptions, view high-quality images, and select
            the perfect clothing pieces for your wardrobe. Enhance your beverage
            experience with our exquisite collection of mugs. Choose from a
            variety of designs, colors, and materials to find the perfect mug
            that matches your personality and preferences. Whether you're a
            coffee lover, tea enthusiast, or hot chocolate connoisseur, our mugs
            are designed to elevate your drinking experience. Stay cool and
            comfortable with our top-of-the-line air conditioners. We offer a
            range of AC units that deliver optimal cooling performance for
            different room sizes and environments. Beat the heat and create a
            pleasant atmosphere in your home or office with our reliable air
            conditioning solutions. Complete your living space with our stylish
            and functional tables and chairs. Whether you need a dining table,
            study desk, or office chair, our furniture collection offers a wide
            array of options to suit your needs. Explore different designs,
            materials, and sizes to find the perfect pieces that match your
            style and enhance your interior decor. Our e-commerce website
            ensures a secure and hassle-free shopping experience. Enjoy features
            such as a user-friendly interface, intuitive search functionality,
            personalized recommendations, and a streamlined checkout process. We
            prioritize the security of your personal information and offer
            multiple secure payment options to ensure a smooth transaction.
            Customer satisfaction is our top priority, and we strive to provide
            excellent service at every step. Our dedicated support team is ready
            to assist you with any queries or concerns you may have, ensuring
            that your shopping experience exceeds your expectations. Start
            exploring our e-commerce website now and unlock a world of exciting
            products. Shop with confidence, knowing that you're accessing a
            reliable and feature-rich platform designed to make your online
            shopping experience enjoyable and convenient.
          </p>
          <p>MERN STACK using REACT-BOOTSTRAP FOR my styling</p>
          <Link to='https://github.com/ADAMADIOUF/babelshopfinal'>
            <span>
              <BsGithub />
            </span>
          </Link>

          <button
            className='btn btn-project'
            onClick={() => handleClick(`planete2.netlify.app/`)}
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
