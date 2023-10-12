import React from 'react'

import Footer from '../layout/Footer'

const Country = ({ countryData }) => {


	return (
		<>
		
		<div className='container px-3 '>
		<div className='row'>
			{
				countryData.length === 0 ? <div className='col min-vh-100'><h1>No countries to diplay yet</h1></div>
					:

					countryData.map((each, index) => {
						return (
							<>
							

								
								<div className='col'>
									<div class="card " style={{ maxWidth: '18rem' }} >
										<img class="card-img-top" src={each.flags.png} alt="country flag"/>
											<div class="card-body">
												<h5 class="card-title">{each.name.official}</h5>
												
											</div>
											
											<ul class="list-group list-group-flush">
												<li class="list-group-item"><strong>Region:</strong> {each.region}</li>
												<li class="list-group-item"><strong>Capital:</strong> {each.capital}</li>
												<li class="list-group-item"><strong>Population:</strong> {each.population}</li>
											</ul>
											
									</div>
								</div>
							</>
						)
					})}

		</div>
	</div>
		
		
			
			
			
		</>
	)
}

export default Country