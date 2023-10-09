import { Outlet, createBrowserRouter, createRoutesFromElements, Route, Link, RouterProvider } from 'react-router-dom'
import Home from './pages/Home';
import CountryDisplay from './pages/CountryDisplay';



function App() {
	const router = createBrowserRouter(
		createRoutesFromElements(
			<Route path="/" element={<Root />}>
				<Route index element={<Home />} />
				<Route path="/country" element={<CountryDisplay />} />
			</Route>
		)
	)



	return (
		<div>
			<RouterProvider router={router} />

		</div>



	);
}

export default App;


const Root = () => {
	return (
		<>
			<div class="container-fluid dark">
				<nav className="navbar navbar-expand-lg navbar-dark dark">
					<a className="navbar-brand" href="#">PeakPerformance</a>

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
	);
};