import React from "react"
import styled from "styled-components"
import { Container,Row } from "@bootstrap-styled/v4"
import Head from './Head'
import Content from './Content'
import Navigation from "./newV/content/Navigation"

const CustomDiv = styled.div`
    min-height: 100% !important;
    background: url(images/deco_ronds.png) no-repeat fixed ;
    background-size: 30%;
    background-position: 28% 109%;
    font-family: Dosis;
    padding: 0 !important;
    overflow-y: hidden;
    overflow-x: hidden;
`

const OnePage = () => {

    return (
        <CustomDiv fluid data-nosnippet>
                <Head/>
                <Content/>
                <Navigation/>
        </CustomDiv>
    )
}

export default OnePage