import React, { useState, useContext, useEffect } from "react"
import styled from "styled-components"

import Container from './common/Container'
import Spacer from './common/Spacer'
import Detales from './content/Detales'


const CustomDiv = styled.div`
    padding-top:2%;
    background: url(images/Rectangle1.png) no-repeat center fixed;
    `
const Content = ({title,content,...props}) => {
    return (
        <CustomDiv>
            <Container>
                <Detales
                    title="Techno"/>
            </Container>
            <Spacer/>
            <Container>
                <Detales 
                    title="Exp"/>
            </Container>
            <Spacer/>
            <Container>
                <Detales 
                    title="Formation"/>
            </Container>
        </CustomDiv>
    )
}

export default Content