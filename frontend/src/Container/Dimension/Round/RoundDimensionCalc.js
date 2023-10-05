import React, { useState } from 'react';
import { lowerRangeFor, higherRangeFor } from "../Support/dimensionalRange";
const RoundDimensionCalc = () => {
    const [flow, setFlow] = useState(5400);
    const [velocity, setVelocity] = useState(5.0);
    const crossSection = (flow / velocity / 3600 * 1000000);

    const dimension = () => {

        const rangeL = (lowerRangeFor(Math.sqrt(crossSection * 4 / Math.PI)));
        const rangeH = (higherRangeFor(Math.sqrt(crossSection * 4 / Math.PI)));
        const realVelocityLow = (4 * flow / 3600 / Math.pow(rangeL, 2) / Math.PI * 1000000).toFixed(2)
        const realVelocityHigh = (4 * flow / 3600 / Math.pow(rangeH, 2) / Math.PI * 1000000).toFixed(2)

        return (
            <div>
                <h3> {rangeH} mm </h3>
                <div> Skutečná rychlost: {realVelocityHigh} </div>
                <h3> {rangeL} mm </h3>
                <div> Skutečná rychlost: {realVelocityLow} </div>
            </div>
        )
    };

    return (
        <form className="air__form--box">
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
                    type="number"
                    value={velocity}
                    onChange={(e) =>
                        setVelocity(e.target.value)
                    }
                />
                <text>m/s</text>
            </div>
            <div className="air__result--box">
                <h3>Navržené rozměry</h3>
                {dimension()}
            </div>
        </form>
    )
}

export default RoundDimensionCalc