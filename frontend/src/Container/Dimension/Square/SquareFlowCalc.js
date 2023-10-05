import React, { useState } from 'react';
import '../../../App.css'

const SquareFlowCalc = () => {
    const [sizeA, setSizeA] = useState(450);
    const [sizeB, setSizeB] = useState(400);
    const [velocity, setVelocity] = useState(5.0);
    const crossSection = (sizeA * sizeB / 1000000);
    const Flow = (velocity * crossSection * 3600).toFixed(0);

    return (
        <form className="air__form--box">
            <div className="air__input--box">
                <text>Rozměr A</text>
                <input className="air__input"
                    type="number"
                    value={sizeA}
                    onChange={(e) =>
                        setSizeA(e.target.value)
                    }
                />
                <text>mm</text>
            </div>
            <div className="air__input--box">
                <text>Rozměr B</text>
                <input className="air__input"
                    type="number"
                    value={sizeB}
                    onChange={(e) =>
                        setSizeB(e.target.value)
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
                <h2> {Flow} m3/h</h2>
            </div>
        </form>
    )
}

export default SquareFlowCalc