import React, { useState, useContext, useEffect } from "react"
import {Row,Col} from "@bootstrap-styled/v4/lib"
import styled from "styled-components"
import Container from '../common/Container'
import Mail from './Mail'
import Phone from './Phone'

const CustomRow = styled(Row)`
height : 100px;
text-align: center;
padding:30px;
`
const Contact = ({isForm,...props}) => {
/* TODO 
fixer la barre de contact en haut de la page

afficher nouvelle fenetre avec formulaire*/     

    return(
        <CustomRow className="align-items-center">
            <Col><a href="https://www.linkedin.com/in/adeline-simon-b8614018b"><img src="images/linkedin.png"/></a></Col>
            <Col><Mail/></Col>
            <Col><Phone/></Col>
            <Col><img src="images/pdf.png"/></Col>
            <Row className="mb-4"></Row>
        </CustomRow>
    )
}

export default Contact