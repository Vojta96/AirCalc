import React, { useState } from 'react';
import { lowerRangeFor, higherRangeFor } from "../Support/dimensionalRange";
import ranges from '../Support/dimensionalRange';
import '../../../App.css'

const SquareDimensionCalc = () => {
    const [flow, setFlow] = useState(5400);
    const [velocity, setVelocity] = useState(5.0);
    const crossSection = (flow / velocity / 3600 * 1000000);

    const lowerDimension = (o) => {
        const rangeA = ranges.slice(o, (o) + 1).toString();
        const rangeB = (lowerRangeFor(crossSection / rangeA));
        const realVelocity = (flow / 3600 / rangeA / rangeB * 1000000).toFixed(2)

        return (
            rangeA >= rangeB &&
            rangeA <= 4 * rangeB &&
            <div className="air__range">
                <h3> {rangeA} x {rangeB} mm </h3>
                <div> {realVelocity} m/s </div>
            </div>
        )
    };

    const higherDimension = (o) => {
        const rangeA = ranges.slice(o, (o) + 1).toString();
        const rangeB = (higherRangeFor(crossSection / rangeA));
        const realVelocity = (flow / 3600 / rangeA / rangeB * 1000000).toFixed(2)

        return (
            rangeA >= rangeB &&
            rangeA <= 4 * rangeB &&
            <div className="air__range">
                <h3> {rangeA} x {rangeB} mm </h3>
                <div> {realVelocity} m/s</div>
            </div>
        )
    };

    return (
        <div className="air__form--box">
            <div className="air__input--box">
                <text>Průtok</text>
                <input className="air__input"
                    type="number"
                    name='Průtok'
                    value={flow}
                    onChange={(e) =>
                        setFlow(e.target.value)
                    }
                />
                <text>m3/h</text>
            </div>
            <div className="air__input--box">
                <text>Rychlost</text>
                <input className="air__input"
                    label="Rychlost"
                    type="number"
                    value={velocity}
                    onFocus="this.value=''"
                    onChange={(e) =>
                        setVelocity(e.target.value)
                    }
                />
                <text>m/s</text>
            </div>
            <div className="air__result--box">
                <h3>Navržené rozměry</h3>
                <div className="air__result">
                    {higherDimension(19)}{higherDimension(18)}{higherDimension(17)}{higherDimension(16)}{higherDimension(15)}{higherDimension(14)}{higherDimension(13)}{higherDimension(12)}{higherDimension(11)}{higherDimension(10)}{higherDimension(9)}{higherDimension(8)}{higherDimension(7)}{higherDimension(6)}{higherDimension(5)}{higherDimension(4)}{higherDimension(3)}{higherDimension(2)}{higherDimension(1)}{higherDimension(0)}
                </div>
                <div className="air__result">
                    {lowerDimension(19)}{lowerDimension(18)}{lowerDimension(17)}{lowerDimension(16)}{lowerDimension(15)}{lowerDimension(14)}{lowerDimension(13)}{lowerDimension(12)}{lowerDimension(11)}{lowerDimension(10)}{lowerDimension(9)}{lowerDimension(8)}{lowerDimension(7)}{lowerDimension(6)}{lowerDimension(5)}{lowerDimension(4)}{lowerDimension(3)}{lowerDimension(2)}{lowerDimension(1)}{lowerDimension(0)}
                </div>
            </div>
        </div>
    )
}

export default SquareDimensionCalc