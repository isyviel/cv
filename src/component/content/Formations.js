import React from "react"
import ContentContainer from '../common/ContentContainer'
import Title from "../common/Title"
import DiplDetales from './Detales/DiplDetales'
import { LISTE_FORMATION} from "../common/constantes/texte"
import styled from "styled-components"

const CustomContainer = styled(ContentContainer)`
padding: 20px 25px 30px 25px;
`

const Formations = () => {
    const diplomes = LISTE_FORMATION;

    return  <CustomContainer fluid>
               <Title className="text-white">Formations</Title>
               <DiplDetales diplomes={diplomes}/>
            </CustomContainer>            
}

export default Formations