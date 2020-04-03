import React from "react"
import Title from "../../common/Title"
import styled from "styled-components"
import {Container} from "@bootstrap-styled/v4"

const Detail = styled.div`
        font-family: "Baloo 2";
        padding-bottom: 22px;

        @media screen and (max-width:576px) {
                font-size: 12px;
        }
`

const Diplome = ({diplome,...props}) => {
    
        return(
                <Container>
                        <Title className="pb-0">{diplome}</Title>
                        { diplome === "Web" ? 
                        <Detail>2020 : <strong>Niveau III Développeuse Web et Web Mobile</strong> - Adrar Pôle Numérique RamonVille</Detail>
                        :<Detail>2011 : <strong>Licence 2 Langue Littérature et Civilisation Etrangère Anglaise</strong> - Poitiers</Detail>}
                </Container>
        )                
}

export default Diplome