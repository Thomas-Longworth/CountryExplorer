import { createBrowserRouter, createRoutesFromElements, Route,  RouterProvider } from 'react-router-dom'
import Home from './pages/Home';
import CountryPage from './pages/CountryPage';
import Root from './layout/Root';



function App() {
	const router = createBrowserRouter(
		createRoutesFromElements(
			<Route path="/" element={<Root />}>
				<Route index element={<Home />} />
				<Route path="/country" element={<CountryPage />} />
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

