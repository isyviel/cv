import React, { useState } from "react"
import {Container,Col} from "@bootstrap-styled/v4/lib"
import styled from "styled-components"
import Me from './Me'
import Contact from './Contact'
import Quote from './Quote'
import Spacer from '../common/Spacer'
import { Slide, Button } from "@material-ui/core"
import Name from "../Name"
import Footer from "./Footer"
import ImageButton from "../common/ImageButton"

const HomeContainer = styled(Container)`
    height: 100%;
    width: 450px;
    background-color: #272727;
    position: fixed;
    padding: 50px 0 0 70px !important;
    z-index: 1;

    @media screen and (max-width:1200px) {
       width:350px;
       padding: 50px 0 0 45px !important;
    }
    @media screen and (max-width:992px) {
        width:150px;
        padding: 45px 0 0 35px !important;
    }

    @media screen and (max-width:768px) {
        width:100px;
        padding: 50px 0 0 15px !important;
    }
    @media screen and (max-width:576px) {
        width: 40px;
        padding: 100px 0 0 2px !important;
    }

    
`
const Head = ({isHome,mailToHead, footerfromHead, ...props}) => {

    return (
        <Slide timeout={800}  direction="right" in={isHome}>
            <HomeContainer fluid>
                <Me/>
                <Spacer/>
                <Contact isHome={isHome} contactForm={mailToHead} goToFooter={footerfromHead} />
                <Spacer/>
                <Spacer/>
                <Quote/>
                <Spacer/>
                <Spacer/>
                <Button className="pt-4 mt-4 pl-0" onClick={footerfromHead} size="small" rel="noopener noreferrer">
                    <ImageButton src="images/menu.png"/>
                </Button>
            </HomeContainer>
        </Slide>
    )
}

export default Head