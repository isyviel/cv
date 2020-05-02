import React from "react"
import {Container} from "@bootstrap-styled/v4/lib"
import styled from "styled-components"
import Me from '../head/Me'
import Contact from '../head/Contact'
import Quote from '../head/Quote'
import Spacer from '../common/Spacer'
import { Slide } from "@material-ui/core"

const HomeContainer = styled(Container)`
    height: 100%;
    width: 500px;
    background: url(images/fond.png) no-repeat left top fixed;
    position: fixed;
    padding: 50px 0 0 70px !important;
`
const Head = ({isHome,...props}) => {

 
    return (
        <Slide timeout={800}  direction="right" in={isHome}>
            <HomeContainer fluid>
                <Me/>
                <Spacer/>
                <Contact isHome={isHome}/>
                <Spacer/>
                <Quote/>
            </HomeContainer>
        </Slide>
    )
}

export default Head