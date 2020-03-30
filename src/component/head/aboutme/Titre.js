import React, { useState, useContext, useEffect } from "react"
import styled from "styled-components"
import {Row,Col} from "@bootstrap-styled/v4/lib"
import { Container } from "@bootstrap-styled/v4"
import FondFleches from '../../common/FondFleches'
import ImageButton from '../../common/ImageButton'

const CustomName = styled(Container)`
    color: white;
    font-family: "Comfortaa";
    font-size: 26px;
    letter-spacing: 1.68px;
    z-index: 2;
    text-align: center;

    @media screen and (max-width:992px) {
        font-size: 25px;
        letter-spacing: 0px;
    }

    @media screen and (max-width:576px) {
        color: white;
        font-family: "Comfortaa";
        font-size: 20px;
        letter-spacing: 0px;
        z-index: 2;
    }
  `

const Titre = ()=> {
    return( 
            <CustomName>
                <p>Développeuse Web et Web Mobile</p>
                <FondFleches>
                    <ImageButton src="images/fleches.png"/>
                </FondFleches>
           </CustomName>   
    )
}

export default Titre