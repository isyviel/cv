import React from "react"
import styled from "styled-components"
import { Container,Col,Row } from "@bootstrap-styled/v4"
import Head from './Head'
import Content from './Content'
import SmallSpacer from './common/SmallSpacer'
import Technos from './Technos'
import Footer from './Footer'

const CustomDiv = styled(Container)`
    margin: 0;
    padding: 0;
    background: url(images/deco_ronds.png) no-repeat center fixed ;
    background-size: 35%;
    overflow-y: hidden;

`

const OnePage = () => {

    return (
        <CustomDiv fluid data-nosnippet>
            <Row>
                <Head/>
                <Content/>
                
            </Row>
        </CustomDiv>
    )
}

export default OnePage