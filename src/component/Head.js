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

const GlobalDiv = styled.div`
    
`

const Logos = styled.div`
    width: 700px;
    position: relative;
    left: 1100px;
   
`
  const CustomDiv = styled.div`


  `
const Head = ({isForm,...props}) => {
    const techno = [SYMFONY,REACT,ANDROID,JAVA,GIT];
    const competences = COMPETENCES
    return (
        <GlobalDiv>
    <CustomDiv>
        <Contact/>
        
        <AboutMe/> 
        {/* <CompDiv>
        {competences.map((comp) => <Comp comp={comp}/>)}</CompDiv>   */}
    </CustomDiv>
    
    <Logos>
        <Row>
            {techno.map((tech) => <Tech tech={tech}/>)}
        </Row>
        </Logos>
        <FondFleches>
            <img src="images/fleches.png"/>
            <img src="images/fleches.png"/>
        </FondFleches>
  
    </GlobalDiv>

    )
}

export default Head