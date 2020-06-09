import React from "react"
import {Container} from "@bootstrap-styled/v4/lib"
import styled from "styled-components"
import Contact from './contact/ContactList'
import { Slide } from "@material-ui/core"
import Toggle from "./Toggle"
import MinFooter from "../content/footer/MiniFooter"

const HomeContainer = styled(Container)`
    height: 100%;
    width: 80px;
    background-color: #272727;
    position: fixed;
    padding: 150px 0 0 0;
    z-index: 0;
    display: flex;
    justify-content: space-between;
    flex-direction: column;
    align-items: center;

    @media screen and (max-width:1200px) {
        margin: 0 !important;
    }
    @media screen and (max-width:992px) {
        margin: 0 !important;
        padding: 150px 0 0 0;
    }

    @media screen and (max-width:768px) {
        width:100px;
        padding: 150px 0 0 0 !important;
    }
    @media screen and (max-width:576px) {
        width: 40px;
        padding: 150px 0 0 0 !important;
    }
`
const MiniHead = ({isContent,isHome,mailToHead,homeToHead,footerFromPage,footerOpen,...props}) => {
    return (
        <Slide timeout={800}  direction="right" in={isContent}>
            <HomeContainer fluid>
                <Contact isHome={isHome} contactForm={mailToHead} returnToHome={homeToHead}/>
                <Toggle isHome={isHome} footerfromHead={footerFromPage}/>
                {footerOpen &&(<MinFooter footerOpen={footerOpen}/>)}
            </HomeContainer>
        </Slide>
    )
}

export default MiniHead