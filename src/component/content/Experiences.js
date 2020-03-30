import React, { useState} from "react"
import styled from "styled-components"
import {Row,Col} from "@bootstrap-styled/v4/lib"
import Container from '../common/Container'
import Title from '../common/Title'
import ExpDetales from'./Detales/ExpDetales'
import {  LISTE_EXP} from "../common/constantes/texte"
import Active from './Detales/Active'
import Disactive from './Detales/Disactive'
import Bouton from '../common/Bouton'

const CustomContainer = styled(Container)`
    border-radius: 15px;
    background-color: rgba(79,79,79,0.5);
    box-shadow: inset 0 1px 2px 0 #FFF, inset 0 1px 3px 0 #FFF, 0 2px 4px 0 #000;
    width: 80%;
    min-height: 500px;

    @media screen and (max-width:576px) {
        width: 100%;
        padding: 0;
    }
`

const Experiences = ({exp,...props}) => {
    const experience = LISTE_EXP;

    const [isSales, setIsSales] = useState(false);
    const [isWeb, setIsWeb] = useState(true)

     const handleDisplayStrategia = () => {
        setIsSales(false)
        setIsWeb(true) 
    }
    const handleDisplaySales = () => {
        setIsSales(true)
        setIsWeb(false)
    }
    
    return(   
            <CustomContainer fluid>
                <Row className="align-items-center justify-content-center">
                    <Title className="text-white"><p>Expérience</p></Title>
                </Row>

                <Row className="d-sm-none justify-content-around">
                    <Col xs="6">
                    <Bouton display={handleDisplayStrategia} content={experience[0]}/>
                    </Col>
                    <Col xs="6">
                    <Bouton display={handleDisplaySales} content={experience[1]}/>
                    </Col>
                    <ExpDetales isSales={isSales} experience={experience}/>
                </Row>

                <Row className="d-none d-sm-block">
                    <Col>
                        {isWeb? <Active content={experience[0]}/>
                        : <Disactive display={handleDisplayStrategia} content={experience[0]}/>}

                        {isSales ? 
                        <Active content={experience[1]}/>
                        : <Disactive display={handleDisplaySales} content={experience[1]}/>}  
                    </Col>
                    <Col>
                        <ExpDetales isSales={isSales} experience={experience}/>
                    </Col> 
                </Row>
             </CustomContainer>
        )}

export default Experiences