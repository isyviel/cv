import React, { useState, useContext, useEffect } from "react"
import {Row,Col} from "@bootstrap-styled/v4/lib"
import Me from './head/Me'
import Contact from './head/Contact'
import styled from "styled-components"
import { EXP, FORMATION, COMPETENCES} from "./common/constantes/texte"
import Comp from './content/Competences'

const Citation = styled.p`
    font-family: 'Annie Use Your Telescope', cursive;
    font-size: 30px;
    color: grey;
    text-align: center;
`
const Author = styled.p`
    font-family: 'Baloo 2';
    color: grey;
    padding-bottom : 50px;
    text-align: center;
`

const CustomName = styled.div`
    text-align: center;
    font-family: "Comfortaa";
    font-size: 36px; 
  `

const Head = ({isForm,...props}) => {
    const competences = COMPETENCES
    return (
    
        <Row className="align-items-center p-4">          
            <Col><Me/></Col>  
            <Col lg="6">
                <CustomName>Adeline SIMON</CustomName>
                <CustomName>Développeuse Web et Web Mobile</CustomName>
                <Contact/>
            </Col>
            <Col>
            
            </Col>    
        </Row>

    )
}

export default Head