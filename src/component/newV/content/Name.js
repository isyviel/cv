import React from "react"
import {Container} from "@bootstrap-styled/v4/lib"
import styled from "styled-components"
import Colors from '../common/themes/Colors'
import {TECHNOS,NOM, TITRE} from '../common/constantes/home'

const NameContainer = styled(Container)`
    font-size: 48px;
    color: ${Colors.orange};
    text-align: right;
    padding: 0 !important;
    margin: 0 !important;
`

const Name = () => {
    return(
        <NameContainer fluid>        
                <h1>{NOM}</h1>
                <h2>{TITRE}</h2>
                <h3 className="h4 text-dark"> 
                    {TECHNOS.map((label,index) => {
                        return <span key={index}>{label}</span>
                    })}
                </h3>
               
        </NameContainer>
    )
}

export default Name
