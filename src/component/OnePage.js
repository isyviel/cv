import React from "react"
import styled from "styled-components"
import { Container } from "@bootstrap-styled/v4"
import Head from './Head'
import Content from './Content'
import Spacer from './common/Spacer'
import Technos from './Technos'

const CustomDiv = styled(Container)`
    margin: 0;
    padding: 0;
    background: url(images/fondfond.png)  no-repeat center fixed ;
    background-size: cover;
    -webkit-background-size: cover;
`

const OnePage = () => {

    return (
        <CustomDiv fluid>
            <Head/>
            <Technos/>
            <Spacer/>
            <Content/>
        </CustomDiv>
    )
}

export default OnePage