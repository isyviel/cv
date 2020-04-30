import React from "react"
import {Container} from "@bootstrap-styled/v4/lib"
import styled from "styled-components"
import Me from '../head/Me'
import Contact from '../head/Contact'
import Quote from '../head/Quote'
import Spacer from '../common/Spacer'

const HomeContainer = styled(Container)`
    height: 100%;
    width: 80px;
    background-color: #272727;
    position: fixed;
    padding-top: 17%;
    z-index: 2;
`
const MiniHead = () => {
    return (
        <HomeContainer fluid>
            <Contact/>
        </HomeContainer>
    
    )
}

export default MiniHead