import React, { useState } from 'react'
import Button from 'react-bootstrap/Button';
import Country from './Country';
const CountryForm = () => {
	const [countryData, setCountryData] = useState([])
	const [country, setCountry] = useState("")
	const [status,setStatus] = useState("good")
	const [secondStatus,setSecondStatus] = useState("")


	const fetchCountry = async () => {
		if(country===""){
			setStatus("empty try again")
		}
		try {
			const response = await fetch(`http://localhost:5000/countries/${country}`)
			const data = await response.json()
			
			if(data.length>0){
				setCountryData(data)
			}

		} catch (error) {
			
			
		}
	}
	console.log(status)


	return (
		<>
		<h1>Status:{status}</h1>
		<h1>Second status:{secondStatus}</h1>



			<input
				value={country}
				type="text"
				onChange={(e) => setCountry(e.target.value)}
			/>

			<Button className='btn btn-danger' onClick={fetchCountry}>Find Country</Button>
			
			<Country countryData={countryData}/>
		</>
		


	)
}

export default CountryForm