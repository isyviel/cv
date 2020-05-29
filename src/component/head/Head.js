import React, { useState } from "react"
import {Container,Col} from "@bootstrap-styled/v4/lib"
import styled from "styled-components"
import Me from './Me'
import Contact from './Contact'
import Quote from './Quote'
import Spacer from '../common/Spacer'
import { Slide, Button } from "@material-ui/core"
import Name from "../Name"
import Footer from "../content/Footer"
import ImageButton from "../common/img/ImageButton"
import Toggle from "./Toggle"

const HomeContainer = styled(Container)`
    height: 100%;
    width: 450px;
    background-color: #272727;
    position: fixed;
    padding: 50px 0 0 70px !important;
    z-index: 1;
    display: inline-flex;
    justify-content: space-between;
    flex-direction: column;

    @media screen and (max-width:1200px) {
       width:350px;
       padding: 50px 0 0 45px !important;
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
        padding: 100px 0 0 2px !important;
    }

    
`
const Head = ({isHome,mailToHead, footerfromHead, ...props}) => {

    const [footerOpen, setFooterOpen] = useState(false)

    const displayFooter = () => {
        console.log(footerOpen, "open")
        if(footerOpen) {
            setFooterOpen(false)
        } else {
            setFooterOpen(true)
        }
    }

    return (
        <Slide timeout={800}  direction="right" in={isHome}>
            <HomeContainer fluid>
                <Me title="avatar" />
                <Contact isHome={isHome} contactForm={mailToHead} goToFooter={footerfromHead} />
                <Quote/>
                <Toggle footerfromHead={displayFooter}/>
                <Footer footerOpen={footerOpen} isHome={isHome}/>
            </HomeContainer>
        </Slide>
    )
}

export default Head