import React, { useState, useContext, useEffect } from "react"
import styled from "styled-components"
import {Row,Col} from "@bootstrap-styled/v4/lib"
import Formations from './content/Formations'
import Experiences from './content/Experiences'
import Spacer from './common/Spacer'
import Perceval from './common/theme/Perceval'
import Tech from './content/Tech'
import Comp from './content/Competences'
import { SYMFONY, HTML, REACT, ANDROID, JAVA, GIT, BOOTS } from "./common/constantes/logos"
import { EXP, FORMATION, COMPETENCES} from "./common/constantes/texte"



const Content = ({title,content,...props}) => {
    const techno = [SYMFONY,REACT,HTML,BOOTS,ANDROID,JAVA,GIT];
    const competences = COMPETENCES
    return (
        <div className="pr-5 pl-5">
            <Row className="justify-content-around ">{competences.map((comp) => <Comp comp={comp}/>)}</Row>
            <Spacer/>
            <Perceval/>
            <Spacer/>
            <Row>
               {techno.map((tech) => <Tech tech={tech}/>)}
            </Row>
            <Spacer/>
            <Experiences/>
            <Formations/>
        </div>
    )
}

export default Content