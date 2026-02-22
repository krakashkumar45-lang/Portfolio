import React, { useState } from 'react'
import { FiMapPin, FiPhone } from 'react-icons/fi'

const Contact = () => {
  const [form, setForm] = useState({name:'', message:'', phone:''})

  function submit(e){
    e.preventDefault()
    alert(`Thanks ${form.name || 'friend'}! Your message was sent.`)
    setForm({name:'', message:'', phone:''})
  }

  return (
    <section className="contact">
      <h2>Contact</h2>
      <p>Reach out for subscriptions, bulk orders, or questions. Prefer a quick response? Call or WhatsApp.</p>

      <div className="contact-info">
        <div><FiPhone className="icon icon-muted"/> <strong>Phone:</strong> <a href="tel:+911234567890">+91 12345 67890</a></div>
        <div><strong>Hours:</strong> Mon–Sat 5:00–9:00 (morning deliveries)</div>
        <div><FiMapPin className="icon icon-muted"/> <strong>Address:</strong> Near Market Road, Your Town</div>
      </div>

      <form className="contact-form" onSubmit={submit}>
        <input placeholder="Your name" value={form.name} onChange={e=>setForm({...form, name: e.target.value})} />
        <input placeholder="Phone" value={form.phone} onChange={e=>setForm({...form, phone: e.target.value})} />
        <textarea placeholder="Message" value={form.message} onChange={e=>setForm({...form, message: e.target.value})} />
        <button className="btn-primary" type="submit">Send</button>
      </form>

      <div style={{marginTop:18}} className="panel">
        <h3>Visit the farm</h3>
        <p style={{color:'var(--muted)'}}>We organize small farm visits by appointment. See where your milk comes from.</p>
      </div>
    </section>
  )
}

export default Contact
