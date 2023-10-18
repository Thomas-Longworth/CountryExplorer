import React, { useRef, useContext, useState } from 'react'
import Country from './Country';
import { FaSearch } from 'react-icons/fa';
import { CountryContext } from '../Contexts/CountryContext'
const CountryForm = () => {
	const { countryData, setCountryData } = useContext(CountryContext)
	const { errorStatus, setErrorStatus } = useContext(CountryContext)
	const [country, setCountry] = useState("")
	const [loading, setLoading] = useState(false)

	const fetchCountry = async () => {
		if (country === "") {
			return setErrorStatus(true)
		}
		try {
			setLoading(true)
			const response = await fetch(`https://countryexplore-93cb737548b8.herokuapp.com/countries/${country}`)
			if (!response.ok) {
				setErrorStatus(true)
				throw new Error(`HTTP Error countries not found: ${response.status}`);
			}
			const data = await response.json()
			setCountryData(data)
			setErrorStatus(false)
		} catch (error) {
			console.log("An error occurred:", error);
		} finally {
			setLoading(false);
		}
	}
	const handleSubmit =(e)=>{
		e.preventDefault()
		fetchCountry()
	}

	return (
		<>
				<div className='container mt-4'>
			<div className='row'>
				<div className='col-md-6 offset-md-3'>
					<form onSubmit={handleSubmit}>
						<div className='d-flex align-items-center justify-content-between'>
							<input
								data-cy="input"
								className="form-control mr-2"
								style={{ flex: 1 }}
								value={country}
								type="text"
								onChange={(e) => setCountry(e.target.value)}
								placeholder="Enter country here"
							/>
							{loading ?
								<div className="spinner-border text-dark" role="status">
									<span className="sr-only"></span>
								</div>
								:
								<button data-cy="submit" disabled={loading} className='btn btn-primary'>
									<FaSearch />
								</button>
							}
						</div>

						<div className='bg-light text-danger mt-2'>
							{errorStatus && <h6 data-cy="error-message">Country not found or invalid input</h6>}
						</div>
					</form>
				</div>
			</div>
		</div>
		</>
	)
}

export default CountryForm