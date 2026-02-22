import React, { useState, useEffect } from 'react'
import { FiTruck, FiStar, FiRepeat } from 'react-icons/fi'

const Home = () => {
  const [subscribed, setSubscribed] = useState(false)
  const [email, setEmail] = useState('')
  const [quickOrder, setQuickOrder] = useState({plan: 'Daily', qty: 1})
  const [testIndex, setTestIndex] = useState(0)

  const testimonials = [
    {name: 'Sunita', text: 'Akash delivers fresh milk every morning — very reliable.'},
    {name: 'Ramesh', text: 'Great taste and friendly service. Love the glass bottles option.'},
    {name: 'Priya', text: 'Quick responses and flexible timings. Highly recommended!'},
  ]

  function handleSubscribe(e) {
    e.preventDefault()
    if (!email) return alert('Please enter your email')
    setSubscribed(true)
  }

  function placeQuickOrder(e){
    e.preventDefault()
    alert(`Order placed: ${quickOrder.qty} x ${quickOrder.plan} milk(s). Akash will call to confirm.`)
  }

  useEffect(()=>{
    const t = setInterval(()=> setTestIndex(i=> (i+1) % testimonials.length), 4000)
    return ()=> clearInterval(t)
  },[])

  return (
    <section className="home">
      <div className="hero">
        <div className="hero-left">
          <h1>Fresh milk delivered daily — straight from local farms</h1>
          <p className="lead">Hi, I'm <strong>Akash Yadav</strong> — your neighborhood milkman. Pure, full-cream milk delivered every morning.</p>

          <div className="hero-ctas">
            <a className="btn-primary" href="/services"><FiStar className="icon"/> View Plans</a>
            <button className="btn-ghost" onClick={()=> document.getElementById('quick-order')?.scrollIntoView({behavior:'smooth'})}><FiTruck className="icon"/> Quick Order</button>
          </div>

          <form className="subscribe" onSubmit={handleSubscribe} aria-label="subscribe">
            <input value={email} onChange={e=>setEmail(e.target.value)} placeholder="Your email for updates" />
            <button type="submit">{subscribed ? 'Subscribed' : 'Subscribe'}</button>
          </form>

          <div className="testimonial">
            <div className="quote">“{testimonials[testIndex].text}”</div>
            <div className="who">— {testimonials[testIndex].name}</div>
          </div>
        </div>

        <div className="hero-art">
          <div className="milk-bottle" aria-hidden>🥛</div>
          <div className="badge">Fresh • Local • Trusted</div>
        </div>
      </div>

      <div className="features">
        <div className="card">
          <h3><FiTruck className="icon"/> Daily Delivery</h3>
          <p>Morning deliveries with flexible timings — choose your window.</p>
        </div>
        <div className="card">
          <h3><FiStar className="icon"/> Farm-Fresh</h3>
          <p>Milk sourced from trusted local farms within 24 hours of milking.</p>
        </div>
        <div className="card">
          <h3><FiRepeat className="icon"/> Reusable Bottles</h3>
          <p>Eco-friendly glass bottles available on request — we pick up empties.</p>
        </div>
      </div>

      <div id="quick-order" className="quick-order">
        <h3>Quick Order</h3>
        <form onSubmit={placeQuickOrder} className="quick-order-form">
          <label>
            Plan
            <select value={quickOrder.plan} onChange={e=>setQuickOrder({...quickOrder, plan: e.target.value})}>
              <option>Daily</option>
              <option>Alternate Day</option>
              <option>Bulk Order</option>
            </select>
          </label>
          <label>
            Quantity
            <input type="number" min="1" value={quickOrder.qty} onChange={e=>setQuickOrder({...quickOrder, qty: Number(e.target.value)})} />
          </label>
          <button className="btn-primary" type="submit">Place Order</button>
        </form>
      </div>
    </section>
  )
}

export default Home
