import React from "react"
import {Col} from "@bootstrap-styled/v4/lib"
import { Fade } from "@material-ui/core"

const English = ({isEnglish,...props}) => {
    return(
    <Fade in={isEnglish}>
        <Col>
            <h1 className="h4">Anglais</h1>
            <h2 className="h5">2011 : Licence 2 Langue Littérature et Civilisation Etrangère Anglaise</h2>
            <h3 className="h6">Université Lettres et Langues Poitiers</h3>

            <article>
                Littérature
                Phonétique
                Linguistique
                Civilisation
                Compréhension et Expression orale
                Options : Science du langage et Cinéma
            </article>
        </Col>
    </Fade>
    )
}

export default English