import React, { useEffect } from 'react'

import Footer from '../layout/Footer'
import {motion,useAnimate} from 'framer-motion'
import { useContext } from 'react'
import { CountryContext } from '../Contexts/CountryContext'
const Country = () => {
	const{countryData} = useContext(CountryContext)

	
	return (
		<>

			<div
			 className='container mt-3 px-2 '>
				<div className='row justify-content-center'>
					{
						countryData.length === 0 ? <div className='col min-vh-100'><h3>No countries to diplay yet</h3></div>
							:
							countryData.map((each, index) => {
								return (
									<>
										<motion.div 
										  initial={{ opacity: 0, scale: 0.5 }}
										  animate={{ opacity: 1, scale: 1 }}
										  transition={{
											duration: 0.8,
											delay: 0.5,
											ease: [0, 0.71, 0.2, 1.01]
										  }}
										
										

						
										 className='col-auto '>
											<div data-cy="country-name"  	key={each.name.official} class="card rounded" style={{ maxWidth: '18rem' }} >
												<img  class="card-img-top border-bottom "src={each.flags.png} alt="country flag" />
												<div 
												class="card-body">
													<h5  class="card-title font-italic"><strong>{each.name.official}</strong></h5>
												</div>
												<ul 	class="list-group list-group-flush">
													<li class="list-group-item type"><strong>Region:</strong>  {each.region}</li>
													<li class="list-group-item"><strong>Capital:</strong> {each.capital}</li>
													<li class="list-group-item type"><strong>Population:</strong> {each.population}</li>
													<li class="list-group-item"><strong>Area Tm^2:</strong> {each.area}</li>
												</ul>
											</div>
										</motion.div>
									</>
								)
							})}
				</div>
			</div>





		</>
	)
}

export default Country