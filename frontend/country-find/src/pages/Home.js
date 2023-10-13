import React from 'react'
import map from '../assets/images/map.png'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <>
      <div className='container mt-4'>
        <div className='row'>
          <div className='col'><h1>Welcome to CountryExplorer</h1>
          <p>Find out more about countries on the planet</p></div>
          <div className='col mt-2'>
          <button className='btn btn-danger'>
            <Link style={{ textDecoration: "none", color: 'black' }} to="/country" className=''>Search now</Link>

          </button>
            
            </div>
         
        </div>

      </div>


      <img src={map} class="img-fluid" alt="map of world outline" />
      
    </>

  )
}

export default Home