import React, { useState } from "react";
import Section from "./Section"
import { Button, Stack } from "@mui/material";
import "./Section.css"

const SectionList = (props) =>{

return(
    <div className="grid-container" >
    {props.sections.map((section) => (
            <Section
                className="grid-item"
                section={section} 
                key={section.sectionNumber}
                changeSection={props.changeSection}
                newSection={props.newSection}
            />
        ))}        
        <Button onClick={props.newSection}>Přidat Úsek</Button>
    </div>
    
)
        }
export default SectionList