import React from "react"
import styled from "styled-components"
import {Col} from "@bootstrap-styled/v4/lib"

const CustomImg = styled.img`
   
   margin-top: 5px;
   height: 60px;

   @media screen and (max-width:768px) {
      height: 50px;   
   }
`

const TechSec = ({techSec, ...props}) => {
   const path = "images/";
      return (
      <Col xs="auto text-align-center">
         <CustomImg src= {path + techSec[1]}/>
      </Col>
      )
      
}

export default TechSec