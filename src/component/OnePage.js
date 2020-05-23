import React, { useState } from "react"
import styled from "styled-components"
import { Container} from "@bootstrap-styled/v4"
import Head from './newV/elements/Head'
import Content from './newV/elements/Content'
import Navigation from './newV/elements/Navigation'
import MiniHead from "./newV/elements/MiniHead"
import Name from "./newV/content/Name"


const CustomDiv = styled(Container)`
    background: url(images/deco_ronds.png) fixed center no-repeat;
    height: 958px;
    font-family: Dosis;
    padding: 0 !important;
    overflow-y : hidden;
    overflow-x: hidden;
    @media screen and (max-width:576px) {
        height: 100%;
    }
`

const OnePage = () => {

    /**
     * TO DO : responsive
     * bouton envoi des mail donne un slide avce formulaire
     * bouton fleche navigation passe a catégorie suivante
     * portfolio a personnaliser
     */
    const [isHome,setIsHome] = useState(false)
    const [isContent, setIsContent] = useState(true)
    const [isFormation, setIsFormation] = useState(false)
    const [isExp, setIsExp] = useState(true)
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
                {isHome ? <Head isHome={isHome} mailToHead={displayMailForm}/> : <MiniHead isHome={isHome} homeToHead={returnToHome}/>}
                <Name isHome={isHome}/>
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