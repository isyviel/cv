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
const Content = ({title,content,...props}) => {
    return (
        <CustomDiv>
            <Row>
                <RoundContainer>
                    <RoundTitle/>
                </RoundContainer>
                <Container>
                <Detales 
                    title="Techno"/>
                </Container>
            </Row>
            <Spacer/>
            <Row>
                <Container>
                <Detales 
                    title="Exp"/>
                </Container>
                <RoundContainer>
                    <RoundTitle/>
                </RoundContainer>
            </Row>
            <Spacer/>
            <Row>
                <RoundContainer>
                    <RoundTitle/>
                </RoundContainer>
                <Container>
                <Detales 
                    title="Formation"/>
                </Container>
            </Row>
        </CustomDiv>
    )
}

export default Content