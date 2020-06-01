import React , {useState} from "react"
import {Container} from "@bootstrap-styled/v4/lib"
import styled from "styled-components"
import Contact from './Contact'
import { Slide } from "@material-ui/core"
import Toggle from "./Toggle"
import MinFooter from "../content/MiniFooter"
import Navigation from "../Navigation"

const HomeContainer = styled(Container)`
    height: 100%;
    width: 80px;
    background-color: #272727;
    position: fixed;
    padding: 150px 0 0 0;
    z-index: 2;
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
const MiniHead = ({isContent,isHome,mailToHead,homeToHead,...props}) => {
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
        <Slide timeout={800}  direction="right" in={isContent}>
            <HomeContainer fluid>
                <Contact isHome={isHome} contactForm={mailToHead} returnToHome={homeToHead}/>
                <Toggle footerfromHead={displayFooter}/>
                <MinFooter footerOpen={footerOpen}/>
            </HomeContainer>
        </Slide>
    )
}

export default MiniHead