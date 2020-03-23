import React, { useState, useContext, useEffect } from "react"
import styled from "styled-components"
import {Row,Col} from "@bootstrap-styled/v4/lib"
import Container from '../common/Container'
import RoundContainer from '../common/RoundContainer'
import Spacer from '../common/Spacer'
import Detales from './Detales'

import RoundTitle from './RoundTitle'
import { SYMFONY, HTML, REACT, ANDROID, JAVA, GIT, BOOTS } from "../common/constantes/logos"

const CustomDiv = styled.div`
    padding-top:2%;
    
    `
const Title= styled.div`
    text-align: center;
    font-family: "Baloo 2";
    font-size: 48px;
    font-weight: bold;
`
const Content = ({title,content,...props}) => {

    const techno = [SYMFONY,REACT,HTML,BOOTS,ANDROID,JAVA,GIT]
    const CustomImg = styled.img`
    width: 100px;
    `
    const CustomTitle = styled.p`
    text-align: center;
    font-family: "Baloo 2";
    font-size: 32px;
    `
    const path = "images/"
    return (
        <CustomDiv>
            <Title>Technologies et Outils</Title>
            <Spacer/>
            <Row>
                {techno.map((tech) => {
                    return <Col>
                                <RoundContainer>
                                    <CustomImg src= {path + tech[1]}/>
                                </RoundContainer>
                                <CustomTitle>{tech[0]}</CustomTitle>
                            </Col>
                })}
            </Row>
             <Spacer/>
            
            <Row>
                <Col xs="3"><Title>Expérience</Title></Col>
                <Col>
                <Container>
                <Detales 
                    title="Exp"/>
                </Container></Col>
            </Row>
            <Spacer/>
            <Row>
                <Col xs="3"><Title>Formation</Title></Col>
                <Col>
                <Container>
                <Detales 
                    title="Formation"/>
                </Container></Col>
            </Row>
        </CustomDiv>
    )
}

export default Content