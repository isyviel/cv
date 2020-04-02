import React from "react"
import ContentContainer from '../common/ContentContainer'
import Title from "../common/Title"
import DiplDetales from './Detales/DiplDetales'
import { LISTE_FORMATION} from "../common/constantes/texte"
import styled from "styled-components"

const CustomContainer = styled(ContentContainer)`
    @media screen and (max-width:992px) {
        padding: 20px 40px 70px 40px;
    }
`

const Formations = () => {
    const diplomes = LISTE_FORMATION;

    return  <CustomContainer>
               <Title className="text-white">Formations</Title>
               <DiplDetales diplomes={diplomes}/>
            </CustomContainer>            
}

export default Formations