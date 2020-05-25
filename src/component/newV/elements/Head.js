import React from "react"
import {Container,Col} from "@bootstrap-styled/v4/lib"
import styled from "styled-components"
import Me from '../head/Me'
import Contact from '../head/Contact'
import Quote from '../head/Quote'
import Spacer from '../common/Spacer'
import { Slide } from "@material-ui/core"
import Name from "../content/Name"

const HomeContainer = styled(Container)`
    height: 100%;
    width: 500px;
    background-color: #272727;
    position: fixed;
    padding: 50px 0 0 70px !important;
    z-index: 1;

    @media screen and (max-width:576px) {
        height: 100%;
        width: 40px;
        background-color: #272727;
        padding: 100px 0 0 2px !important;

    }
`
const Head = ({isHome,mailToHead,...props}) => {

 
    return (
        <Slide timeout={800}  direction="right" in={isHome}>
            <HomeContainer fluid>
                <Me/>
                <Spacer/>
                <Contact isHome={isHome} contactForm={mailToHead}/>
                <Spacer/>
                <Quote/>
            </HomeContainer>
        </Slide>
    )
}

export default Head