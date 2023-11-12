import React from 'react'
import hero from '../assets/240_F_553403777_lHnxCQB2VbjZTbwuOBwsTW8stkgEPmIJ.jpg'
import Products from './Products'


const Home = () => {
  return (
    <div className='hero mt-2'>

      <div className="card bg-dark text-black border-0">
        <img src={hero} className="card-img" alt="background" height="500px" />
        <div className="card-img-overlay d-flex flex-column justify-content-center">

          <div className='container'>

            <h5 className="card-title display-4 fw-bold mb-0">NEW PRODUCTS ARRIVALS</h5>
            <p className="card-text lead fs-2">CHECK OUT ALL THE TRANDES.</p>

          </div>
        </div>
      </div>
      <Products />


    </div>
  )
}

export default Home
