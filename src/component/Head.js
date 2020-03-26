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

import FondFleches from './common/FondFleches'
const CompDiv = styled(Container)`
    position: relative;
`
   

const TransitionDiv = styled.div`
background: url(images/Rectangle.png) no-repeat center;
background-size: 100%;
height: 250px;
`

const Logos = styled.div`
    width: 700px;
    position: relative;
    left: 1000px;
    top: 120px;
`
  const CustomDiv = styled.div`
  background: url(images/rcet.png) no-repeat center;
  background-size: 100%;
  `
const Head = ({isForm,...props}) => {
    const techno = [SYMFONY,REACT,ANDROID,JAVA,GIT];
    const competences = COMPETENCES
    return (
        <div>
    <CustomDiv>
        <Contact/>
        
        <AboutMe/> 
        {/* <CompDiv>
        {competences.map((comp) => <Comp comp={comp}/>)}</CompDiv>   */}
    </CustomDiv>
    <TransitionDiv>
    <Logos>
        <Row>
            {techno.map((tech) => <Tech tech={tech}/>)}
        </Row>
        </Logos>
        <FondFleches>
            <img src="images/fleches.png"/>
            <img src="images/fleches.png"/>
        </FondFleches>
    </TransitionDiv>
    </div>
        // <Row className="align-items-center p-4">
        //     <Contact/>          
        //     <Col><Me/></Col>  
        //     <Col lg="6">
        //         <CustomName>Adeline SIMON</CustomName>
        //         <CustomName>Développeuse Web et Web Mobile</CustomName>
                
        //     </Col>
        //     <Col>
            
        //     </Col>    
        // </Row>

    )
}

export default Head