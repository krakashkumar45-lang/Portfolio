import React from 'react'
import { FiTag, FiCalendar, FiUsers } from 'react-icons/fi'

const Services = () => {
  const plans = [
    {title: 'Daily', desc: 'Daily morning delivery, pay weekly or monthly', price: '₹30/day'},
    {title: 'Alternate Day', desc: 'Delivery every other day', price: '₹17/day'},
    {title: 'Bulk Order', desc: 'Large orders for events or shops', price: 'Contact for pricing'},
  ]

  return (
    <section className="services">
      <h2>Services & Plans</h2>
      <div className="plans">
        {plans.map(p=> (
          <div key={p.title} className="plan">
            <h3>{p.title}</h3>
            <p>{p.desc}</p>
            <ul>
              <li>Pure milk from local farms</li>
              <li>Flexible payment options (cash/UPI)</li>
              <li>Reusable bottles supported</li>
            </ul>
            <div className="price">{p.price}</div>
            <button className="btn-primary">Choose</button>
          </div>
        ))}
      </div>

      <div style={{marginTop:20}} className="panel">
        <h3>FAQ</h3>
        <p><strong>Do you deliver every day?</strong> — Yes, daily plan customers get morning delivery. Alternate-day and bulk plans follow their schedule.</p>
        <p><strong>Can I pause my subscription?</strong> — Yes, contact us with at least 2 days notice.</p>
      </div>
    </section>
  )
}

export default Services
