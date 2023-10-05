import React, { useEffect, useState } from 'react'
import { useSectionsContext } from '../../hooks/useSectionsContext'
import Section from './Section'
import { Box } from '@mui/material'

const SectionList = () => {
	// Count je používán jako pomocná proměnná k sumě tlakových ztrát, zaznamenává změnu v sekcích
	const { sections, dispatch } = useSectionsContext();
	const [count, setCount] = useState(0);

	const sectionLossHandler = (sectionNumber, sectionLoss) => {
			for (let index = 0; index < sections.length; index++) {
					if (sectionNumber === index) { sections[index].pressureloss = sectionLoss }
				}
				setCount(count + 1)
	}

	useEffect(() => {
		const fetchSections = async () => {
			const response = await fetch('/api/sections')
			const json = await response.json()

			if (response.ok) {
				dispatch({ type: 'SET_SECTIONS', payload: json })
			}
		}

		fetchSections()
	}, [])

	return (
		<Box sx={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(100px, 300px))", justifyContent: "center", }}>
			{sections && sections.map(section => (
				<Box sx={{ m: 2, pt: 2, textAlign: "center" }}>
					<Section
						key={section.sectionNumber}
						sectionNumber={section.sectionNumber}
						section = {section}
						sectionLossHandler={sectionLossHandler}
					/>
				</Box>
			))}
		</Box>
	)
}

export default SectionList