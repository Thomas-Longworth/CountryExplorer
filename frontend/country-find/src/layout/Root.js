import React from 'react'
import { Outlet, Link } from 'react-router-dom'
import Footer from './Footer'
import { FaGlobe } from 'react-icons/fa';
const Root = () => {
    return (
        <>
            <div className='container-fluid bg-dark'>
                <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
                    <Link class="navbar-brand" to="/" className='text-light'><h2><FaGlobe /></h2></Link>
                    <div class="" >
                        <ul class="navbar-nav ml-auto">
                            <li class="nav-item">
                                <Link className='nav-link' to="/">Home</Link>
                            </li>
                            <li class="nav-item">
                                <Link className='nav-link' to="/country">Country</Link>
                            </li>
                        </ul>
                    </div>
                </nav>
            </div>
            <div>
                <Outlet />
            </div>
            <Footer />

        </>
    )
}

export default Root