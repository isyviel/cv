import React from "react"
import {Container} from "@bootstrap-styled/v4/lib"
import styled from "styled-components"
import Me from '../head/Me'
import Contact from '../head/Contact'
import Quote from '../head/Quote'
import Spacer from '../common/Spacer'

const HomeContainer = styled(Container)`
    height: 100%;
    width: 500px;
    background: url(images/fond.png) no-repeat left top fixed;
    position: fixed;
    padding: 50px 0 0 0 !important;
`
const Head = () => {
    return (
        <HomeContainer fluid>
            <Me/>
            <Spacer/>
            <Contact/>
            <Spacer/>
            <Quote/>
        </HomeContainer>
    
    )
}

export default Head