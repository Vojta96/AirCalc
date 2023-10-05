import React, { useState } from "react";
import './HeatCalc.css'
import Heat from './slides/Heat'
import Flow from './slides/Flow'
import Temperature from './slides/Temperature'
import { Paper, Tab, Tabs } from '@mui/material';
import SwipeableViews from 'react-swipeable-views-react-18-fix';

const HeatCalc = () => {
    const [value, setValue] = React.useState(0);
    const [airDensity, setAirDensity] = useState(1.2);
    const [heatCapacity, setHeatCapacity] = useState(1010);
    const [outsideTemperature, setOutsideTemperature] = useState(-12);
    const [effectivity, setEffectivity] = useState(83);
    const [insideTemperature, setInsideTemperature] = useState(20);
    const lowerTemperature = Number(effectivity/100*(insideTemperature-outsideTemperature)+outsideTemperature);
    
    return (
        <>
            <Paper>
                <Tabs
                    variant="fullWidth"
                    value={value}
                    indicatorColor="primary"
                    textColor="primary"
                    onChange={(e, v) => {
                        setValue(v);
                    }}
                    aria-label="disabled tabs example"
                >
                    <Tab label="Tepelný výkon" />
                    <Tab label="Objemový Průtok" />
                    <Tab label="Teplota přívodního vzduchu" />
                </Tabs>
            </Paper>
            <SwipeableViews
                index={value}
                onChangeIndex={(i) => setValue(i)}
            >
                <div
                    hidden={value !== 0}
                >
                    <Heat
                    airDensity = {airDensity}
                    heatCapacity = {heatCapacity}
                    lowerTemperature = {lowerTemperature}
                    />
                </div>
                <div
                    hidden={value !== 1}
                >
                    <Flow
                    airDensity = {airDensity}
                    heatCapacity = {heatCapacity}
                    lowerTemperature = {lowerTemperature}/>
                </div>
                <div
                    hidden={value !== 2}
                >
                <Temperature
                    airDensity = {airDensity}
                    heatCapacity = {heatCapacity}
                    lowerTemperature = {lowerTemperature}/>
                </div>
            </SwipeableViews>
            <form className="bottomBar">
                <div>
                    <text>Venkovní výpočtová teplota:</text>
                    <input 
                            type="number"
                            value={outsideTemperature}
                            onChange={(e) =>
                            setOutsideTemperature(Number(e.target.value))
                        }
                    />
                    <text>°C</text>
                </div>
                <div>
                    <text>Vnitřní teplota:</text>
                    <input 
                            type="number"
                            value={insideTemperature}
                            onChange={(e) =>
                            setInsideTemperature(e.target.value)
                        }
                    />
                    <text>°C</text>
                </div>
                <div>
                    <text>Účinnost výměníku:</text>
                    <input 
                            type="number"
                            value={effectivity}
                            onChange={(e) =>
                            setEffectivity(e.target.value)
                        }
                    />
                    <text>%</text>
                </div>
                <div>
                    <text>Teplota za ZZT:</text>
                    <input 
                            type="number"
                            disabled="disabled"
                            value={lowerTemperature.toFixed(1)}
                    />
                    <text>°C</text>
                </div>
                <div>
                    <text>Hustota vzduchu:</text>
                    <input 
                            type="number"
                            value={airDensity}
                            onChange={(e) =>
                            setAirDensity(e.target.value)
                        }
                    />
                    <text>kg/m3</text>
                </div>
                <div>
                    <text>Měrná tepelná kapacita vzduchu:</text>
                    <input 
                            type="number"
                            value={heatCapacity}
                            onChange={(e) =>
                            setHeatCapacity(e.target.value)
                        }
                    />
                    <text>J/kg.K</text>
                </div>
                
            </form>
        </>
    );
}

export default HeatCalc