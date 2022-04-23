import React from 'react'
import './Navbar.css'

const Navbar = () => {
  return (
    <div className='navbar-main-div'>
        <span className='link'>Home</span>
        <span className='link'>
            <a href='https://www.youtube.com/watch?v=m7OWXtbiXX8'>Documentation</a>
        </span>
        <span className='link'>
            <a href='https://www.youtube.com/watch?v=m7OWXtbiXX8'>Youtube</a>
        </span>
    </div>
  )
}

export default Navbar