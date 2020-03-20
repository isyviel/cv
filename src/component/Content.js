import React, { useState, useContext, useEffect } from "react"
import styled from "styled-components"

import Container from './common/Container'
import Spacer from './common/Spacer'
import Detales from './content/Detales'


const CustomDiv = styled.div`
    background: url(images/Rectangle.png) no-repeat center fixed;
    padding: 2%;
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