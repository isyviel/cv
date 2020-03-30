import React, { useState, useContext, useEffect } from "react"
import {Row,Col} from "@bootstrap-styled/v4/lib"
import Me from './head/Me'
import Contact from './head/Contact'
import styled from "styled-components"
import { EXP, FORMATION, COMPETENCES} from "./common/constantes/texte"
import Comp from './content/Competences'
import AboutMe from './head/AboutMe'
import Tech from './content/Tech'
import { Container } from "@bootstrap-styled/v4"
import { SYMFONY, HTML, REACT, ANDROID, JAVA, GIT, BOOTS } from "./common/constantes/logos"
import Spacer from './common/Spacer'
import FondFleches from './common/FondFleches'

const GlobalDiv = styled(Container)`
    display: flex;
    justify-content: center;
`

const Logos = styled(Row)`
   display: flex;
   justify-content: flex-start;
`
  const CustomDiv = styled.div`


  `
const Head = ({isForm,...props}) => {
    const techno = [SYMFONY,REACT,ANDROID,JAVA,GIT];
    const competences = COMPETENCES
    return (
    <GlobalDiv fluid>
            <Contact/>
            <AboutMe/> 
        <Row>
            <Col>
                <FondFleches> 
                    <img src="images/fleches.png"/>
                    <img src="images/fleches.png"/>
                </FondFleches>
            </Col>
            
            <Col>
                <Logos>
                        {techno.map((tech) => <Tech tech={tech}/>)}
                </Logos>
            </Col>
        </Row>
    </GlobalDiv>

    )
}

export default Head