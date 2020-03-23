import React, { useState, useContext, useEffect } from "react"
import styled from "styled-components"
import {Row,Col} from "@bootstrap-styled/v4/lib"
import { SYMFONY, HTML, REACT, ANDROID, JAVA, GIT, BOOTS } from "../common/constantes/logos"
import RoundContainer from '../common/RoundContainer'
import Spacer from '../common/Spacer'
import Colors from '../theme/Colors'

const CustomTitle = styled.p`
text-align: center;
font-family: "Baloo 2";
font-weight: bold;
font-size: 28px;
color : ${Colors.orange};
`

const Comp = ({comp,...props}) => {
  
      return <Col>
                  <CustomTitle>{comp}</CustomTitle>
              </Col>
  
}

export default Comp