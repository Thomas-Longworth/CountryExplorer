import React from 'react'

import Footer from '../layout/Footer'

const Country = ({ countryData }) => {


	return (
		<>

			<div className='container mt-3 px-2 '>
				<div className='row justify-content-center'>
					{
						countryData.length === 0 ? <div className='col min-vh-100'><h3>No countries to diplay yet</h3></div>
							:
							countryData.map((each, index) => {
								return (
									<>
										<div className='col-auto '>
											<div class="card rounded" style={{ maxWidth: '18rem' }} >
												<img  class="card-img-top border-bottom "src={each.flags.png} alt="country flag" />
												<div class="card-body">
													<h5 class="card-title font-italic"><strong>{each.name.official}</strong></h5>
												</div>
												<ul class="list-group list-group-flush">
													<li class="list-group-item"><strong>Region:</strong> {each.region}</li>
													<li class="list-group-item"><strong>Capital:</strong> {each.capital}</li>
													<li class="list-group-item"><strong>Population:</strong> {each.population}</li>
													<li class="list-group-item"><strong>Area Tm^2:</strong> {each.area}</li>
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