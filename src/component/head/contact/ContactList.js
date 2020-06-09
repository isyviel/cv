import React from "react"
import styled from "styled-components"
import {Row,Container} from "@bootstrap-styled/v4/lib"
import ImageButton from '../../common/img/ImageButton'
import {HEAD,ICONS} from '../../common/constantes/home'
import { Button } from "@material-ui/core"
import Phone from "./Phone"
import Mail from "../mail/Mail"
import isHome from "./ContactList"
import ContactDetales from "./Contacts"

const ContactDiv = styled.div`
    color: white;
    font-size: 20px;
    @media screen and (max-width:992px) {
        display: none;
    }
`
const ListeContainer = styled(Container)`
    margin: 0 0 0 150px;
    padding: 0 !important;
    display: flex;
    justify-content: space-between;
    flex-direction: column;
    @media screen and (max-width:1200px) {
        margin: 0 0 0 45px;
     }
    @media screen and (max-width:992px) {
        margin: 0 0 0 0;
    }
`
const MiniListe =  styled(Container)`
    margin: 0;
    padding: 0 !important;
    display: flex;
    justify-content: space-between;
    flex-direction: column;
`

const Contact = ({isHome, handleClickOpen, contactForm, returnToHome,goToFooter,...props}) => {

    return(
        isHome ? 
       <ListeContainer className="align-items-lg-start align-items-center">
            <ContactDetales contactForm={contactForm} isHome={isHome} returnToHome={returnToHome}/>                    
        </ListeContainer>
        :
        <MiniListe>
            <ContactDetales contactForm={contactForm} isHome={isHome} returnToHome={returnToHome}/> 
        </MiniListe>
    )
}

export default Contact