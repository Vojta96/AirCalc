import './App.css';
import React, { useState } from 'react';
import DimCalc from "./Container/Dimension/DimCalc";
import HeatCalc from './Container/Heat/HeatCalc';
import PressCalc from "./Container/PressureLoss/PressureCalc";

function App() {
  const [home, setHome] = useState(0)
  const [dim, setDim] = useState(0)
  const [sani, setPressure] = useState(1)
  const [heat, setHeat] = useState(0)

  const showHome = () => {
    setHome(1)
    setDim(0)
    setPressure(0)
    setHeat(0)
  };

  const showDim = () => {
    setHome(0)
    setDim(1)
    setPressure(0)
    setHeat(0)
  };

  const showPressure = () => {
    setHome(0)
    setDim(0)
    setPressure(1)
    setHeat(0)
  };

  const showHeat = () => {
    setHome(0)
    setDim(0)
    setPressure(0)
    setHeat(1)
  };

  return (
    <div className='App'>
      <h1 className="header" onClick={showHome}>
        AirCalc
      </h1>
      {home === 1 &&
        <div>
          <div className="start__tiles" onClick={showDim}>Potrubí a průtok</div>
          <div className="start__tiles" onClick={showHeat}>Tepelná rovnice</div>
          <div className="start__tiles" onClick={showPressure}>Tlakové ztráty</div>
        </div>
      }
      {dim === 1 && <DimCalc />}
      {sani === 1 && <PressCalc />}
      {heat === 1 && <HeatCalc />}
    </div>
  );
}

export default App;