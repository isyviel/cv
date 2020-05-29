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
import Biker from "../../common/img/ImgBiker"
import useWindowSize from "../../common/hook/size"
import { STRATEGIA, ADRAR, VENTE, ANGLAIS, STRList, VList, AList, ANGList } from "../../common/constantes/home"

const Cross = styled.img`
    cursor: pointer;
    width: 20px;
    margin-right: 20px;
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
const Detales = ({viewDetales, closeSlide,isExp,isFormation,isProject,isMail,isHome, exp,diplome,projects,mail,...props}) => {

    const {h,w}  = useWindowSize();

    const DetalesContainer =  styled(Container)`
        min-width: 87%;
        background: linear-gradient(90deg,rgb(255, 255, 255) 0%,rgba(255, 255, 255,0) 100%);
        margin: 30px 0 0 0;
        padding: 0 0 0 8%;
        font-size: 16px;
        z-index: 1;
        height: ${h - 150}px;
    
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
        <Slide timeout={800} in={viewDetales} direction="left">    
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
                    {/* <Biker alt="personnage en tenue motard réfléchit" src="images/think_opt.png"/> */}
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