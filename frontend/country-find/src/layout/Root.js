import React from 'react'
import { Outlet, createBrowserRouter, createRoutesFromElements, Route, Link, RouterProvider } from 'react-router-dom'
import Footer from './Footer'
const Root = () => {
    return (
        <>
       
            <nav class="navbar navbar-expand-lg navbar-light bg-light">
                <a class="navbar-brand"><Link to="/">LOGO</Link></a>
            
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>

                <div class="" >
                    <ul class="navbar-nav ml-auto">
                        <li class="nav-item">
                        <a class="nav-link" ><Link to="/">Home</Link></a>
                        </li>
                       
                        <li class="nav-item">
                            <a class="nav-link" ><Link to="/country">Country</Link></a>
                        </li>
                    </ul>
                </div>
            </nav>
            <Footer/>
            <div>
                <Outlet />
            </div>


        
        </>
    )
}

export default Root