import React, { useState, useContext, useEffect } from "react"
import styled from "styled-components"
import Contact from './Contact'
import Colors from '../theme/Colors'
import {Row,Col} from "@bootstrap-styled/v4/lib"

const CustomName = styled.div`

    font-family: "Comfortaa";
    font-size: 48px; 
    text-align: center;
  `

const CustomJob = styled.div`
    
    font-family: "Baloo 2";
    font-size: 48px;
   text-align: center;
    margin-bottom: 50px;
    
`

const Title = ()=> {
    return(
        
        <Col xs="12">
            <CustomName>Adeline SIMON</CustomName>
            <CustomJob>Développeuse Web et Web Mobile</CustomJob>
        </Col>
        
    )
}

export default Title