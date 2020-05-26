import React from "react"
import {Col,Row} from "@bootstrap-styled/v4/lib"
import { Fade } from "@material-ui/core"
import styled from "styled-components"
import {STRATEGIA, ADRAR, VENTE, ANGLAIS, STRList, VList, AList, ANGList } from "../../common/constantes/home"
import WebSite from "../../common/WebSite"
import Description from "./Description"
import Colors from "../../common/themes/Colors"
import Logo from "../../common/Logo"
import Container from "@bootstrap-styled/v4/lib/Container"

const Title = styled.h1`
    color: ${Colors.orange};
    font-family: 'Bangers';
    font-size: 3em;

    @media screen and (max-width:992px) {
        font-size: 2em;
    }
    @media screen and (max-width:768px) {
        font-size: 26px;
    }
    @media screen and (max-width:576px) {
        font-size: 20px;
        text-align: center;
        margin-top: 15px;
    }
`
const Skills = styled.h2`
    font-family: 'Bangers';
    margin : 20px 0 10px 15px;
    @media screen and (max-width:576px) {
        font-size: 16px;
        text-align: center;
    }
`
const SoftSkills = styled.h3`
    font-family: 'Bangers';
    margin : 20px 0 20px 15px;
    @media screen and (max-width:576px) {
        text-align: center;
    }
`

const CustomLi = styled.ul`
    list-style-type: none;
    padding-left: 0;
    @media screen and (max-width:576px) {
        margin-left: 10px;
    }
`
const Text = styled.p`
    color: ${Colors.orange};
    margin: 0;
    @media screen and (max-width:576px) {
        text-align: center;
    }
`

const DisplayDetales = ({isContent,isWeb,isSales,isAdrar,isEnglish,...props}) => {

    let title = ""
    let href = ""
    let content = ""
    let skills = ""
    let softSkills = ""
    let description = []
    let src = ""

    if(isWeb) {
        title = STRATEGIA[0]
        href = STRATEGIA[1]
        content = STRATEGIA[2]
        skills = STRATEGIA[3]
        softSkills = STRATEGIA[4]
        description = STRList
        src = "images/strategia.png"
    } else if (isSales) {
        title = VENTE[0]
        content = VENTE[1]
        skills = VENTE[2]
        softSkills = VENTE[3]
        description = VList
        src = "images/MIM.jpg"
    } else if (isAdrar) {
        title = ADRAR[0]
        href = ADRAR[1]
        content = ADRAR[2]
        skills = ADRAR[3]
        softSkills = ADRAR[4]
        description = AList
        src = "images/adrar.png"
    } else if (isEnglish) {
        title = ANGLAIS[0]
        content= ANGLAIS[1]
        skills = ANGLAIS[2]
        softSkills = ANGLAIS[3]
        description = ANGList
        src = "images/univ.png"
    }

    return(
    <Fade timeout={800} in={isContent}>
        <Col>
            <Row className="justify-content-sm-between justify-content-center align-items-start ml-0">
                <Col>
                    <Title className="h3">{title}</Title>
                    <Row className="justify-content-center justify-content-sm-start">
                        <WebSite href={href} content={content} isSales={isSales} isEnglish={isEnglish}/>
                    </Row>
                    {isAdrar &&(<Text>2020</Text>)}
                    {isWeb &&(<Text>2020</Text>)}
                </Col>
                <Logo src={src}/>
            </Row>
            <Skills className="h5">{skills}</Skills>
            <SoftSkills className="h6">{softSkills}</SoftSkills>
            <article className="ml-1 ml-sm-3">
                <CustomLi>
                   {description.map((element,index) => {
                        return(
                            <Description content={element} key={index}/>
                        )
                    })} 
                </CustomLi>
            </article>
        </Col>
    </Fade>
    )
}

export default DisplayDetales