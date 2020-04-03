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
    return  (
        <div element={exp}>
            {exp ==="Développeuse Web" ?
            <div>
                <CustomDiv>
                    <Title>STRATEGIA Communications</Title>
                    <p>{LISTE_STAGE}</p>
                    <hr/>
                </CustomDiv>
                <article>
                    <div>Méthode agile et GitLab.</div>
                    <div>Complétion du processus de validation dans un flux d'envoi.</div>
                    <div>Conception et développement de fonctionnalités :</div>
                    <div className="text-center">Suppression, Duplication, Exportation en pdf d'un formulaire.</div>
                    <div>Insertions de champs et définitions des valeurs par défaut.</div>
                    <div>Reproductions d'erreurs et tests.</div>
                    <div>Rendre le site adaptable sur petites résolutions.</div>
                </article>
            </div>  
            :
                <CustomDiv>
                    <Title>{LISTE_MAG}</Title>
                    <hr></hr>
                    <p>vente</p>
                </CustomDiv>}
                        
        </div>
        )
}

export default Exp