import React, { useState, useContext, useEffect } from "react"
import styled from "styled-components"
import {Row,Col} from "@bootstrap-styled/v4/lib"

const CustomName = styled.div`
    color: white;
    font-family: "Comfortaa";
    font-size: 30px;
    letter-spacing: 1.68px;
    z-index: 2;
    text-align: center;
  `

const Titre = ()=> {
    return( 
        <Col>
            <CustomName><p>Développeuse Web et Web Mobile</p></CustomName>   
        </Col>
    )
}

export default Titre