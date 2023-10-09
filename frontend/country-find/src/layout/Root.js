import React from 'react'
import { Outlet, createBrowserRouter, createRoutesFromElements, Route, Link, RouterProvider } from 'react-router-dom'

const Root = () => {
  return (
    <>
			<div className="container-fluid bg-dark">
				<nav className="navbar navbar-expand-lg navbar-dark bg-dark">
				<Link to="/">Main</Link>

					<div className="collapse navbar-collapse" id="navbarSupportedContent">
						<ul className="navbar-nav mr-auto">
							<li className="nav-item ">
								<Link to="/">Home</Link>
							</li>

							<li className="nav-item">
								<Link to="/country">Country</Link>
							</li>

						</ul>


					</div>
				</nav>
			</div>
			<div>
				<Outlet />
			</div>



		</>
  )
}

export default Root