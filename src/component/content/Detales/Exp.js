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
                    <Title className="h2">STRATEGIA</Title>
                    <p><a href="https://strategia.io/">Site Web STRATEGIA</a></p>
                    <p className="h5">{LISTE_STAGE}</p>
                    <p className="h6 font-italic">Autonomie, sérieux, communication, passion</p>
                    <hr/>
                </CustomDiv>
                <CustomArticle>
                    <li>Méthode agile, Slack, Miro, Invision, GitLab.</li>
                    <li className="mt-2">Conception et développement de fonctionnalités sur une plateforme de gestion de workflow:</li>
                    <div className="text-left">Insertions de champs de saisie selon le type de demande</div>
                    <div className="text-left">Suppression, duplication, exportation en pdf d'une demande.</div>
                    <div className="text-left">Adaptation de la saisie, des données accessibles et des actions possibles selon l'utilisateur.</div>
                    <div className="text-left">Achèvement du processus de validation</div>
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