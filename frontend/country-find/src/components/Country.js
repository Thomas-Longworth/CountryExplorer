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
								<div key={index} className='col border'><h3>{each.name.official}</h3>
								<div className=' border'><h3>Population: {each.population}</h3></div>
								<div className=' border'><h3> Capital: {each.capital}</h3></div>
								
								</div>
								
								<div className='col border  '><img  className="img-fluid" src ={each.flags.png}/></div>
							</>
						)
					})}

				</div>
			</div>
			
			{countryData.length ===0?<h1>No Country to diplay yet</h1>
					:
					countryData[0].name.official
				}
		</>
	)
}

export default Country