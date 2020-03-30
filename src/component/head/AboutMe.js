import React, { useState, useContext, useEffect, useLayoutEffect } from "react"
import styled from "styled-components"
import {Row,Col} from "@bootstrap-styled/v4/lib"
import { Container } from "@bootstrap-styled/v4"
import Perceval from '../common/theme/Perceval'
import FondCitation from './cadres/FondCitation'
import FondTitre from './cadres/FondTitre'
import Titre from './Titre'
import Nom from './Nom'
import Orange from './cadres/Orange'
import TinyOrange from './cadres/TinyOrange'
import FondNom from './cadres/FondNom'
import Me from './Me'
import Spacer from '../common/Spacer'
import GraphicPres from './GraphicPres'

const CustomContainer = styled(Container)`
@media screen and (max-width:576px) {
    border-radius: 30px;
    background-color: rgba(255,255,255,0);
    box-shadow: none;
    position: static !important;
    margin-top: 80px;
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