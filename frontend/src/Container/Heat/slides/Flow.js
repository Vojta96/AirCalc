import React, { useState } from 'react';

const FlowCalc = ({airDensity, heatCapacity, lowerTemperature}) => {
    const [heat, setHeat] = useState(2000);
    const [higherTemperature, setHigherTemperature] = useState(20.0);
    const Flow = (heat/(airDensity*heatCapacity*(higherTemperature-lowerTemperature))*3600).toFixed(0);

    return (
        <form className="air__form--box">
            <div className="air__input--box">
                <text>Tepelný výkon</text>
                <input className="air__input"
                    type="number"
                    value={heat}
                    onChange={(e) =>
                        setHeat(e.target.value)
                    }
                />
                <text>W</text>
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
                <h3>Výsledný Objemový růtok</h3>
                <h2>{Flow} m3/h</h2>
            </div>
        </form>
    )
}

export default FlowCalc