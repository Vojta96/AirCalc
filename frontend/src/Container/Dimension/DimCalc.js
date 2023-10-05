import React, { useState } from "react";
import './DimCalc.css'
import { BsSquare, BsSquareFill, BsCircle, BsCircleFill } from 'react-icons/bs';
import { Paper, Tab, Tabs } from '@mui/material';
import RoundDimensionCalc from "./Round/RoundDimensionCalc";
import RoundVelocityCalc from "./Round/RoundVelocityCalc";
import RoundFlowCalc from "./Round/RoundFlowCalc";
import SquareDimensionCalc from "./Square/SquareDimensionCalc";
import SquareVelocityCalc from "./Square/SquareVelocityCalc";
import SquareFlowCalc from "./Square/SquareFlowCalc";
import SwipeableViews from 'react-swipeable-views-react-18-fix';

const AirCalc = () => {
    const [value, setValue] = React.useState(0);
    const [shape, setShape] = useState("Square");

    const shapes1 = [
        <BsSquare />,
        <BsCircleFill />
    ];

    const shapes2 = [
        <BsSquareFill />,
        <BsCircle />
    ];
    const [shapes, setShapes] = useState(shapes2);

    const shapeShifter = () => {
        shape === "Round" && setShape("Square")
        shape === "Round" && setShapes(shapes2)
        shape === "Square" && setShape("Round")
        shape === "Square" && setShapes(shapes1)
    }

    return (
        <>
            <Paper>
                <Tabs
                    variant="fullWidth"
                    value={value}
                    indicatorColor="primary"
                    textColor="primary"
                    onChange={(e, v) => {
                        setValue(v);
                    }}
                    aria-label="disabled tabs example"
                >
                    <Tab label="Rozměry" />
                    <Tab label="Rychlost" />
                    <Tab label="Průtok" />
                </Tabs>
            </Paper>
            <SwipeableViews
                index={value}
                onChangeIndex={(i) => setValue(i)}
                style={{ height: '90vh' }}
            >
                <div
                    hidden={value !== 0}
                >
                    {shape === "Round" && <RoundDimensionCalc />}
                    {shape === "Square" && <SquareDimensionCalc />}
                </div>
                <div
                    hidden={value !== 1}
                >
                    {shape === "Round" && <RoundVelocityCalc />}
                    {shape === "Square" && <SquareVelocityCalc />}
                </div>
                <div
                    hidden={value !== 2}
                >
                    {shape === "Round" && <RoundFlowCalc />}
                    {shape === "Square" && <SquareFlowCalc />}
                </div>
            </SwipeableViews>

            <div className="shapeShifter"
                onClick={shapeShifter}>
                {shapes}
            </div>
        </>
    );
}

export default AirCalc