import { Outlet, createBrowserRouter, createRoutesFromElements, Route, Link, RouterProvider } from 'react-router-dom'
import Home from './pages/Home';
import CountryDisplay from './pages/CountryDisplay';
import Root from './layout/Root';



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

