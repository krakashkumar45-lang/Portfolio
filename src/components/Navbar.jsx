import React from 'react'
import { NavLink } from 'react-router-dom'
import { FiShoppingCart, FiPhone } from 'react-icons/fi'

const NavBar = () => {
  return (
    <header className="nav">
      <div className="nav-inner container">
        <div className="brand">
          <div className="logo" aria-hidden>🥛</div>
          <div>
            <div className="brand-name">Akash Yadav</div>
            <div className="brand-sub">Local Milkman • Fresh daily</div>
          </div>
        </div>

        <nav className="links">
          <NavLink to="/" className={({isActive})=> isActive ? 'active' : ''} end>Home</NavLink>
          <NavLink to="/about" className={({isActive})=> isActive ? 'active' : ''}>About</NavLink>
          <NavLink to="/services" className={({isActive})=> isActive ? 'active' : ''}>Services</NavLink>
          <NavLink to="/gallery" className={({isActive})=> isActive ? 'active' : ''}>Gallery</NavLink>
          <NavLink to="/contact" className={({isActive})=> isActive ? 'active' : ''}>Contact</NavLink>
          <a className="order-btn" href="/contact"><FiShoppingCart className="icon"/> Order Now</a>
          <a href="tel:+911234567890" style={{marginLeft:10}} title="Call"><FiPhone className="icon"/></a>
        </nav>
      </div>
    </header>
  )
}

export default NavBar
