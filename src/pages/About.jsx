import React from 'react'

const About = () => {
  return (
    <section className="about">
      <h2>About Akash</h2>
      <p>I've been delivering fresh milk to our neighborhood for over 6 years. I care about quality, reliability, and friendly service. My milk comes from small family-run farms and is handled with care from milking to delivery.</p>

      <div className="about-grid">
        <div className="panel">
          <h3>Our Promise</h3>
          <p>Freshness, honesty, and daily doorstep delivery. We test quality regularly and prioritize hygiene.</p>
        </div>
        <div className="panel">
          <h3>Pickup & Packaging</h3>
          <p>Reusable glass bottles available on request; doorstep pickup for empty bottles to reduce waste.</p>
        </div>
      </div>

      <div style={{marginTop:20}} className="panel">
        <h3>Why choose us?</h3>
        <ul>
          <li>Locally sourced from trusted farms</li>
          <li>Same-day distribution — minimal processing</li>
          <li>Flexible subscriptions and one-time orders</li>
        </ul>
      </div>

      <div style={{display:'flex',gap:12,marginTop:18}}>
        <div className="panel" style={{flex:1}}>
          <h3>Our Values</h3>
          <p>Community-first, sustainable, and transparent pricing — supporting local farmers is at the heart of what we do.</p>
        </div>
        <div className="panel" style={{width:220}}>
          <h3>Quick Facts</h3>
          <div style={{display:'flex',flexDirection:'column',gap:6}}>
            <div className="stat"><div className="num">6+</div><div style={{color:'var(--muted)'}}>Years</div></div>
            <div className="stat"><div className="num">200+</div><div style={{color:'var(--muted)'}}>Happy customers</div></div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
