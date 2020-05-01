import React from "react"
import {Container,Row} from "@bootstrap-styled/v4/lib"
import styled from "styled-components"
import { Slide} from "@material-ui/core"
import Exp from "./detales/Exp"
import Formation from "./detales/Formation"
import Projects from "./detales/Projects"

const DetalesContainer =  styled(Container)`
    height: 450px;
    min-width: 99%;
    background: linear-gradient(90deg,rgb(255, 255, 255,0.1) 0%,rgba(255, 255, 255) 100%);
    margin: 0;
    padding: 3% 5% 3% 10%;
    font-family: Arial;
    font-size: 16px;
    z-index: 1;
`
const Cross = styled.img`
    cursor: pointer;
    width: 20px;
`
const Detales = ({viewDetales, closeSlide,isExp,isFormation,isProject, exp,diplome,projects,...props}) => {

    return(
            <Slide timeout={800} in={viewDetales} direction="left">
                <DetalesContainer>
                    <Row className="justify-content-end">
                        <Cross onClick={closeSlide} src="images/croix.png" alt="croix"/>
                    </Row>
                    {isExp && (<Exp exp={exp}/>)}
                    {isFormation &&(<Formation diplome={diplome}/>)}
                    {isProject &&(<Projects projects={projects}/>)}
                   
                </DetalesContainer>
            </Slide>
    )
}

export default Detales