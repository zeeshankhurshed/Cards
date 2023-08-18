import React from 'react'

function Card({products}) {
  return (
    <div className="card" >
  <img src={products.image} style={{height:"85vh"}} className="card-img-top" alt="..."/>
  <div className="card-body">
     <h6 className="card-title">{products.title.slice(0,20)}...</h6>
    <p className="card-text">{products.description.slice(0,80)}...</p>
    <div className='d-flex justify-content-between align-items-center mb-3'>
    <h5 className="card-text">{products.category}</h5>
    <p className="card-text">Price:${products.price}</p>
    </div>
    <div className='d-flex justify-content-between align-items-center'>
       <p className="card-text">rate:{products.rating.rate}</p>
    <p className="card-text">Count:{products.rating.count}</p>
    </div>
      <a href="/" className="btn btn-primary">Go somewhere</a>
  </div>
</div>
  )
}

export default Card
