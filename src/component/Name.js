import React from "react"
import {Container} from "@bootstrap-styled/v4/lib"
import styled from "styled-components"
import Colors from './common/themes/Colors'
import {TECHNOS,NOM, TITRE} from './common/constantes/home'
import { Slide } from "@material-ui/core"

const CustomH1 = styled.h1`

    @media screen and (max-width:1200px) {
        font-size: 36px;
    }
    @media screen and (max-width:992px) {
        font-size: 34px ;
    }
    @media screen and (max-width:768px) {
        font-size: 24px ;
    }
    @media screen and (max-width:576px) {
        font-size: 18px ;
        text-align: center;
    }
`
const CustomH2 = styled.h2`
    color: black;
    @media screen and (max-width:1200px) {
        font-size: 32px;
    }
    @media screen and (max-width:992px) {
        font-size: 30px ;
    }
    @media screen and (max-width:768px) {
        font-size: 22px ;
    }
    @media screen and (max-width:576px) {
        font-size: 16px ;
        text-align: center;
    }
`

const Name = ({isHome,isContent,...props}) => {

    const NameContainer = styled(Container)`
    font-size: 48px;
    color: ${Colors.orange};
    text-align: left;
    padding: ${isHome ? "15px 0 0 460px !important" : "15px 0 0 8%"};
    margin: 0 !important;
    font-family: 'Bangers';
    z-index: 0;

    @media screen and (max-width:1200px) {
         padding: 15px 0 0 360px !important;
    }
    @media screen and (max-width:992px) {
        padding: 15px 0 0 160px !important;
    }
    @media screen and (max-width:768px) {
        height: ${isContent ? "0px" : "100%"};
        padding: 15px 0 0 110px !important;
    }

    @media screen and (max-width:576px) {
        padding: 15px 0 0 25px !important;
        margin: 0 0 0 45px;
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
