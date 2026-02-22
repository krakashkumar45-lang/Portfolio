import React from 'react'
import { FiPhone, FiMail } from 'react-icons/fi'

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container footer-inner">
        <div>
          <div style={{fontWeight:700}}>Akash Yadav</div>
          <div style={{fontSize:13,color:'var(--muted)'}}>Fresh milk delivered daily • Local farms</div>
          <div style={{marginTop:8,fontSize:13,color:'var(--muted)'}}>Address: Near Market Road, Your Town</div>
        </div>
        <div style={{textAlign:'right'}}>
          <div className="stat"><div className="num">6+</div><div style={{color:'var(--muted)',fontSize:13}}>Years serving</div></div>
          <div style={{marginTop:8,color:'var(--muted)'}}><FiPhone className="icon icon-muted"/> <a href="tel:+911234567890">+91 12345 67890</a></div>
          <div style={{marginTop:8,color:'var(--muted)'}}><FiMail className="icon icon-muted"/> <a href="mailto:akash@example.com">akash@example.com</a></div>
          <div style={{marginTop:8}}>Follow: <a href="#">Facebook</a> • <a href="#">WhatsApp</a></div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
