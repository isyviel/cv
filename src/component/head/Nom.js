import React, { useState, useContext, useEffect } from "react"
import styled from "styled-components"
import {Row,Col} from "@bootstrap-styled/v4/lib"
import Colors from '../common/theme/Colors'

const CustomName = styled.div`
    height: 40px;
    width: 280px;
    color: ${Colors.orange};
    font-family: "Comfortaa";
    font-size: 34px;
    text-align: center;
  `

const Nom = ()=> {
    return( 
        <Col>
            <CustomName >Adeline SIMON</CustomName>   
        </Col>
    )
}

export default Nom