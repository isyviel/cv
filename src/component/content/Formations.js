import React from "react"
import Container from '../common/Container'
import Title from "../common/Title"
import DiplDetales from './Detales/DiplDetales'
import { LISTE_FORMATION} from "../common/constantes/texte"
import styled from "styled-components"

const CustomContainer = styled(Container)`
border-radius: 15px;
background-color: rgba(79,79,79,0.5);
box-shadow: inset 0 1px 2px 0 #FFF, inset 0 1px 3px 0 #FFF, 0 2px 4px 0 #000;
width: 80%;

@media screen and (max-width:576px) {
    width: 100%;
    padding: 13px;
    
}
`

const Formations = ({isExp, ...props}) => {
    const diplomes = LISTE_FORMATION;

    return  <CustomContainer >
               <Title className="text-white">Formations</Title>
               <DiplDetales diplomes={diplomes}/>
            </CustomContainer>            
}

export default Formations