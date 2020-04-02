import React from "react"
import styled from "styled-components"
import { Container } from "@bootstrap-styled/v4"
import FondTitre from './cadres/FondTitre'
import Titre from './aboutme/Titre'
import GraphicPres from './aboutme/GraphicPres'

const CustomContainer = styled(Container)`
    max-height: 500px;
    @media screen and (max-width:576px) {
        border-radius: 30px;
        background-color: rgba(255,255,255,0);
        box-shadow: none;
        margin-top: 100px;
    }
`
const AboutMe = ()=> {

    return(
        <CustomContainer>
            <GraphicPres/>
            <FondTitre>
                <Titre/>
            </FondTitre> 
        </CustomContainer>
    )
}
    
export default AboutMe