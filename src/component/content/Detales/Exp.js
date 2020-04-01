import React from "react"
import Title from "../../common/Title"
import {LISTE_STAGE,LISTE_MAG} from '../../common/constantes/texte'
import styled from "styled-components"

const CustomDiv = styled.div`
font-family: "Baloo 2";
text-align: center;
@media screen and (max-width:576px) {
    font-size: 12px;
 }
`
const Exp = ({exp,...props}) => {
            return  (<div element={exp}>
                        {exp ==="Développeuse Web" ?
                        <div>
                            <CustomDiv>
                                <Title>STRATEGIA Communications</Title>
                                <p>{LISTE_STAGE}</p>
                                <hr/>
                            </CustomDiv>
                            <article>
                                Méthode agile : GitLab
                                Conception et développement de fonctionnalités sur un formulaire : 
                                    Suppression, Duplication, Exportation en pdf
                                Complétion du workflow client
                                Reproductions d'erreurs et tests
                                Rendre le site "responsive"

                            </article>
                        </div>
                     

                        :

                        <CustomDiv>
                            <Title>{LISTE_MAG}</Title>
                            <hr></hr>
                            <p>vente</p>
                        </CustomDiv>}
                        
                    </div>)
}

export default Exp