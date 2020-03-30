import React, { useState, useContext, useEffect } from "react"
import {Row,Col} from "@bootstrap-styled/v4/lib"
import styled from "styled-components"
import ImageButton from '../common/ImageButton'
import Mail from './menu/Mail'
import Phone from './menu/Phone'
import Colors from '../common/theme/Colors'
import { Container } from "@bootstrap-styled/v4"

const CustomRow = styled(Row)`
    position: fixed;
    height: 56px;
    border-radius: 30px;
    background-color: rgba(130,130,130,0.7);
    border: 1px solid rgba(255,255,255,0.2);
    z-index:2;
`

const Contact = ({isForm,...props}) => {

    return(
       
        <CustomRow className="align-items-center">
            <Col><a href="https://www.linkedin.com/in/adeline-simon-b8614018b" target="_blank"><ImageButton src="images/linkedin.png"/></a></Col>
            <Col><Mail/></Col>
            <Col><Phone/></Col>
            <Col><ImageButton src="images/pdf.png"/></Col>
            <Col><a href="https://www.github.com/isyviel" target="_blank"><ImageButton src="images/github.png"/></a></Col>
        </CustomRow>
        
    )
}

export default Contact