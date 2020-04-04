import React from "react"
import styled from "styled-components"
import { Container } from "@bootstrap-styled/v4"
import FondTitre from '../cadres/FondTitre'
import Menu from '../Menu'

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

const Titre = ()=> {
    return( 
        <FondTitre>
            <CustomName>
               Développeuse Web et Web Mobile
                <Menu className="d-xs-none d-sm-block"/>
                {/* <FondFleches className="d-none d-xs-block">
                    <CustomImg src="images/fleches.png" alt="descendre" id="voir_plus_bas"/>
                </FondFleches> */}
            </CustomName>
        </FondTitre>  
    )
}

export default Titre