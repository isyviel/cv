import React, { useState, useContext, useEffect } from "react"
import {Row,Col} from "@bootstrap-styled/v4/lib"
import styled from "styled-components"
import Container from '../common/Container'
import Mail from './Mail'


const CustomRow = styled(Row)`
height : 100px;
box-shadow: 0 2px 2px 0 rgba(0,0,0,0.63);
text-align: center;
padding-bottom: 10px;
border-radius: 150px;
`
const Contact = ({isForm,...props}) => {
/* TODO 
fixer la barre de contact en haut de la page

afficher nouvelle fenetre avec formulaire*/     


    return(
        <CustomRow className="align-items-center">
            <Col><a href="https://www.linkedin.com/in/adeline-simon-b8614018b"><img src="images/linkedin.png"/></a></Col>
            <Col><Mail/></Col>
            <Col><img src="images/phone.png"/></Col>
            <Col><img src="images/pdf.png"/></Col>
            <Row className="mb-4"></Row>
        </CustomRow>
    )
}

export default Contact