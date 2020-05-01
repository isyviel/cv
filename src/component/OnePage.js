import React, { useState } from "react"
import styled from "styled-components"
import { Container} from "@bootstrap-styled/v4"
import Head from './newV/elements/Head'
import Content from './newV/elements/Content'
import Navigation from './newV/elements/Navigation'
import {HEIGHT} from './newV/common/themes/Sizes'
import MiniHead from "./newV/elements/MiniHead"


const CustomDiv = styled(Container)`
    height: ${HEIGHT};
    background: url(images/deco_ronds.png) no-repeat center fixed ;
    font-family: Dosis;
    padding: 0 !important;
    overflow-y : hidden;
`

const OnePage = () => {
    const [isHome,setIsHome] = useState(true)
    const [isContent, setIsContent] = useState(false)
    const [isFormation, setIsFormation] = useState(false)
    const [isExp, setIsExp] = useState(false)
    const [isProject, setIsProject] = useState(false)

    const displayExp = () => {
        setIsContent(true)
        setIsExp(true)
        setIsHome(false)
    }

    const displayFormation = () => {
        setIsContent(true)
        setIsFormation(true)
        setIsHome(false)
    }

    const displayProjects = () => {
        setIsContent(true)
        setIsProject(true)
        setIsHome(false)
    }

    const returnToHome =() => {
        setIsProject(false)
        setIsExp(false)
        setIsFormation(false)
        setIsContent(false)
        setIsHome(true)
    }



    return (
        <CustomDiv fluid data-nosnippet>
                {isHome ? <Head isHome={isHome}/> : <MiniHead isHome={isHome}/>}
                <Content 
                    isExp={isExp}
                    isFormation={isFormation}
                    isProject={isProject}
                    hideContent={returnToHome}
                    contentIsShown={isContent} 
                    goToExpContent={displayExp}
                    goToFormationContent = {displayFormation}
                    goToProjectContent = {displayProjects}/>
                <Navigation/>
        </CustomDiv>
    )
}

export default OnePage