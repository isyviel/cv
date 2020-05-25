import React, { useState } from "react"
import styled from "styled-components"
import { Container} from "@bootstrap-styled/v4"
import Head from './head/Head'
import Content from './content/Content'
import Navigation from './Navigation'
import MiniHead from "./head/MiniHead"
import Name from "./Name"


const CustomDiv = styled(Container)`
    background: url(images/deco_ronds.png) fixed center no-repeat;
    height: 958px;
    font-family: Dosis;
    padding: 0 !important;
    overflow-y : hidden;
    overflow-x: hidden;
    @media screen and (max-width:576px) {
        height: 700px;
    }
`

const OnePage = () => {

    /**
     * TO DO : responsive
     * bouton envoi des mail donne un slide avce formulaire
     * bouton fleche navigation passe a catégorie suivante
     * portfolio a personnaliser
     */
    const [isHome,setIsHome] = useState(true)
    const [isContent, setIsContent] = useState(false)
    const [isFormation, setIsFormation] = useState(false)
    const [isExp, setIsExp] = useState(false)
    const [isProject, setIsProject] = useState(false)
    const [isMail, setIsMail] = useState(false)

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

    return (
        <CustomDiv fluid data-nosnippet>
                {isHome ? <Head isHome={isHome} mailToHead={displayMailForm}/> : <MiniHead isHome={isHome} mailToHead={displayMailForm} homeToHead={returnToHome}/>}
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
                    isHome={isHome}/>
                <Navigation displayNext={showDetales}/>
        </CustomDiv>
    )
}

export default OnePage