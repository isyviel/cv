import React from "react"
import {Col} from "@bootstrap-styled/v4/lib"
import { Fade } from "@material-ui/core"
import styled from "styled-components"
import {STRATEGIA, ADRAR, VENTE, ANGLAIS } from "../../common/constantes/home"
import WebSite from "../../common/WebSite"
import Description from "./Description"
import Colors from "../../common/themes/Colors"

const Title = styled.h1`
    color: ${Colors.orange};
    font-family: 'Bangers';
    font-size: 3em;
`
const Skills = styled.h2`
    font-family: 'Bangers';
    margin-top : 20px;
`
const SoftSkills = styled.h3`
    font-family: 'Bangers';
`
const DisplayDetales = ({isContent,isWeb,isSales,isAdrar,isEnglish,...props}) => {

    let title = ""
    let href = ""
    let content = ""
    let skills = ""
    let softSkills = ""
    let description = ""

    if(isWeb) {
        title = STRATEGIA[0]
        href = STRATEGIA[1]
        content = STRATEGIA[2]
        skills = STRATEGIA[3]
        softSkills = STRATEGIA[4]
        description = STRATEGIA[5]
    } else if (isSales) {
        title = VENTE[0]
        skills = VENTE[1]
        softSkills = VENTE[2]
    } else if (isAdrar) {
        title = ADRAR[0]
        href = ADRAR[1]
        content = ADRAR[2]
        skills = ADRAR[3]
        softSkills = ADRAR[4]
    } else if (isEnglish) {
        title = ANGLAIS[0]
        skills = ANGLAIS[1]
        softSkills = ANGLAIS[2]
    }

    return(
    <Fade timeout={800} in={isContent}>
        <Col>
        <div className="text-center mb-4">
            <Title className="h3">{title}</Title>
            <WebSite href={href} content={content}/>
        
            <Skills className="h5">{skills}</Skills>
            <SoftSkills className="h6">{softSkills}</SoftSkills>
        </div>
            <Description content={description}/>
        </Col>
    </Fade>
    )
}

export default DisplayDetales