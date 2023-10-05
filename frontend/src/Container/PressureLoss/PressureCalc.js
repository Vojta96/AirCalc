import { Box, Button } from '@mui/material'
import React, { useEffect, useState } from 'react'
import SectionList from './SectionList.js'
import { useSectionsContext } from '../../hooks/useSectionsContext'

const PressureCalc = () => {
	const { dispatch } = useSectionsContext();
	const [sumPressLoss, setSumPressLoss] = useState(0)
	const [count, setCount] = useState(0);
	const [error, setError] = useState(null)

	const newSection = async (e) => {
		e.preventDefault()

		const section = {
			"sectionNumber": 1,
			"diameter": 125,
			"length": 1,
			"flow": 240
		}

		const response = await fetch('/api/sections', {
			method: 'POST',
			body: JSON.stringify(section),
			headers: {
				'Content-Type': 'application/json'
			}
		})
		const json = await response.json()

		if (!response.ok) {
			setError(json.error)
		}
		if (response.ok) {
			setError(null)
			console.log('new section added', section)
			dispatch({ type: 'CREATE_SECTION', payload: json })
		}
	}

	useEffect(() => {
		/* 		let sum = 0
				for (let index = 0; index < sections.length; index++) {
					sum += sections[index].pressureloss;
				}
				setSumPressLoss(sum) */
	}, [count])

	return (
		<Box sx={{ p: 2, textAlign: "center", fontSize: "20px", position: "sticky", top: 0, backgroundColor: 'rgb(255, 255, 255)', }}>
			Celková tlaková ztráta: {sumPressLoss.toFixed(0)} Pa
			<SectionList />
			<Button onClick={newSection} sx={{ height: 50, alignSelf: 'center', border: "dashed 1px", fontSize: 30 }}>+</Button>
		</Box>
	)
}

export default PressureCalc