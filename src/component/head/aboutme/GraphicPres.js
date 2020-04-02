import React from "react"
import styled from "styled-components"
import { Container } from "@bootstrap-styled/v4"
import Perceval from '../../common/theme/Perceval'
import FondCitation from '../cadres/FondCitation'
import Nom from './Nom'
import Orange from '../cadres/Orange'
import TinyOrange from '../cadres/TinyOrange'
import FondNom from '../cadres/FondNom'
import Me from './Me'

const PartOneContainer = styled(Container)`
    position: relative;
    right: 95px;
    bottom: 100px;
    @media screen and (max-width:768px) {
        border-radius: 0px;
        background-color: rgba(255,255,255,0);
        box-shadow: none;
        position: static !important;
    }
`

const GraphicPres = () => {

    return (
        <PartOneContainer>
            <FondCitation>
                <Perceval/>
            </FondCitation>
            <TinyOrange/>
            <Orange/>
            <Me/>
            <FondNom>
                <Nom/>
            </FondNom>
        </PartOneContainer>
    )
}

export default GraphicPres