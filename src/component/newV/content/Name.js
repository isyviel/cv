import React from "react"
import {Container} from "@bootstrap-styled/v4/lib"
import styled from "styled-components"
import Colors from '../common/themes/Colors'
import {TECHNOS,NOM, TITRE} from '../common/constantes/home'
import { Slide } from "@material-ui/core"

const Name = ({isHome,...props}) => {

    const NameContainer = styled(Container)`
    font-size: 48px;
    color: ${Colors.orange};
    text-align: left;
    padding: ${isHome ? "15px 0 0 28% !important" : "15px 0 0 8%"};
    margin: 0 !important;
    font-family: 'Bangers';
    z-index: 0;
`

    return(
        <Slide timeout={800}  direction="right" in={isHome}>
            <NameContainer fluid>        
                    <h1>{NOM} - {TITRE}</h1>
                    <h3 className="h4 text-dark"> 
                        {TECHNOS.map((label,index) => {
                            return <span key={index}>{label}</span>
                        })}
                    </h3>
            </NameContainer>
        </Slide>         
    )
}

export default Name
