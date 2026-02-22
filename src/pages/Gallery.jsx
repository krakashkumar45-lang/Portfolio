import React from 'react'

const Gallery = () => {
  const items = [
    {id:1, title:'Morning collection', desc:'Fresh from the farm'},
    {id:2, title:'Glass bottles', desc:'Reusable and eco-friendly'},
    {id:3, title:'Our delivery route', desc:'Daily rounds in the neighborhood'},
    {id:4, title:'Quality check', desc:'Hygiene and testing'},
    {id:5, title:'Bulk supply', desc:'For events and shops'},
    {id:6, title:'Happy customers', desc:'Smiles on delivery'},
  ]

  return (
    <section className="gallery">
      <h2>Gallery</h2>
      <p style={{color:'var(--muted)'}}>Snapshots from our daily work and the farms we partner with.</p>
      <div className="grid">
        {items.map(it=> (
          <div key={it.id} className="photo">
            <div className="photo-art" aria-hidden>🥛</div>
            <div className="photo-title">{it.title}</div>
            <div style={{color:'var(--muted)',fontSize:13}}>{it.desc}</div>
          </div>
        ))}
      </div>
      <div style={{marginTop:18}} className="panel">
        <h3>Our Farm Partners</h3>
        <p style={{color:'var(--muted)'}}>We work with small family farms — transparent sourcing and fair pay.</p>
      </div>
    </section>
  )
}

export default Gallery
