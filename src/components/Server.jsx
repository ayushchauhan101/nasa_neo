import axios from "axios"
import { useState, useEffect } from "react"

import Links from "./Links"

function Server() {
	const [data, setData] = useState("")

	const apiKEY = "8AQvwvmUoLmpTAM4hDN6xAvTFDcsb7fuoiycE4JH"
	const startDate = "2022-09-07"
	const endDate = "2022-09-09"

	const url = `https://api.nasa.gov/neo/rest/v1/feed?start_date=${startDate}&end_date=${endDate}&api_key=${apiKEY}`

	useEffect(() => {
		getData()
		async function getData() {
			const response = await axios.get(url)
			setData(response.data)
		}
	}, [url])

	const totalElem = data["element_count"]

	return (
		<div>
			<h3>NASA DATABSE</h3>
			<div>
				<p>
					Number of near earth objects examined between {startDate} and{" "}
					{endDate} = {totalElem}
				</p>
				<Links />
			</div>
		</div>
	)
}

export default Server
