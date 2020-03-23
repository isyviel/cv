import React, { useState, useContext, useEffect } from "react"
import styled from "styled-components"

import Exp from './Exp'
import Formation from './Formation'

import { EXP, FORMATION } from "../common/constantes/texte"
import Container from '../common/Container'

import {LISTE_EXP, DESCRIPTION} from '../common/constantes/texte'
import {LISTE_FORMATION} from '../common/constantes/texte'
import {Row,Col} from "@bootstrap-styled/v4/lib"

const CustomDiv = styled.div`
    background : url(images/way.png) no-repeat center;
`

const Detales = ({ title, content, element,...props}) => {
    const experience = LISTE_EXP;
    const formation = LISTE_FORMATION;
    
    return (
    title === EXP ? 
    experience.map((exp) => 
    <Container fluid><Exp exp={exp} element={element}/></Container>)
    : formation.map((diplome)=><Col><Container><Formation diplomes={diplome}/></Container></Col>)
    )
}

export default Detales