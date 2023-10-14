import React, { useRef, useState } from 'react'

import Country from './Country';
import { FaSearch } from 'react-icons/fa';

const CountryForm = () => {
	const [countryData, setCountryData] = useState([])
	const [country, setCountry] = useState("")
	const [status, setStatus] = useState("good")

	const [loading, setLoading] = useState(false)

	const fetchCountry = async () => {

		if (country === "") {
			setStatus("empty try again")
		}

		try {
			setLoading(true)
			const response = await fetch(`http://localhost:5000/countries/${country}`)
			if (!response.ok) {
				setStatus("country not found unfortuneatly please try again")
				throw new Error(`HTTP Error countries not found: ${response.status}`);
			}
			const data = await response.json()
			console.log(data)

			if (data.length > 0) {
				setCountryData(data)
				setStatus("Working country found")
			}



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
						className="form-control"
						value={country}
						type="text"
						onChange={(e) => setCountry(e.target.value)}
						placeholder='Enter Country Name Here'
					/>
					</div>
					
					<div className='col'>
					{loading?
						<div class="spinner-border text light" role="status">
							<span class="sr-only"></span>
						</div>
						:<div>
							<button disabled={loading} className='btn btn-primary' onClick={fetchCountry}><FaSearch /></button>
						</div>
				}
					</div>
				


				</div>


			</div>
			





			<Country countryData={countryData} />

		</>



	)
}

export default CountryForm