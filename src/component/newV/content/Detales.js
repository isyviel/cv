import React, {useState} from "react"
import {Container,Row} from "@bootstrap-styled/v4/lib"
import styled from "styled-components"
import { Slide} from "@material-ui/core"
import Projects from "./detales/Projects"
import SendMail from "./detales/SendMail"
import Colors from "../common/themes/Colors"
import DetalesMenu from "./detales/DetalesMenu"
import DisplayDetales from "./detales/DisplayDetales"
import { Fade } from "@material-ui/core"

const DetalesContainer =  styled(Container)`
    height: 80%;
    min-width: 87%;
    background: linear-gradient(90deg,rgb(255, 255, 255) 0%,rgba(255, 255, 255,0) 100%);
    margin: 0;
    padding: 0 5% 3% 8%;
    font-size: 16px;
    z-index: 1;
`
const Cross = styled.img`
    cursor: pointer;
    width: 20px;
`

const CategoryTitle = styled.h1`
    font-family: 'Bangers';
    font-size: 2em;
`

const Detales = ({viewDetales, closeSlide,isExp,isFormation,isProject,isMail,isHome, exp,diplome,projects,mail,...props}) => {

    const [isWeb, setIsWeb] = useState(true)
    const [isSales, setIsSales] = useState(false)
    const [isEng, setIsEng] = useState(false)
    const [isAdrar, setIsAdrar] = useState(true)

    const displaySales = () => {
        setIsSales(true)
        setIsWeb(false) 
    }

    const displayWeb = () => {
        setIsWeb(true)
        setIsSales(false)
    }
    
    const displayEnglish = () => {
        setIsEng(true)
        setIsAdrar(false)
    }

    const displayAdrar = () => {
        setIsAdrar(true)
        setIsEng(false)
    }

    return(
            <Slide timeout={800} in={viewDetales} out={isHome} direction="left">
                <DetalesContainer>
                    <Row className="justify-content-end">
                        <Cross onClick={closeSlide} src="images/croix.png" alt="croix"/>
                    </Row>
                    <CategoryTitle>
                        {isExp &&(exp)}
                        {isFormation &&(diplome)}
                        {isProject && (projects)}
                        {isMail &&(mail)}
                    </CategoryTitle>
                    
                        {isExp &&(
                            <Row>
                                <DetalesMenu displaySales={displaySales} displayWeb={displayWeb} isExp={isExp}/>
                                    {isWeb && (<DisplayDetales isContent={isWeb} isWeb={isWeb}/>)}
                                    {isSales && (<DisplayDetales isContent={isSales} isSales={isSales}/>)}
                            </Row>
                        )}

                        {isFormation &&(
                            <Row>
                                <DetalesMenu displayEnglish={displayEnglish} displayAdrar={displayAdrar}/>
                                {isAdrar && (<DisplayDetales isContent={isAdrar} isAdrar={isAdrar}/>)}
                                {isEng &&(<DisplayDetales isContent={isEng} isEnglish={isEng}/>)}
                            </Row>
                        )}
                    
                        {isProject &&(
                            <Row>
                                <Projects isProject={isProject}/>
                            </Row>
                        )}

                        {isMail &&(
                            <SendMail/>
                        )}
                 
                </DetalesContainer>
            </Slide>
    )
}

export default Detales