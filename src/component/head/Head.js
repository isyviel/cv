import React, { useState, useContext, useEffect } from "react"
import {Row,Col} from "@bootstrap-styled/v4/lib"
import Me from './Me'
import Contact from './Contact'
import styled from "styled-components"

const Citation = styled.p`
font-family: 'Annie Use Your Telescope', cursive;
    font-size: 30px;
    color: grey;
    text-align: center;
`
const Author = styled.p`
    font-family: 'Baloo 2';
    color: grey;
    padding-bottom : 50px;
    text-align: center;
`

const CustomName = styled.div`
    text-align: center;
    font-family: "Comfortaa";
    font-size: 36px; 
  `

const CustomRow = styled(Row)`
    padding: 15px;
    align-items: center;
    justify-content: center;
`
const Head = ({isForm,...props}) => {
    return (
    
        <CustomRow >          
             <Col  lg="2" xs ="12"><Me/></Col>  
             <Col xs="auto">
                <CustomName>Adeline SIMON</CustomName>
                <CustomName>Développeuse Web et Web Mobile</CustomName>
                <Contact/>
            </Col>       
        </CustomRow>

    )
}

export default Head