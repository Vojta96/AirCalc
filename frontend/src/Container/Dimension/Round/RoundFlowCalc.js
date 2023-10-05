import React, { useState } from 'react';

const RoundFlowCalc = () => {
    const [sizeD, setSizeD] = useState(450);
    const [velocity, setVelocity] = useState(5.0);
    const crossSection = (Math.PI * Math.pow(sizeD, 2) / 4 / 1000000);
    const Flow = (velocity * crossSection * 3600).toFixed(0);

    return (
        <form className="air__form--box">
            <div className="air__input--box">
                <text>Rozměr D</text>
                <input className="air__input"
                    type="number"
                    value={sizeD}
                    onChange={(e) =>
                        setSizeD(e.target.value)
                    }
                />
                <text>mm</text>
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
                <h3>Výsledný Průtok</h3>
                <h2>{Flow} m3/h</h2>
            </div>
        </form>
    )
}

export default RoundFlowCalc