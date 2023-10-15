import React from 'react'
import CountryForm from '../components/CountryForm'
import Footer from '../layout/Footer'
import { useState } from 'react'
import { CountryContext } from '../Contexts/CountryContext'
import Country from '../components/Country'
const CountryPage = () => {
	const [countryData, setCountryData] = useState([])
	const [errorStatus, setErrorStatus] = useState(false)
	return (
		<>
			<CountryContext.Provider value={{countryData,setCountryData,errorStatus, setErrorStatus}}>
				<CountryForm />
				<Country />


			</CountryContext.Provider>




		</>
	)
}

export default CountryPage