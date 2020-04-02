import React from "react"
import styled from "styled-components"
import {Col} from "@bootstrap-styled/v4/lib"
import Colors from '../../common/theme/Colors'
import { Container } from "@bootstrap-styled/v4"

const CustomName = styled(Container)`
    color: ${Colors.orange};
    font-family: "Comfortaa";
    font-size: 30px;
    text-align: center;

    @media screen and (max-width:992px) {
        font-size: 25px;
    }

    @media screen and (max-width:768px) {
        font-size: 18px;
    }
  `

const Nom = ()=> {
    return( 
        <Col>
            <CustomName ><p>Adeline SIMON</p></CustomName>   
        </Col>
    )
}

export default Nom