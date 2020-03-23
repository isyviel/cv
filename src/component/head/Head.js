import React, { useState, useContext, useEffect } from "react"
import {Row,Col} from "@bootstrap-styled/v4/lib"
import Me from './Me'

import styled from "styled-components"

const CustomName = styled.div`
    text-align: center;
    font-family: "Comfortaa";
    font-size: 36px; 
    
  `
const Head = ({isForm,...props}) => {
    return (
        <Row className="pt-4 align-items-center justify-content-center">          
             <Col  lg="2" xs ="12"><Me/></Col>  
             <Col xs="auto">
                <CustomName>Adeline SIMON</CustomName>
                <CustomName>Développeuse Web et Web Mobile</CustomName>
            </Col>        
        </Row>
    )
}

export default Head