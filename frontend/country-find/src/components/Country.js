import React from 'react'



const Country = ({ countryData }) => {


	return (
		<>
			<div className='container'>
				<div className='row'>
					{
					countryData.length ===0?<h1>empty</h1>
					:
					
					countryData.map((each, index) => {
						return (
							<>
								<div key={index} className='col border'><h3>{each.name.official}</h3></div>
								<div className='col border'><h3>{each.population}</h3></div>
								<div className='col border'><h3>{each.capital}</h3></div>
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