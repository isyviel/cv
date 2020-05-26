import React, {useState} from "react"
import {Container,Row,Col} from "@bootstrap-styled/v4/lib"
import styled from "styled-components"
import { Slide} from "@material-ui/core"
import Projects from "./Projects"
import SendMail from "./SendMail"
import Colors from "../../common/themes/Colors"
import DetalesMenu from "./DetalesMenu"
import DisplayDetales from "./DisplayDetales"
import { Fade } from "@material-ui/core"

const Cross = styled.img`
    cursor: pointer;
    width: 20px;
    margin-right: 20px;
`
const DetalesContainer =  styled(Container)`
    height: 80%;
    min-width: 87%;
    background: linear-gradient(90deg,rgb(255, 255, 255) 0%,rgba(255, 255, 255,0) 100%);
    margin: 0;
    padding: 0 0 3% 8%;
    font-size: 16px;
    z-index: 1;

    @media screen and (max-width:992px) {
        margin-left: 2%;
        padding: 0 0 3% 8%;
        max-width: 95%;
    }
    @media screen and (max-width:768px) {
        margin-left: 5%;
        padding: 0 5% 3% 8%;
    }
    @media screen and (max-width:576px) {
        margin-left: 0;
        height: 100%;
        padding: 0 0 3% 10%;
    }
`
const CategoryTitle = styled.h1`
    font-family: 'Bangers';
    font-size: 2em;
    @media screen and (max-width:992px) {
        font-size: 24px;
        margin-left: 10px;
    }
    @media screen and (max-width:768px) {
        margin-left: 5%;
    }
    @media screen and (max-width:576px) {
        font-size: 20px;
        text-align: center;
        margin: 0;
    }
`

const Square = styled(Container) `
    margin-bottom: 40px;
    width: 50px;
    border-radius: 5px;
    height: 2px;
    background: ${Colors.darkGrey};
    z-index: 1;
`
 const CustomImg = styled.img `
        height: 200px;
        z-index: 2;
        @media screen and (max-width:768px) {
            height: 150px;
        }
        @media screen and (max-width:576px) {
            height: 50px;
        }
    `
const Detales = ({viewDetales, closeSlide,isExp,isFormation,isProject,isMail,isHome, exp,diplome,projects,mail,...props}) => {

   

    const [isWeb, setIsWeb] = useState(true)
    const [isSales, setIsSales] = useState(false)
    const [isEng, setIsEng] = useState(false)
    const [isAdrar, setIsAdrar] = useState(true)
    let src = ""

    if (isFormation) {
        src = "images/livre.png"
    } else if (isExp) {
        src = "images/ordi.png"
    } else if (isProject) {
        src= "images/think.png"
    }

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
                            <Row className="ml-sm-3">
                                <DetalesMenu displaySales={displaySales} displayWeb={displayWeb} isExp={isExp} isSales={isSales} isWeb={isWeb}/>
                                {isWeb && (<DisplayDetales isContent={isWeb} isWeb={isWeb}/>)}
                                {isSales && (<DisplayDetales isContent={isSales} isSales={isSales}/>)}
                            </Row>
                        
                        )}

                        {isFormation &&(
                            <Row className="ml-sm-3">
                                <DetalesMenu displayEnglish={displayEnglish} displayAdrar={displayAdrar} isEng={isEng} isAdrar={isAdrar}/>
                                {isAdrar && (<DisplayDetales isContent={isAdrar} isAdrar={isAdrar}/>)}
                                {isEng &&(<DisplayDetales isContent={isEng} isEnglish={isEng}/>)}
                            </Row>

                        )}
                    
                        {isProject &&(
                            <Row className="ml-sm-2">
                                <Projects isProject={isProject}/>
                            </Row>
                        )}

                        {isMail &&(
                            <SendMail/>
                        )}
                        
                        <CustomImg src={src}/>
                        
                </DetalesContainer>
            </Slide>
    )
}

export default Detales