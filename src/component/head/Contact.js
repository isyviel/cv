import React from "react"
import {Row,Col} from "@bootstrap-styled/v4/lib"
import styled from "styled-components"
import ImageButton from '../common/ImageButton'
import Mail from './menu/Mail'
import Phone from './menu/Phone'
import Pdf from './menu/Pdf'
import Linkedin from './menu/Linkedin'

const CustomRow = styled(Row)`
    position: fixed;
    height: 56px;
    border-radius: 30px;
    background-color: rgba(0,0,0,0.5);
    border: 1px solid rgba(255,255,255,0.2);
    z-index:3;
    @media screen and (max-width:576px) {
        height: 40px;
     }
`

const Contact = () => {
    return( 
        <CustomRow className="align-items-center justify-content-center">
            <Linkedin/>
            <Mail/>
            <Phone/>
            <Pdf/>
            <Col>
                <a href="https://www.github.com/isyviel" target="_blank" rel="noopener noreferrer">
                    <ImageButton src="images/github.png" alt="icone github" id="profil_github"/>
                </a>
            </Col>
        </CustomRow>
    )
}

export default Contact