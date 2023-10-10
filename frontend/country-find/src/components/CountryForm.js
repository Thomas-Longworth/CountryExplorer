import React, { useState } from 'react'
import Button from 'react-bootstrap/Button';
import Country from './Country';
const CountryForm = () => {
	const [countryData, setCountryData] = useState([])
	const [country, setCountry] = useState("")
	const [status, setStatus] = useState("good")

	const[loadingForm, setLoadingForm] = useState(false)



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
	console.log(status)


	return (
		<>
			<h1>Status:{status}</h1>

			<div className='container'>
				<input
					value={country}
					type="text"
					onChange={(e) => setCountry(e.target.value)}
					placeholder='Enter Country Name Here'
				/>
				<Button disabled = {loadingForm}  className='btn btn-danger' onClick={fetchCountry}>Find</Button>


			</div>



			<Country countryData={countryData} />
		</>



	)
}

export default CountryForm