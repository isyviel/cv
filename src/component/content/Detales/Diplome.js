import React, { useState, useContext, useEffect } from "react"
import {Row,Col} from "@bootstrap-styled/v4/lib"
import Title from "../../common/Title"
import Alignment from '../../common/theme/Alignment'
import styled from "styled-components"

const Detail = styled.div`
font-family: "Baloo 2";
font-size: 22px;
padding-bottom: 22px;
`
const Diplome = ({diplome,...props}) => {
    
            return(<div>
                    <Title className="pb-0">{diplome}</Title>
                    { diplome === "Web" ? <Detail>2020 : <strong>Niveau III Développeuse Web et Web Mobile</strong> - Adrar Pôle Numérique RamonVille</Detail>
                    :                     <Detail>2011 : <strong>Licence 2 Langue Littérature et Civilisation Etrangère Anglaise</strong> - Poitiers</Detail>}
                    </div>)                
}

export default Diplome