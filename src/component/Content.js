import React from "react"
import Formations from './content/Formations'
import Experiences from './content/Experiences'
import Spacer from './common/Spacer'
import { Container } from "@bootstrap-styled/v4"

const Content = () => {
    
    return (
        <Container fluid>
            <Spacer id="exp"/>
            <Experiences /> 
            <Spacer id="dipl"/>
            <Formations/>
            <Spacer/>
        </Container>
    )
}

export default Content