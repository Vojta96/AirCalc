import React, { useState } from "react";
import SectionList from "./Section/SectionList";
import { Stack } from "@mui/material";

const PressureCalc = () => {
        const [sections, setSections] = useState([]);
        const [reynolds, setReynolds] = useState(0);
        const [frictionCoeficient, setFrictionCoeficient] = useState(0);
        const [airDensity, setAirDensity] = useState(1.2);
        const [airViscosity, setAirViscosity] = useState(15.32*Math.pow(10,-6));
        const [velocity, setVelocity] = useState(0);
        const [frictionLoss, setFrictionLoss] = useState(0);

        const changeSection = (number, diameter, sectionLength, flow) => {
            const sectionInput = {
                number: number,
                diameter: diameter,
                sectionLength: sectionLength,
                flow: flow,
            }
            sections[number-1] = sectionInput
            setSections(prev => Object.assign(prev, sections))
            setVelocity(flow/3600/(3.14*Math.pow(diameter/1000, 2)/4))
            setReynolds(velocity*(diameter/1000)/airViscosity)
            if (reynolds<2300)
            {
                setFrictionCoeficient(64/reynolds)
            }
            else
            {
                setFrictionCoeficient(0.3164/(Math.pow(reynolds,1/4)))
            }
            setFrictionLoss(frictionCoeficient*sectionLength/(diameter/1000)*airDensity*Math.pow(velocity,2)/2)
        }
        const newSection = () => {
            setSections((prev) => {
                return [...prev, {
                    sectionNumber: sections.length+1,
                    diameter: null,
                    sectionLength: null,
                    flow: null,
                }]
            })
        }

    return(
        <Stack>
        <SectionList
            sections = {sections}
            changeSection={changeSection}
            setSections = {setSections}
            newSection = {newSection}
        />
        <p>Rychlost proudění: {Number(velocity).toFixed(2)} m/s</p>
        <p>Ztráta třením: {frictionLoss.toFixed(1)} Pa</p>
        </Stack>
    )
};

export default PressureCalc;