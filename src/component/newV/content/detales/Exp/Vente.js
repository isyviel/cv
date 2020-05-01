import React from "react"
import {Col} from "@bootstrap-styled/v4/lib"
import { Fade } from "@material-ui/core"

const Vente = ({isSales,...props}) => {
    return(
        <Fade in={isSales}>
            <Col>
                <h1 className="h4">Mim, Christine Laure</h1>
                <h2 className="h5"> Commerce, Manutention, Comptabilité</h2>
                <h3 className="h6">Autonomie, transparence, dynamisme, proactivité, objectifs réalisés</h3>

                <article>
                    Accueil personnalisé, conseils, accompagnement et vente complémentaire.
                    Mise en place du merchandising libre ou imposé.
                    Gestion des livraisons, des retours dépôts et des inventaires.
                    Calcul des objectifs vendeuse et magasin.
                    Gestion de la sécurité du personnel et des fonds.
                    Organisation de mesures contre la démarque inconnue.
                </article>
            </Col>
        </Fade>
    )
}

export default Vente