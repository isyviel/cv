import React from "react"
import styled from "styled-components"
import { Container } from "@bootstrap-styled/v4"
import FondFleches from '../../common/FondFleches'
import FondTitre from '../cadres/FondTitre'

const CustomName = styled(Container)`
    color: white;
    font-family: "Comfortaa";
    font-size: 25px;
    letter-spacing: 1.68px;
    z-index: 2;
    text-align: center;

    @media screen and (max-width:992px) {
        letter-spacing: 0px;
    }

    @media screen and (max-width:768px) {
        font-size: 20px;
    }

    @media screen and (max-width:576px) {
        font-size: 16px;
    }
  `
const CustomImg = styled.img`
    width: 35px;
    padding: 0;

    @media screen and (max-width:768px) {
        width: 30px;
    }

    @media screen and (max-width:576px) {
        width: 20px;
    }
`

const Titre = ()=> {
    return( 
        <FondTitre>
            <CustomName>
               Développeuse Web et Web Mobile
                <FondFleches>
                    <CustomImg src="images/fleches.png"/>
                </FondFleches>
            </CustomName>
        </FondTitre>  
    )
}

export default Titre