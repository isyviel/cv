import React from "react"
import {Col} from "@bootstrap-styled/v4/lib"
import { Fade } from "@material-ui/core"

const Adrar = ({isAdrar,...props}) => {
    return(
    <Fade in={isAdrar}>
        <Col>
            <h1 className="h4">Web</h1>
            <a href="https://www.adrar-numerique.com/">Site Web</a>
            <h2 className="h5"> 2020 : Niveau III Développeuse Web et Web Mobile</h2>
            <h3 className="h6">Adrar Pôle Numérique - Ramonville St Agne</h3>
            <article>
                Conception et maquettage d'applications:
                Diagrammes de classes, de séquences, d'activités
                Dictionnaires de données, MCD, MLD, SQL
                Gestion la partie back end d'un site web ou d'une application mobile:
                Java, PHP
                Construction et intégration d'une interface web dynamique:
                Android, Javascript (Jquery, React), HTML5, CSS3, Bootstrap
            </article>
        </Col>
    </Fade>
    )
}

export default Adrar