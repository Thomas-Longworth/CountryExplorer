import React from 'react'



const Country = ({ countryData }) => {
	return (
		<>
			<div className='container'>
				<div className='row'>
					{countryData && countryData.map((each) => {
						return (
							<>
								<div className='col border'><h3>{each.name.official}</h3></div>
								<div className='col border'><h3>{each.population}</h3></div>
								<div className='col border '><img src ={each.flags.png}/></div>
							</>
						)
					})}

				</div>
			</div>

		</>
	)
}

export default Country