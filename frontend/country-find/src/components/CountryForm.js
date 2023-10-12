import React, { useState } from 'react'

import Country from './Country';
import { FaSearch } from 'react-icons/fa';

const CountryForm = () => {
	const [countryData, setCountryData] = useState([])
	const [country, setCountry] = useState("")
	const [status, setStatus] = useState("good")

	const [loadingForm, setLoadingForm] = useState(false)



	const fetchCountry = async () => {
		if (country === "") {
			setStatus("empty try again")
		}
		try {
			setLoadingForm(true)
			const response = await fetch(`http://localhost:5000/countries/${country}`)
			const data = await response.json()

			if (data.length > 0) {
				setCountryData(data)
			}


		} catch (error) {


		}
		setLoadingForm(false)
	}



	return (
		<>

			
			
				<div className="input-group mb-3 ">
				<input 
				className="form-control" 
						value={country}
						type="text"
						onChange={(e) => setCountry(e.target.value)}
						placeholder='Enter Country Name Here'
					/>
						<div className="input-group-append">
						<button disabled={loadingForm} className='btn btn-outline-secondary' onClick={fetchCountry}><FaSearch /></button>
						</div>
				</div>


		
			

			<Country countryData={countryData} />

		</>



	)
}

export default CountryForm