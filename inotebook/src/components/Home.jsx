import React from 'react'
import Card from './Card'

function Home({products}) {
  return (
    <>
    <div className="container">
        <div className="row">
            {
                products.map(products=>{
                    return(
                        <div key={products.id} className="col-md-3 mb-3">
                                 <Card products={products}/>
                        </div>
                    )
                })
            }
        </div>
    </div>
 
    </>
  )
}

export default Home
