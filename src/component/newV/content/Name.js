import React from "react"
import {Container} from "@bootstrap-styled/v4/lib"
import styled from "styled-components"
import Colors from '../common/themes/Colors'
import {TECHNOS,NOM, TITRE} from '../common/constantes/home'
import { Slide } from "@material-ui/core"

const CustomH1 = styled.h1`
    @media screen and (max-width:576px) {
        font-size: 20px ;
        text-align: center;
    }
`
const CustomH2 = styled.h2`
    color: black;
    @media screen and (max-width:576px) {
        font-size: 16px ;
        text-align: center;
    }
`

const Name = ({isHome,...props}) => {

    const NameContainer = styled(Container)`
    font-size: 48px;
    color: ${Colors.orange};
    text-align: left;
    padding: ${isHome ? "15px 0 0 28% !important" : "15px 0 0 8%"};
    margin: 0 !important;
    font-family: 'Bangers';
    z-index: 0;

    @media screen and (max-width:576px) {
        padding: 15px 0 0 25px !important;
    }
`


    return(
        <Slide timeout={800}  direction="right" in={isHome}>
            <NameContainer fluid>
                    <CustomH1>     
                        {NOM} - {TITRE}
                    </CustomH1>
                    <CustomH2>
                        {TECHNOS.map((label,index) => {
                            return <span key={index}>{label}</span>
                        })}
                    </CustomH2>
            </NameContainer>
        </Slide>         
    )
}

export default Name
