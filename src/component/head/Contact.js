import React, { useState, useContext, useEffect } from "react"
import {Row,Col} from "@bootstrap-styled/v4/lib"
import styled from "styled-components"

import Colors from '../theme/Colors'
import ToLinkedin from '../common/ToLinkedin'
import Mail from '../common/Mail'
import Home from '../common/Home'

const CustomRow = styled(Row)`
border-radius :50px;
height : 70px;
width: 85%;
background-color: ${Colors.bleuVert};
box-shadow: 0 2px 4px 0 rgba(0,0,0,0.63);
text-align: center;
`
const Contact = ({isForm,...props}) => {
    return(
        <CustomRow className="align-items-center mx-auto">
            <Col><a href="https://www.linkedin.com/in/adeline-simon-b8614018b"><ToLinkedin/></a></Col>
            <Col>{isForm ? <Home/> : <Mail/>}</Col>
            <Col><img src="images/tel.png"/></Col>
            <Col><img src="images/pdf.png"/></Col>
        </CustomRow>
    )
}

export default Contact