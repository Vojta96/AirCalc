import React, { useState } from 'react';

const RoundVelocityCalc = () => {
    const [sizeD, setSizeD] = useState(450);
    const [flow, setFlow] = useState(5400);
    const crossSection = (Math.PI * Math.pow(sizeD, 2) / 4 / 1000000);
    const velocity = (flow / 3600 / crossSection).toFixed(2);

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
            <div>
                <h3>Výsledná rychlost</h3>
                <h2>{velocity} m/s</h2>
            </div>
        </form>
    )
}

export default RoundVelocityCalc