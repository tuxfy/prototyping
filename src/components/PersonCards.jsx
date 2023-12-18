import React, { useEffect, useState } from 'react'
import './PersonCards.scss'

export default function PersonCards() {
	const [data, setData] = useState('')
	const getData = async () => {
		//https://sampleapis.com/api-list/futurama
		const resp = await fetch('https://api.sampleapis.com/futurama/characters')
		const json = await resp.json()
		setData(json.splice(0, 11))
	}

	useEffect(() => {
		getData()
	}, [])

	return (
		<cs-app>
			<cs-title>Person Cards</cs-title>
			<cs-tiles>
				{data &&
					data.map((item, index) => (
						<>
							<input type="checkbox" id={index} />
							<cs-tile-container>
								<cs-tile>
									<label className="cs-open" htmlFor={index}></label>
									<label className="cs-close" htmlFor={index}>
										+
									</label>
									<cs-text>{item.name.first || item.name.last}</cs-text>
									<cs-content>
										<img src={item.images.main} alt={item.name.first} />
										<ul>
											<li>Species: {item.species}</li>
											<li>Gender: {item.gender}</li>
											<li>Home: {item.homePlanet}</li>
										</ul>
									</cs-content>
								</cs-tile>
							</cs-tile-container>
						</>
					))}
			</cs-tiles>
		</cs-app>
	)
}
