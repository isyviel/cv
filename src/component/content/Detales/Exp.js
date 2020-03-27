import React from "react"
import Title from "../../common/Title"
import {LISTE_STAGE,LISTE_MAG} from '../../common/constantes/texte'

const Exp = ({exp,...props}) => {
            return  (<div element={exp}>
                        {exp ==="Développeuse Web" ? 
                        
                        <div>
                            <Title>STRATEGIA Communications</Title>
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
                            <p></p>
                            <p>vente</p>
                            </div>}
                    </div>)
}

export default Exp