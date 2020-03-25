import React, { useState, useContext, useEffect } from "react"
import styled from "styled-components"
import {Row,Col} from "@bootstrap-styled/v4/lib"
import { SYMFONY, HTML, REACT, ANDROID, JAVA, GIT, BOOTS } from "../common/constantes/logos"
import RoundContainer from '../common/RoundContainer'
import Spacer from '../common/Spacer'
import Colors from '../common/theme/Colors'

const CustomTitle = styled.p`
font-family: "Baloo 2";
font-size: 32px;
color : ${Colors.orange};
text-shadow: 1px 1px 2px black, 0 0 0.2em ${Colors.lightGrey};
`

const Comp = ({comp,...props}) => {
  
      return <CustomTitle>{comp}</CustomTitle>
              
  
}

export default Comp