import React from "react"
import {Row} from "@bootstrap-styled/v4/lib"
import Contact from './head/Contact'
import styled from "styled-components"
import AboutMe from './head/AboutMe'

import { Container } from "@bootstrap-styled/v4"

const GlobalDiv = styled(Container)`
    display: flex;
    justify-content: center;
`

const Head = () => {
    return (
    <GlobalDiv fluid>
        <Contact/>
        <Row>
            <AboutMe/>
        </Row>
    </GlobalDiv>
    )
}

export default Head