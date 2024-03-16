import React from 'react'
import './Header.css'

const Header = () => {
  return (
    <div className='header'>
        <div className='logo'>
            Portfolio
        </div>
        <ul className='header-menu'>
            <li><a href="/" alt="home_page">Home</a></li>
            <li><a href="/" alt="skills_page">Skills</a></li>
            <li><a href="/" alt="contact_page">Contact</a></li>
        </ul>


    </div>
  )
}

export default Header