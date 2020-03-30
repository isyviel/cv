import React from "react"
import Title from "../../common/Title"
import {LISTE_STAGE,LISTE_MAG} from '../../common/constantes/texte'
import styled from "styled-components"

const CustomDiv = styled.div`
font-family: "Baloo 2";
@media screen and (max-width:576px) {
    font-size: 12px;
 }
`
const Exp = ({exp,...props}) => {
            return  (<CustomDiv element={exp}>
                        {exp ==="Développeuse Web" ? 
                        
                        <div>
                            <Title>STRATEGIA Communications</Title>
                            <hr></hr>
                            <p>{LISTE_STAGE}</p>
                            <p>Gestion des workflows client</p>
                            <p>Mise en place de fonctionnalités: Suppression, Duplication, Mail de notification, exportation en pdf</p>
                            <p>FRONT et BACK</p>
                            <p>Reproductions d'erreurs</p>
                            <p>Responsive</p>
                        </div>

                        :

                        <div>
                            <Title>{LISTE_MAG}</Title>
                            <hr></hr>
                            <p>vente</p>
                        </div>}
                        
                    </CustomDiv>)
}

export default Exp