import React, { useState } from 'react'
import Button from 'react-bootstrap/Button';
const CountryForm = () => {
	const [countryData, setCountryData] = useState([])
	const [country, setCountry] = useState("")
	console.log(countryData)

	const fetchCountry = async () => {
		try {
			const response = await fetch(`http://localhost:5000/countries/${country}`)
			const data = await response.json()
			setCountryData(data)


		} catch (error) {
			console.error(error.message)

		}
	}


	return (
		<>



			<input
				value={country}
				type="text"
				onChange={(e) => setCountry(e.target.value)}
			/>

			<Button className='btn btn-danger' onClick={fetchCountry}>Find Country</Button>
			{countryData && countryData.map((each) => {
				return (
					<h1>{each.name.common}</h1>

				)


			})}

		</>


	)
}

export default CountryForm