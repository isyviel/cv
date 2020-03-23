import React, { useState, useContext, useEffect } from "react"
import styled from "styled-components"
import {Row,Col} from "@bootstrap-styled/v4/lib"
import Container from '../common/Container'
import RoundContainer from '../common/RoundContainer'
import Spacer from '../common/Spacer'
import Detales from './Detales'
import Tech from './Tech'
import { SYMFONY, HTML, REACT, ANDROID, JAVA, GIT, BOOTS } from "../common/constantes/logos"
import { EXP, FORMATION } from "../common/constantes/texte"


const CustomDiv = styled.div`
    padding: 70px;
   
    `
const Title= styled.div`
    text-align: center;
    font-family: "Baloo 2";
    font-size: 28px;
    padding-bottom : 26px;
`
const Citation = styled.p`
font-family: 'Annie Use Your Telescope', cursive;
    font-size: 30px;
    color: grey;
    font-weight: italic;
    text-align: center;
    padding-bottom : 50px;
`



const Content = ({title,content,...props}) => {
    const techno = [SYMFONY,REACT,HTML,BOOTS,ANDROID,JAVA,GIT];
    const sections = [EXP,FORMATION] 

    return (
        <CustomDiv>
            <Citation>
                <strong>"Faire un bond en avant, je sautille pas"</strong> - Perceval de Kaamelott
            </Citation>
            <Container fluid>
                <Row>
                    {techno.map((tech) => <Tech tech={tech}/>)}
                </Row>
            </Container>
            <Spacer/>
                {sections.map((section)=>{
                    return(
                    <>
                        <Container fluid>
                            <Row className="align-items-center">
                                <Col xs="3">
                                    <Title>{section}</Title>
                                </Col>
                                <Col> 
                                    <Detales title={section}/>
                                </Col>
                            </Row>
                        </Container>
                    <Spacer/>
                    </>)
                })}
        </CustomDiv>
    )
}

export default Content