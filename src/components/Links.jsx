import axios from "axios"
import { useState, useEffect } from "react"

function Links() {
	const [links, setLinks] = useState("")

	const apiKEY = "8AQvwvmUoLmpTAM4hDN6xAvTFDcsb7fuoiycE4JH"
	const startDate = "2022-09-07"
	const endDate = "2022-09-09"

	const url = `https://api.nasa.gov/neo/rest/v1/feed?start_date=${startDate}&end_date=${endDate}&api_key=${apiKEY}`

	useEffect(() => {
		getData()
		async function getData() {
			const response = await axios.get(url)
			setLinks(response.data.links)
		}
	}, [url])

	return (
		<div>
			<h3>These links here:</h3>
			<div>
				<a href={links.next}>next</a>
				<br />
				<a href={links.previous}>previous</a>
				<br />
				<a href={links.self}>self</a>
			</div>
		</div>
	)
}

export default Links
