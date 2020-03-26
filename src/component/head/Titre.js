import React, { useState, useContext, useEffect } from "react"
import styled from "styled-components"
import {Row,Col} from "@bootstrap-styled/v4/lib"

const CustomName = styled.div`
    height: 60px;
    width: 600px;
    color: white;
    font-family: "Comfortaa";
    font-size: 30px;
    letter-spacing: 1.68px;
    text-align: center;
  `

const Titre = ()=> {
    return( 
        <Col>
            <CustomName>Développeuse Web et Web Mobile</CustomName>   
        </Col>
    )
}

export default Titre