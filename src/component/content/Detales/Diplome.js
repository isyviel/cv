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
                        
                        <Detail>
                                <div className="text-center">2020 : 
                                        <strong> Niveau III Développeuse Web et Web Mobile</strong>
                                </div>
                                <div className="text-center mb-4">Adrar Pôle Numérique RamonVille</div>
                                <li className="mt-2">Conception et maquettage d'applications:</li>
                                <div>Diagrammes de classes, de séquences, d'activités</div>
                                <div>Dictionnaires de données, MCD, MLD, SQL</div>
                                <li className="mt-2"> Gestion la partie back end d'un site web ou d'une application mobile:</li>
                                <div>Java, PHP</div>
                                <li className="mt-2">Construction et intégration d'une interface web dynamique:</li>
                                <div>Android, Javascript (Jquery, React), HTML5, CSS3, Bootstrap</div>
                        </Detail>
                        :<Detail>
                                <div className="text-center">2011 : 
                                        <strong> Licence 2 Langue Littérature et Civilisation Etrangère Anglaise</strong>
                                </div>
                                <div className="text-center mb-4">Université Lettres et Langues Poitiers</div>
                                <div className="mt-2">Littérature, Phonétique, Linguistique, Civilisation, Compréhension et Expression orale</div>
                                
                        </Detail>}
                </Container>
        )                
}

export default Diplome