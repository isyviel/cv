import React from "react"
import styled from "styled-components"
import {Col} from "@bootstrap-styled/v4/lib"

const CustomImg = styled.img`
   height: 80px;

   @media screen and (max-width:768px) {
      height: 60px;   
   }
`

const Tech = ({tech, ...props}) => {
   const path = "images/";
      return (
      <Col xs="auto text-align-center mt-4">
         <CustomImg src= {path + tech[1]} alt={tech[0]} id="logo_techno_principale"/>
      </Col>
      )
      
}

export default Tech