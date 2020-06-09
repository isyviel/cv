import React, { useState } from "react"
import styled from "styled-components"
import { Container} from "@bootstrap-styled/v4"
import Head from './head/Head'
import Content from './content/Content'
import MiniHead from "./head/MiniHead"
import Name from "./Name"
import useWindowSize from "./common/hook/size"

const OnePage = () => {

    const [isHome,setIsHome] = useState(true)
    const [isContent, setIsContent] = useState(false)
    const [isFormation, setIsFormation] = useState(false)
    const [isExp, setIsExp] = useState(false)
    const [isProject, setIsProject] = useState(false)
    const [isMail, setIsMail] = useState(false)
    const {h} = useWindowSize()

    const CustomDiv = styled(Container)`
        height: ${h}px;
        background: url(images/deco.png) fixed bottom no-repeat;
        font-family: Dosis;
        padding: 0 !important;
        overflow-x: hidden;
    `

    const displayContent = () => {
        if(!isContent) {
            setIsContent(true)
        }
    }

    const displayMailForm = () => {
        displayContent()
        setIsMail(true)
        setIsHome(false)
        setIsProject(false)
        setIsExp(false)
        setIsFormation(false)
    }

    const displayExp = () => {
        displayContent()
        
        setIsExp(true)
        setIsHome(false)
        setIsMail(false)
        setIsProject(false)
        setIsFormation(false)
    }

    const displayFormation = () => {
        displayContent()
        setIsFormation(true)
        setIsHome(false)
        setIsExp(false)
        setIsMail(false)
        setIsProject(false)
    }

    const displayProjects = () => {
        displayContent()
        setIsFormation(false)
        setIsMail(false)
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


    const showNext = () => {
        setIsHome(false)
        displayContent()
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
        displayContent()
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
            <Head isHome={isHome} mailToHead={displayMailForm}/>   
            <MiniHead isContent={isContent} isHome={isHome} mailToHead={displayMailForm} homeToHead={returnToHome}/>
            <Name isHome={isHome} isContent={isContent}/>
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
                showNext={showNext}
                showPrevious={showPrevious}
                id='content'/>
        </CustomDiv>
    )
}

export default OnePage