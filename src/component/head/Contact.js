import React, { useState, useContext, useEffect } from "react"
import {Row,Col} from "@bootstrap-styled/v4/lib"
import styled from "styled-components"
import ImageButton from '../common/ImageButton'
import Mail from './menu/Mail'
import Phone from './menu/Phone'
import Colors from '../common/theme/Colors'

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
            <Col><a href="https://www.linkedin.com/in/adeline-simon-b8614018b"><ImageButton src="images/linkedin.png"/></a></Col>
            <Col><Mail/></Col>
            <Col><Phone/></Col>
            <Col><ImageButton src="images/pdf.png"/></Col>
            <Col><a href="https://www.github.com/isyviel"><ImageButton src="images/github.png"/></a></Col>
        </CustomRow>
    )
}

export default Contact