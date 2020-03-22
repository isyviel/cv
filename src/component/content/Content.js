import React, { useState, useContext, useEffect } from "react"
import styled from "styled-components"
import {Row,Col} from "@bootstrap-styled/v4/lib"
import Container from '../common/Container'
import RoundContainer from '../common/RoundContainer'
import Spacer from '../common/Spacer'
import Detales from './Detales'
import RoundTitle from './RoundTitle'

const CustomDiv = styled.div`
    padding-top:2%;
    background: url(images/Rectangle1.png) no-repeat center fixed;
    `
const Title= styled.div`
    text-align: center;
    font-family: "Baloo 2";
    font-size: 48px;
    font-weight: bold;
`
const Content = ({title,content,...props}) => {
    return (
        <CustomDiv>
            <Spacer/>
            <Title>Technologies</Title>
            <Spacer/>
            <Row>
                <RoundContainer>
                    <RoundTitle title="Symfony"/>
                    <img src="symfony.png"/>
                </RoundContainer>
                <RoundContainer>
                    <RoundTitle title="Symfony"/>
                    <img src="symfony.png"/>
                </RoundContainer>
                <RoundContainer>
                    <RoundTitle title="Symfony"/>
                    <img src="symfony.png"/>
                </RoundContainer>
                <RoundContainer>
                    <RoundTitle title="Symfony"/>
                    <img src="symfony.png"/>
                </RoundContainer>
                <RoundContainer>
                    <RoundTitle title="Symfony"/>
                    <img src="symfony.png"/>
                </RoundContainer>
            </Row>
            <Spacer/>
            <Title>Expérience</Title>
            <Row>
                <Container>
                <Detales 
                    title="Exp"/>
                </Container>
            </Row>
            <Spacer/>
            
                <Title>Formation</Title>
                <Row>
                <Container>
                <Detales 
                    title="Formation"/>
                </Container>
            </Row>
        </CustomDiv>
    )
}

export default Content