import React from "react"
import styled from "styled-components"
import { Container } from "@bootstrap-styled/v4"
import FondFleches from '../../common/FondFleches'
import ImageButton from '../../common/ImageButton'
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

const Titre = ()=> {
    return( 
        <FondTitre>
            <CustomName>
                <p>Développeuse Web et Web Mobile</p>
                <FondFleches>
                    <ImageButton src="images/fleches.png"/>
                </FondFleches>
            </CustomName>
        </FondTitre>  
    )
}

export default Titre