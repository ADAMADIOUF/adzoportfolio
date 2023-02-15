import React from 'react'
import { AiFillGithub, AiFillLinkedin, AiFillFacebook } from 'react-icons/ai'
import { BsBookHalf } from 'react-icons/bs'

const ContactPage = () => {
  return (
    <div className='contact' id='contact'>
      <div className='title title-contact'>
        <h3>contact</h3>
        <div className='underline'></div>
      </div>
      <form action='' className='form section-center'>
        <div>
          <h3>name</h3>
          <input
            type='text'
            placeholder='enter your name'
            className='input-form'
          />
        </div>
        <div>
          <h3>email</h3>
          <input
            type='email'
            placeholder='enter your email'
            className='input-form'
          />
        </div>
        <div>
          <h3>message</h3>
          <textarea
            name=''
            id=''
            cols='30'
            rows='10'
            className='input-form'
          ></textarea>
        </div>
        <button className='btn btn-form'>submit</button>
      </form>
      <div className='contact-lins'>
        <div>
          <span>
            <AiFillGithub />
          </span>
        </div>
        <div>
          <span>
            <AiFillLinkedin />
          </span>
        </div>
        <div>
          <span>
            <BsBookHalf />
          </span>
        </div>
        <div>
          <span>
            <AiFillFacebook />
          </span>
        </div>
      </div>
    </div>
  )
}

export default ContactPage