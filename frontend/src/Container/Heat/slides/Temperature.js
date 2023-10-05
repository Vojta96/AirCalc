import React, { useState } from 'react';

const TemperatureCalc = ({airDensity, heatCapacity, lowerTemperature}) => {
    const [heat, setHeat] = useState(2000);
    const [flow, setFlow] = useState(750.0);
    const higherTemperature = (heat/(flow/3600*heatCapacity*airDensity)+lowerTemperature).toFixed(1);

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
            <div className="air__result--box">
                <h3>Výsledná teplota přívodního vzduchu</h3>
                <h2>{higherTemperature} °C</h2>
            </div>
        </form>
    )
}

export default TemperatureCalc