import React from "react"
import styled from "styled-components"
import { Container,Col,Row } from "@bootstrap-styled/v4"
import Head from './Head'
import Content from './Content'
import Name from './Name'
import Menu from './Menu'

const CustomDiv = styled(Container)`
    margin: 0;
    padding: 0;
    overflow-y: hidden;
    overflow-x: scroll;
    background: url(images/deco_ronds.png) no-repeat center fixed ;
    background-size: 35%;
    background-position: 20% 50%;
    height: 900px;
`

const OnePage = () => {

    return (
        <CustomDiv fluid data-nosnippet>
            <Row>
                <Name/>
                <Head/>
                <Content/>
            </Row>
        </CustomDiv>
    )
}

export default OnePage