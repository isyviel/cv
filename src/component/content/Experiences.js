import React, { useState, useContext, useEffect } from "react"
import styled from "styled-components"
import {Row,Col} from "@bootstrap-styled/v4/lib"
import Container from '../common/Container'
import Title from '../common/Title'
import Spacer from '../common/Spacer'
import ExpDetales from'./Detales/ExpDetales'
import Button from '@material-ui/core/Button';
import {  FORMATION, COMPETENCES, LISTE_EXP, DESCRIPTION} from "../common/constantes/texte"
import { Fade } from '@material-ui/core';

const SubTitle= styled(Button)`
width : 600px;
height: 70px;
:hover {
    border: '4px solid currentColor'
}
`
const CustomContainer = styled(Container)`
background: url(images/head.png) no-repeat top fixed;
background-size: 100%;
`

const Experiences = ({exp,...props}) => {

    const experience = LISTE_EXP;
    const [isSales, setIsSales] = useState(false);
    const [isActive, setIsActive] = useState(false);
    const [checked, setChecked] = useState(false);

     const handleDisplayStrategia = (event) => {
        setIsSales(false)
        setIsActive(true)
        setChecked(prev => !prev);
    }
    const handleDisplaySales = (event) => {
        setIsSales(true)
        setIsActive(true)
        setChecked(prev => !prev);
    }
    
    return(   
            <>
            <CustomContainer fluid>
                <Row className="align-items-center pb-3">
                    <Col><Title>Expérience</Title></Col>
                    <Col><SubTitle onClick={handleDisplayStrategia}>{experience[0]}</SubTitle></Col>
                    <Col><SubTitle onClick={handleDisplaySales}>{experience[1]}</SubTitle></Col>
                </Row>
                
                <Row>
              
                    <ExpDetales isSales={isSales} checked={checked}  experience={experience}/>
             
                </Row> 
             
             </CustomContainer>
            <Spacer/>
            </>
        )}


export default Experiences