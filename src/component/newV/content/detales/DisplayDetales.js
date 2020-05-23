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
`
const Skills = styled.h2`
    font-family: 'Bangers';
    margin : 20px 0 10px 0;
`
const SoftSkills = styled.h3`
    font-family: 'Bangers';
    margin : 20px 0 20px 0;
`

const CustomLi = styled.ul`
    list-style-type: none;
    padding-left: 0;
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
        skills = VENTE[1]
        softSkills = VENTE[2]
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
        skills = ANGLAIS[1]
        softSkills = ANGLAIS[2]
        description = ANGList
        src = "images/univ.png"
    }

    return(
    <Fade timeout={800} in={isContent}>
        <Col>
            <Row className="justify-content-between align-items-center ml-0">
                <Title className="h3">{title}</Title>
                <Logo src={src}/>
            </Row>
            <WebSite href={href} content={content}/>
        
            <Skills className="h5">{skills}</Skills>
            <SoftSkills className="h6">{softSkills}</SoftSkills>
            <article>
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