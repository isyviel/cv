import React, { useState, useContext, useEffect } from "react"
import {Row,Col} from "@bootstrap-styled/v4/lib"
import styled from "styled-components"

import Colors from '../theme/Colors'
import ToLinkedin from '../common/ToLinkedin'
import Mail from './Mail'
import Home from '../common/Home'

const CustomRow = styled(Row)`
border-radius :15px;
height : 100px;
box-shadow: 0 2px 2px 0 rgba(0,0,0,0.63);
text-align: center;
padding-bottom: 35px; 

`
const Contact = ({isForm,...props}) => {
    return(
        <CustomRow className="align-items-center">
            <Col><a href="https://www.linkedin.com/in/adeline-simon-b8614018b"><img src="images/linkedin.png"/></a></Col>
            <Col>{isForm ? <Home/> : <Mail/>}</Col>
            <Col><img src="images/phone.png"/></Col>
            <Col><img src="images/pdf.png"/></Col>
            <Row className="mb-4"></Row>
        </CustomRow>
    )
}

export default Contact