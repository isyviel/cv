import React, { useState, useContext, useEffect } from "react"
import styled from "styled-components"
import {Row,Col,Button} from "@bootstrap-styled/v4/lib"
import Container from '../common/Container'

import Spacer from '../common/Spacer'
import Detales from './Detales'

import { EXP, FORMATION, COMPETENCES} from "../common/constantes/texte"

const Title= styled.div`
    text-align: left;
    font-family: "Baloo 2";
    font-size: 28px;
    padding-bottom : 26px;
`

const Section = ({element,...props}) => {
    const sections = [EXP,FORMATION] 

    return(
        sections.map((section)=>
            <>
            <Container fluid>
                <Row className="align-items-center">
                    <Title>{section}</Title>
                </Row>
                <Row>    
                    <Detales title={section} element={element}/>
                </Row> 
             </Container>
            <Spacer/>
            </>
        ))}


export default Section