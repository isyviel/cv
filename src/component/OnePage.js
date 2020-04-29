import React from "react"
import styled from "styled-components"
import { Container} from "@bootstrap-styled/v4"
import Head from './newV/elements/Head'
import Content from './newV/elements/Content'
import Navigation from './newV/elements/Navigation'
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