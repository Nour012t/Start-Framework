import React from 'react'
import './Navbar.css'
import { Link, NavLink } from 'react-router-dom'
import Home from '../components/home/home'
import About from '../components/about/About'
import Protofolio from '../components/protofolio/Protofolio'
import Contact from '../components/contact/Contact'
function Navbar() {
  return (
  <>
  <nav className="navbar  navbar-expand-lg  ">
  <div className="container d-flex justify-content-between align-items-center">
    <Link className="navbar-brand fs-1 text-light fw-bolder" to=''>Start Framework    </Link>
   
    <div className="" id="navbarSupportedContent">
      <ul className="navbar-nav  mb-2 mb-lg-0">
        <li className="nav-item">
          <NavLink className="nav-link text-light fs-5 me-2 fw-bolder " aria-current="page" to='about'>About</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link text-light fs-5 me-2 fw-bolder" to='protofolio'>Protofolio</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link text-light fs-5 me-2 fw-bolder" to='contact'>Contact</NavLink>
        </li>
       
      </ul>
     
    </div>
  </div>
</nav>
  
  </>
  )
}

export default Navbar