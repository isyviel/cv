import React from "react"
import styled from "styled-components"
import { Container,Row } from "@bootstrap-styled/v4"
import Head from './Head'
import Content from './Content'
import Navigation from "./newV/content/Navigation"
import {HEIGHT} from './newV/common/themes/Sizes'

const CustomDiv = styled(Container)`
    height: ${HEIGHT};
    background: url(images/deco_ronds.png) no-repeat center fixed ;
    font-family: Dosis;
    padding: 0 !important;
    overflow-y : hidden;
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