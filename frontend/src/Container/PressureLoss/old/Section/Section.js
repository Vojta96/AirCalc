import React from "react";
import { TextField, Stack, Divider, Button, Card } from "@mui/material";
import { useEffect, useState } from "react";

const Section = (props) => {
    const [dimension, setDimension] = useState(props.section.diameter);
    const [sectionLength, setSectionLength] = useState(props.section.sectionLength);
    const [flow, setFlow] = useState(props.section.flow);

     useEffect(() => {
        props.changeSection(props.section.sectionNumber, dimension, sectionLength, flow)
    }, [props, dimension, sectionLength, flow]) 

    return              (
        <Card direction={"row"}>
        <Stack direction="column" divider={<Divider orientation="horizontal" flexItem />} spacing={2} width={250} margin={2}>
        <TextField label="Úsek" variant="standard" type="number" defaultValue={props.section.sectionNumber} disabled/>
        <TextField label="Průměr potrubí" variant="outlined" type="number" defaultValue={dimension} onChange={(e) => setDimension(e.target.value)}/>
        <TextField label="Délka potrubí" variant="outlined" defaultValue={sectionLength} onChange={(e) => setSectionLength(e.target.value)}/>
        <TextField label="Průtok" variant="outlined" defaultValue={flow} onChange={(e) => setFlow(e.target.value)}/>
        </Stack>        
       {/*  <p>Rychlost proudění: {Number(velocity).toFixed(2)} m/s</p>
        <p>Ztráta třením: {frictionLoss.toFixed(1)} Pa</p> */}
        </Card>
    )
};

export default Section;