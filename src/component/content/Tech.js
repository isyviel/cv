import React from "react"
import styled from "styled-components"
import {Col} from "@bootstrap-styled/v4/lib"

const CustomImg = styled.img`
width:70px;
margin-top: 5px;

@media screen and (max-width:768px) {
   width: 50px;   
}
`
const CustomTitle = styled.p`
text-align: center;
font-family: "Baloo 2";
font-size: 28px;
`

const Tech = ({tech,...props}) => {
   const path = "images/";
      return <CustomImg src= {path + tech[1]}/>
}

export default Tech