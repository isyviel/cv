import React, { useState, useContext, useEffect } from "react"
import styled from "styled-components"
import {Row,Col} from "@bootstrap-styled/v4/lib"
import RoundContainer from '../common/RoundContainer'


const CustomImg = styled.img`
width: 200px;
`
const CustomTitle = styled.p`
text-align: center;
font-family: "Baloo 2";
font-size: 28px;
`

const Tech = ({tech,...props}) => {
   
   const path = "images/";
  
      return <Col>
                <RoundContainer>
                    <CustomImg src= {path + tech[1]}/>
                </RoundContainer>
                <CustomTitle>{tech[0]}</CustomTitle>
            </Col>
  
}

export default Tech