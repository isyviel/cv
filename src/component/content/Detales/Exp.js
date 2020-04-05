import React from "react"
import Title from "../../common/Title"
import {LISTE_STAGE,LISTE_MAG} from '../../common/constantes/texte'
import styled from "styled-components"

const CustomDiv = styled.div`
    font-family: "Baloo 2";
    text-align: center;
`

const CustomArticle = styled.article`
    @media screen and (max-width:576px) {
        font-size: 16px;
    }
`
const Exp = ({exp,...props}) => {
    return  (
        <div element={exp}>
            {exp ==="Développeuse Web" ?
            <section>
                <CustomDiv>
                    <Title className="h2"> STRATEGIA Communications</Title>
                    <p className="h5">{LISTE_STAGE}</p>
                    <p className="h6 font-italic">Autonomie, sérieux, communication, ponctualité, passion</p>
                    <hr/>
                </CustomDiv>
                <CustomArticle>
                    <li>Méthode agile, Slack, Miro, Invision, GitLab.</li>
                    <li className="mt-2">Achêvement du processus de validation dans un flux d'envoi.</li>
                    <li className="mt-2">Conception et développement de fonctionnalités :</li>
                    <div className="text-left">Suppression, Duplication, Exportation en pdf d'un formulaire.</div>
                    <li className="mt-2">Insertions de champs et définitions des valeurs par défaut.</li>
                    <li className="mt-2">Reproductions d'erreurs et tests.</li>
                    <li className="mt-2">Rendre le site adaptable sur petites résolutions.</li>
                </CustomArticle>
            </section>  
            :
            <section>
                <CustomDiv>
                    <Title>{LISTE_MAG}</Title>
                    <p className="h5">Commerce, Manutention, Comptabilité</p>
                    <p className="h6 font-italic">Autonomie, transparence, dynamisme, proactivité, objectifs réalisés</p>
                    <hr/>
                </CustomDiv>
                <CustomArticle>
                    <li>Accueil personnalisé, conseils, accompagnement et vente complémentaire.</li>
                    <li className="mt-2">Mise en place du merchandising libre ou imposé.</li>
                    <li className="mt-2">Gestion des livraisons, des retours dépôts et des inventaires.</li>
                    <li className="mt-2">Calcul des objectifs vendeuse et magasin.</li>
                    <li className="mt-2">Gestion de la sécurité du personnel et des fonds.</li>
                    <li className="mt-2">Organisation de mesures contre la démarque inconnue.</li>
                </CustomArticle>      
            </section>}
        </div>)
}

export default Exp