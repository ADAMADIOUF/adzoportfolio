import React from 'react'
import { FaTimes } from 'react-icons/fa'
import data from '../dataNav'
import { Link } from 'react-scroll'


const Sidebar = ({ isSidebarOpen, closeSidebar }) => {
  
  return (
    <aside className={`${isSidebarOpen ? 'sidebar show-sidebar' : 'sidebar'}`}>
      <div>
        <button type='button' className='btn-close' onClick={closeSidebar}>
          <FaTimes />
        </button>
        <ul className='sidebar-links'>
          {data.map((link) => {
            return (
              <li key={link.id}>
                <Link
                  to={link.text}
                  smooth={true}
                  offset={-430}
                  duration={500}
                  onClick={closeSidebar}
                >
                  {link.text}
                </Link>
              </li>
            )
          })}
        </ul>
      </div>
    </aside>
  )
}

export default Sidebar
