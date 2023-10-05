import React, { useState } from 'react';

const Heat = ({airDensity, heatCapacity, lowerTemperature}) => {
    const [flow, setFlow] = useState(750);
    const [higherTemperature, setHigherTemperature] = useState(20.0);
    const heat = (flow/3600*airDensity*heatCapacity*(higherTemperature-lowerTemperature)).toFixed(0);

    return (
        <form className="air__form--box"> 
            <div className="air__input--box">
                <text>Objemový průtok</text>
                <input className="air__input"
                    type="number"
                    value={flow}
                    onChange={(e) =>
                    setFlow(e.target.value)
                }
                />
                <text>m3/h</text>
            </div>
            <div className="air__input--box">
                <text>Teplota přívodního vzduchu</text>
                <input className="air__input"
                    type="number"
                    value={higherTemperature}
                    onChange={(e) =>
                        setHigherTemperature(e.target.value)
                    }
                />
                <text>°C</text>
            </div>
            <div className="air__result--box">
                <h3>Výsledný tepelný výkon</h3>
                <h2>{heat} W</h2>
            </div>
        </form>
    )
}

export default Heat