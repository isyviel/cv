import React from "react"
import {Col} from "@bootstrap-styled/v4/lib"
import styled from "styled-components"

const DArticle = () => {
    return(
        <Col>
            <h1 className="h4">STRATEGIA</h1>
            <h2 className="h5"> Symfony, React/JSX, ApiPlatform, Material-UI, Postman, Twig, Bootstrap, Ubuntu</h2>
            <h3 className="h6">Autonomie, sérieux, communication, passion</h3>

            <article>
            Méthode agile, Slack, Miro, Invision, GitLab.
            Conception et développement de fonctionnalités sur une plateforme de gestion de workflow:
            Insertions de champs de saisie selon le type de demande
            Suppression, duplication, exportation en pdf d'une demande.
            Adaptation de la saisie, des données accessibles et des actions possibles selon l'utilisateur.
            Achèvement du processus de validation
            Reproductions d'erreurs et tests.
            Rendre le site adaptable sur petites résolutions.
            </article>
        </Col>
    )
}

export default DArticle