import React from "react"
import Title from "../../common/Title"
import {LISTE_STAGE,LISTE_MAG} from '../../common/constantes/texte'
import styled from "styled-components"
import Colors from '../../common/theme/Colors'

const CustomTitle = styled(Title)`
       
`
const Exp = ({exp,...props}) => {
            return  <div element={exp}>
                        {exp ==="Développeuse Web" ? 
                        
                        <div>
                            <CustomTitle>STRATEGIA Communications</CustomTitle>
                            <p>{LISTE_STAGE}</p>
                            <p>Gestion des workflows client</p>
                            <p>Mise en place de fonctionnalités: Suppression, Duplication, Mail de notification, exportation en pdf</p>
                            <p>FRONT et BACK</p>
                            <p>Reproductions d'erreurs</p>
                            <p>Responsive</p>
                        </div>

                        :

                        <div>
                            <CustomTitle>{LISTE_MAG}</CustomTitle>
                            <p></p>
                            <p>vente</p>
                            </div>}
                    </div>
}

export default Exp