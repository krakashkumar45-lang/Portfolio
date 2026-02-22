import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import { FiShoppingCart, FiPhone, FiMenu, FiX } from 'react-icons/fi'

const NavBar = () => {
  const [open, setOpen] = useState(false)

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
          <NavLink to="/" className={({isActive})=> isActive ? 'active' : ''} end onClick={()=>setOpen(false)}>Home</NavLink>
          <NavLink to="/about" className={({isActive})=> isActive ? 'active' : ''} onClick={()=>setOpen(false)}>About</NavLink>
          <NavLink to="/services" className={({isActive})=> isActive ? 'active' : ''} onClick={()=>setOpen(false)}>Services</NavLink>
          <NavLink to="/gallery" className={({isActive})=> isActive ? 'active' : ''} onClick={()=>setOpen(false)}>Gallery</NavLink>
          <NavLink to="/contact" className={({isActive})=> isActive ? 'active' : ''} onClick={()=>setOpen(false)}>Contact</NavLink>
          <a className="order-btn" href="/contact" onClick={()=>setOpen(false)}><FiShoppingCart className="icon"/> Order Now</a>
          <a href="tel:+911234567890" style={{marginLeft:10}} title="Call"><FiPhone className="icon"/></a>
        </nav>

        <button className="mobile-toggle" aria-label="Toggle menu" aria-expanded={open} onClick={()=>setOpen(v=>!v)}>
          {open ? <FiX className="icon"/> : <FiMenu className="icon"/>}
        </button>
      </div>

      <div className={"mobile-menu" + (open ? ' open' : '')} role="menu">
        <NavLink to="/" className={({isActive})=> isActive ? 'active' : ''} end onClick={()=>setOpen(false)}>Home</NavLink>
        <NavLink to="/about" className={({isActive})=> isActive ? 'active' : ''} onClick={()=>setOpen(false)}>About</NavLink>
        <NavLink to="/services" className={({isActive})=> isActive ? 'active' : ''} onClick={()=>setOpen(false)}>Services</NavLink>
        <NavLink to="/gallery" className={({isActive})=> isActive ? 'active' : ''} onClick={()=>setOpen(false)}>Gallery</NavLink>
        <NavLink to="/contact" className={({isActive})=> isActive ? 'active' : ''} onClick={()=>setOpen(false)}>Contact</NavLink>
        <a className="order-btn" href="/contact" onClick={()=>setOpen(false)}><FiShoppingCart className="icon"/> Order Now</a>
      </div>
    </header>
  )
}

export default NavBar
