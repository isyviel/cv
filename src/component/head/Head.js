import React from "react"
import {Container} from "@bootstrap-styled/v4/lib"
import styled from "styled-components"
import Me from './Me'
import Contact from './contact/ContactList'
import Quote from './Quote'
import { Slide } from "@material-ui/core"
import Footer from "../content/footer/Footer"
import Toggle from "./Toggle"

const HomeContainer = styled(Container)`
    height: 100%;
    width: 450px;
    background-color: #272727;
    position: fixed;
    padding: 50px 0 0 0 !important;
    display: inline-flex;
    justify-content: space-between;
    align-items: center;
    flex-direction: column;
    z-index: 1;

    @media screen and (max-width:1200px) {
       width:350px;
       padding: 50px 0 0 0 !important;
    }
    @media screen and (max-width:992px) {
        width:150px;
        padding: 45px 0 0 0 !important;
    }

    @media screen and (max-width:768px) {
        width:100px;
        padding: 50px 0 0 0 !important;
    }
    @media screen and (max-width:576px) {
        width: 40px;
        padding: 100px 0 0 0 !important;
    }
`

const Head = ({isHome,mailToHead,footerFromPage,footerOpen,...props}) => {
    return (
        <Slide timeout={800}  direction="right" in={isHome}>
            <HomeContainer fluid>
                <Me title="avatar" />
                <Contact isHome={isHome} contactForm={mailToHead} />
                <Quote/>
                <Toggle isHome={isHome} footerfromHead={footerFromPage}/>
                <Footer footerOpen={footerOpen} isHome={isHome}/>
            </HomeContainer>
        </Slide>
    )
}

export default Head