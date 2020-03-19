import React, { useState, useContext, useEffect } from "react"
import { Row,Col } from "@bootstrap-styled/v4"
import Container from './common/Container'
import styled from "styled-components"
import Tech from './Tech'
import { Parallax } from "react-scroll-parallax"
import Background from 'images'


const CustomDiv = styled.div`
    height: 500px;
    width: 100%;
    background: url(${Background}/paral.jpg) center 0 no-repeat fixed;
`


const Content = () => {
return (
    <CustomDiv>
        <Tech></Tech>
    </CustomDiv>
)
}

export default Content