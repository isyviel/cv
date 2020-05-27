import React, { useState } from "react"
import styled from "styled-components"
import { Container} from "@bootstrap-styled/v4"
import Head from './head/Head'
import Content from './content/Content'
import Navigation from './Navigation'
import MiniHead from "./head/MiniHead"
import Name from "./Name"



const CustomDiv = styled(Container)`
    background: url(images/deco.png) fixed bottom no-repeat;
    height: 958px;
    font-family: Dosis;
    padding: 0 !important;
    overflow-y : hidden;
    overflow-x: hidden;
`

const OnePage = () => {

    const [isHome,setIsHome] = useState(true)
    const [isContent, setIsContent] = useState(false)
    const [isFormation, setIsFormation] = useState(false)
    const [isExp, setIsExp] = useState(false)
    const [isProject, setIsProject] = useState(false)
    const [isMail, setIsMail] = useState(false)
    const [open, setOpen] = useState(false)
    
    const displayFooter = () => {
        console.log(open, "open")
        if(open) {
            setOpen(false)
        } else {
            setOpen(true)
        }
    }
    const closeFooter = () => {
        setOpen(false)
    }

    const displayMailForm = () => {
        setIsMail(true)
        setIsContent(true)
        setIsHome(false)
        setIsProject(false)
        setIsExp(false)
        setIsFormation(false)
    }

    const displayExp = () => {
        setIsContent(true)
        setIsExp(true)
        setIsHome(false)
        setIsMail(false)
        setIsProject(false)
        setIsFormation(false)
    }

    const displayFormation = () => {
        setIsContent(true)
        setIsFormation(true)
        setIsHome(false)
        setIsExp(false)
        setIsMail(false)
        setIsProject(false)
    }

    const displayProjects = () => {
        setIsFormation(false)
        setIsMail(false)
        setIsContent(true)
        setIsProject(true)
        setIsHome(false)
        setIsExp(false)
    }

    const returnToHome =() => {
        setIsProject(false)
        setIsExp(false)
        setIsFormation(false)
        setIsContent(false)
        setIsHome(true)
        setIsMail(false)
    }


    const showDetales = () => {
        setIsHome(false)
        setIsContent(true)
        if(isExp){
            displayFormation()
        }else if (isFormation) {
            displayProjects()
        } else if (isProject) {
            displayMailForm()
        } else {displayExp()
        }
    }
    const showPrevious = () => {
        setIsHome(false)
        setIsContent(true)
        if(isExp){
            displayMailForm()
        }else if (isFormation) {
            displayExp()
        } else if (isProject) {
            displayFormation()
        } else if (isMail){
            displayProjects()
        } else {displayMailForm()}
    }

    return (
        <CustomDiv fluid data-nosnippet>
                {isHome ? <Head isHome={isHome} mailToHead={displayMailForm} footerfromHead={displayFooter}/> : <MiniHead isHome={isHome} mailToHead={displayMailForm} homeToHead={returnToHome} footerfromHead={displayFooter}/>}
                <Name isHome={isHome} isContent={isContent}/>
                {/* <Navigation displayNext={showDetales} displayPrevious={showPrevious}/> */}
                <Content
                    isMail = {isMail}
                    isExp={isExp}
                    isFormation={isFormation}
                    isProject={isProject}
                    hideContent={returnToHome}
                    contentIsShown={isContent} 
                    goToExpContent={displayExp}
                    goToFormationContent = {displayFormation}
                    goToProjectContent = {displayProjects}
                    goToMailForm = {displayMailForm}
                    isHome={isHome}
                    open={open}
                    notFooter={closeFooter}/>
        </CustomDiv>
    )
}

export default OnePage