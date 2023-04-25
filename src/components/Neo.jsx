import axios from "axios"
import { useState, useEffect } from "react"

function Neo() {
	const [neo, setNeo] = useState()

	const apiKEY = "8AQvwvmUoLmpTAM4hDN6xAvTFDcsb7fuoiycE4JH"
	const startDate = "2022-09-09"
	const endDate = "2022-09-09"

	const url = `https://api.nasa.gov/neo/rest/v1/feed?start_date=${startDate}&end_date=${endDate}&api_key=${apiKEY}`

	useEffect(() => {
		getData()
		async function getData() {
			const response = await axios.get(url)
			const parsedData = await response.data.near_earth_objects
			setNeo(parsedData)
		}
	}, [url])

	// console.log(neo)

	return (
		<div>
			<h3>The Neo here:</h3>
			<div></div>
		</div>
	)
}

export default Neo
