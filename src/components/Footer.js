import React from 'react'
import logo from "../assets/f2logo.png"
const Footer = () => {
  return (
    <div className='footer'>
      <div className='footer-content'>
        <img src={logo} alt='' />
        <h5>
          &copy;
          {new Date().getFullYear()}
          <span> Adama Diouf  </span>
        </h5>
        <h5> All rights reserved</h5>
      </div>
    </div>
  )
}

export default Footer