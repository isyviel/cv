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
        height: ${isContent ? "0px" : "100%"};
        font-size: 48px;
        color: ${Colors.orange};
        text-align: left;
        padding: 0 20px 0 0 ;
        margin: 0 !important;
        font-family: 'Bangers';
        z-index: 0;
        display: flex;
        flex-direction: column;
        justify-content: start;
        align-items: end;

        @media screen and (max-width:576px) {
            margin-left: 40px;
        }
    `


    return(
        <Slide timeout={800}  direction="left" in={isHome}>
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
