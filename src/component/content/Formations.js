import React, { useState, useContext, useEffect } from "react"
import Container from '../common/Container'
import Title from "../common/Title"
import DiplDetales from './Detales/DiplDetales'
import { EXP, FORMATION, COMPETENCES, LISTE_FORMATION, DESCRIPTION} from "../common/constantes/texte"
import styled from "styled-components"

const CustomContainer = styled(Container)`

`

const Formations = ({isExp, ...props}) => {
    const diplomes = LISTE_FORMATION;
    return  <CustomContainer >
               <Title>Formations</Title>
               <DiplDetales diplomes={diplomes}/>
            </CustomContainer>
                
}

export default Formations