import { Button, Card, TextField } from '@mui/material'
import { useSectionsContext } from '../../hooks/useSectionsContext'
import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'

const Section = ({ section, sectionNumber, sectionLossHandler }) => {
	const { dispatch } = useSectionsContext()
	const [diameter, setDiameter] = useState(section.diameter)
	const [length, setLength] = useState(section.length)
	const [flow, setFlow] = useState(section.flow)
	const airDensity = 1.2;
	const airViscosity = (15.32 * Math.pow(10, -6));
	const [velocity, setVelocity] = useState(0);
	const [frictionCoeficient, setFrictionCoeficient] = useState(0);
	const [frictionLoss, setFrictionLoss] = useState(0);

	useEffect(() => {
		setVelocity(flow / 3600 / (3.14 * Math.pow(diameter / 1000, 2) / 4))
	}, [diameter, flow])

	useEffect(() => {
		const reynolds = (velocity * (diameter / 1000) / airViscosity)
		if (reynolds < 2300) {
			setFrictionCoeficient(64 / reynolds)
		}
		else {
			setFrictionCoeficient(0.3164 / (Math.pow(reynolds, 1 / 4)))
		}
	}, [velocity])

	useEffect(() => {
		setFrictionLoss(frictionCoeficient * length / (diameter / 1000) * airDensity * Math.pow(velocity, 2) / 2)
	}, [frictionCoeficient, length])

	useEffect(() => {
		sectionLossHandler(sectionNumber, frictionLoss)
	}, [frictionLoss])

	const removeSection = async () => {
		const response = await fetch('/api/sections/' + section._id, {
			method: 'DELETE'
		})
		const json = await response.json()

		if (response.ok) {
			dispatch({ type: 'DELETE_SECTION', payload: json })
		}
	}

	useEffect(() => {
		const patchSection = async () => {

			const response = await fetch('/api/sections/' + section._id, {
				method: 'PATCH',
				body: JSON.stringify({
					"diameter": diameter,
					"length": length,
					"flow": flow,}),
				headers: {
					'Content-Type': 'application/json'
				}
			})
			const json = await response.json()

			if (response.ok) {
				console.log('section patched', section)
				//Vyřešit DISPATCH, databáze je v pořádku
				dispatch({ type: 'PATCH_SECTION', payload: json })
			}
		}

		patchSection()
	}, [diameter, length, flow])

	return (
		<Card >
			{sectionNumber}
			<TextField label="Průměr" type='number' defaultValue={diameter} onChange={(e) => setDiameter(e.target.value)} sx={{ m: 1 }} />
			<TextField label="Délka" type='number' defaultValue={length} onChange={(e) => setLength(e.target.value)} sx={{ m: 1 }} />
			<TextField label="Průtok" type='number' defaultValue={flow} onChange={(e) => setFlow(e.target.value)} sx={{ m: 1 }} />
			<p>Rychlost proudění: {Number(velocity).toFixed(2)} m/s</p>
			<p>Ztráta třením: {frictionLoss.toFixed(1)} Pa</p>
			<Button color='error' onClick={removeSection}>Odebrat</Button>
		</Card>
	)
}

export default Section