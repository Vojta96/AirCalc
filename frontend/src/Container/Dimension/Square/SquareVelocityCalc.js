import React, { useState } from 'react';
import '../../../App.css'

const SquareVelocityCalc = () => {
    const [sizeA, setSizeA] = useState(450);
    const [sizeB, setSizeB] = useState(400);
    const [flow, setFlow] = useState(5400);
    const crossSection = (sizeA * sizeB / 1000000);
    const velocity = (flow / 3600 / crossSection).toFixed(2);

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
            <div className="air__result--box">
                <h3>Výsledná rychlost</h3>
                <h2>{velocity} m/s</h2>
            </div>
        </form>
    )
}

export default SquareVelocityCalc