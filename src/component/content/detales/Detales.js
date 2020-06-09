import React, {useState} from "react"
import {Container,Row} from "@bootstrap-styled/v4/lib"
import styled from "styled-components"
import Projects from "./Projects"
import SendMail from "./SendMail"
import DetalesMenu from "./DetalesMenu"
import DisplayDetales from "./DisplayDetales"
import Biker from "../../common/img/ImgBiker"
import useWindowSize from "../../common/hook/size"
import { STRATEGIA, ADRAR, VENTE, ANGLAIS, STRList, VList, AList, ANGList, HEAD } from "../../common/constantes/home"
import Arrow from "../../common/Arrow"
import { Fade, Slide } from "@material-ui/core";
import Cross from "../../common/Cross"
import CategoryTitle from "./CategoryTitle"

const DetalesContainer =  styled(Container)`
    height: 
    ${() => {const {h} = useWindowSize()
            return h-70}}px;
    background: linear-gradient(90deg,rgb(255, 255, 255) 0%,rgba(255, 255, 255,0) 100%);
    padding: 2% 5% 2% 8%;
    font-size: 16px;
    z-index: 1;
    @media screen and (max-width:992px) {
        margin-left: 2%;
        padding: 3% 5% 3% 8%;
    }
    @media screen and (max-width:768px) {
        margin-left: 5%;
        padding: 3% 5% 3% 8%;
    }
    @media screen and (max-width:576px) {
        margin: 0;
        height: 100%;
        padding: 4% 0 3% 10%;
    }

`

const Detales = ({viewDetales, closeSlide,isExp,isFormation,isProject,isMail,isHome, exp,diplome,projects,mail,showNext, showPrevious,goSlide,menu,...props}) => {

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
        <Slide in={viewDetales} timeout={800} direction="left">
            <DetalesContainer fluid>
                <Row className="justify-content-end">
                    <Cross onClick={closeSlide} src="images/croix.png" alt="croix"/>
                </Row>
                <Row className="justify-content-center align-items-center mb-1 mb-sm-4">
                    <Arrow src="images/flecheg.png" alt="fleche vers la gauche" onClick={showPrevious}/>
                    <Fade in={viewDetales} timeout={800}>
                        <CategoryTitle isExp={isExp} isFormation={isFormation} isProject={isProject}/>
                    </Fade>
                    <Arrow src="images/fleche.png" alt="fleche vers la droite" onClick={showNext}/>
                </Row>
                {isExp &&(
                    <>
                        <Row className="ml-sm-3">
                            <DetalesMenu displaySales={displaySales} displayWeb={displayWeb} isExp={isExp} isSales={isSales} isWeb={isWeb}/>
                                {isWeb ? 
                                <DisplayDetales isContent={isWeb} detales={STRATEGIA} description={STRList} isWeb={isWeb}/> :
                                <DisplayDetales isContent={isSales} isSales={isSales} detales={VENTE} description={VList}/>}
                        </Row>
                        <Biker alt="personnage en tenue motard sur ordinateur" src="images/ordi_opt.png"/>
                    </>
                )} 
                {isFormation &&(
                    <>
                        <Row className="ml-sm-3">
                            <DetalesMenu displayEnglish={displayEnglish} displayAdrar={displayAdrar} isEng={isEng} isAdrar={isAdrar}/>
                            {isAdrar ? 
                            <DisplayDetales isContent={isAdrar} detales={ADRAR} description={AList} isAdrar={isAdrar}/>:
                            <DisplayDetales isContent={isEng} detales={ANGLAIS} description={ANGList} isEnglish={isEng}/>}
                        </Row>
                        <Biker alt="personnage en tenue motard avec livre" src="images/livre_opt.png"/>
                    </>
                )} 
                {isProject &&(
                    <>
                        <Row className="ml-sm-2">
                            <Projects isProject={isProject}/>
                        </Row>
                        <Biker alt="personnage en tenue motard réfléchit" src="images/think_opt.png"/>
                    </>
                )}
                {isMail &&(
                    <SendMail/>
                )}
            </DetalesContainer>
        </Slide>
    )
}

export default Detales