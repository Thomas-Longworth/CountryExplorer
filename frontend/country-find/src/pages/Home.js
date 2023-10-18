import React from 'react'
import map from '../assets/images/map.png'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <>
      <div className='container m-4'>
        <div className='row'>
          <div className='col'><h1>Welcome to CountryExplorer</h1>
        </div>
          <div className='col mt-2'>
          <button className='btn btn-danger'>
            <Link data-cy="linked" style={{ textDecoration: "none", color: 'black' }} to="/country" className=''>Search Countries</Link>

          </button>
            
            </div>
         
        </div>

      </div>

      <img src={map} class="img-fluid" alt="map of world outline" />
      
    </>

  )
}

export default Home