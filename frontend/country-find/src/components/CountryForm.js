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
			const response = await fetch(`http://localhost:5000/countries/${country}`)
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

	return (
		<>
			<div className='container mt-4'>
				<div className='row'>
					<div className='col'>
						<input
							data-cy="input"
							className="form-control"
							value={country}
							type="text"
							onChange={(e) => setCountry(e.target.value)}
							
							placeholder="Enter country here"
							
						/>
						<div className='bg-light text-danger'>
						{errorStatus && <h6 data-cy="error-message">Country not found or invalid input</h6>}
						

						</div>
					
					</div>
					

					<div className='col'>
						{loading ?
							<div class="spinner-border text light" role="status">
								<span class="sr-only"></span>
							</div>
							: <div>
								<button data-cy="submit" disabled={loading} className='btn btn-primary' onClick={fetchCountry}><FaSearch /></button>
							</div>
						}
					</div>



				</div>


			</div>








		</>



	)
}

export default CountryForm