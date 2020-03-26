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
import Colors from '../common/theme/Colors'

const SubTitle= styled(Button)`
    background: url(images/clicked.png) no-repeat center;
    height:100px;
    background-size:100%;
    width: 300px;
`
const CustomContainer = styled(Container)`
    border-radius: 15px;
    background-color: ${Colors.darkGrey};
    box-shadow: inset 0 1px 2px 0 #FFF, inset 0 1px 3px 0 #FFF, 0 2px 4px 0 #000;
    width: 80%;
    min-height: 500px;
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
            <CustomContainer fluid>
                <Row className="align-items-center">
                    <Title className="text-white">Expérience</Title>
                </Row>
                <Row>
                    <Col className="text-align-center" xs="3">
                        <SubTitle onClick={handleDisplayStrategia}>{experience[0]}</SubTitle>
                        <SubTitle onClick={handleDisplaySales}>{experience[1]}</SubTitle>
                    </Col>
                    <Col>
                        <ExpDetales isSales={isSales} checked={checked}  experience={experience}/>
                    </Col> 
                </Row>
             </CustomContainer>
        )}


export default Experiences