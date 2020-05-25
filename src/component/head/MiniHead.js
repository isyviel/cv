import React from "react"
import {Container} from "@bootstrap-styled/v4/lib"
import styled from "styled-components"
import Contact from './Contact'
import { Slide } from "@material-ui/core"

const HomeContainer = styled(Container)`
    height: 100%;
    width: 80px;
    background-color: #272727;
    position: fixed;
    padding-top: 17%;
    z-index: 2;
    @media screen and (max-width:1200px) {
        margin: 0 !important;
        padding-left: 20px; !important;
    }

    @media screen and (max-width:992px) {
        padding: 290px 0 0 0 !important;
    }

    @media screen and (max-width:768px) {
        width:100px;
        background-color: #272727;
        padding: 50px 0 0 15px !important;
    }
    @media screen and (max-width:576px) {
       
        width: 40px;
        background-color: #272727;
        padding: 100px 0 0 2px !important;

    }
`
const MiniHead = ({isHome,mailToHead,homeToHead,...props}) => {
    return (
        <Slide timeout={800}  direction="right" in={!isHome}>
            <HomeContainer fluid>
                <Contact isHome={isHome} contactForm={mailToHead} returnToHome={homeToHead}/>
            </HomeContainer>
        </Slide>
    )
}

export default MiniHead