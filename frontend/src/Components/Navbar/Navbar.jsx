import React from 'react'
import './Navbar.css'
import logo from '../Assets/logo.png'
const Navbar = () => {
  return (
    <div className='navbar'>
      <div className="logo">
        <img src={logo} alt="" />
      </div>
      <div className="icons">
        <i class="fa-solid fa-gear"></i>
        <i class="fa-regular fa-bell"></i>
      </div>
      <div className="btn1">
        <button>
          <i class="fa-solid fa-house"></i>
          Back to Home
        </button>
      </div>
    </div>
  )
}

export default Navbar
