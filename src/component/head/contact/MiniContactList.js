import React from "react"
import styled from "styled-components"
import {Container} from "@bootstrap-styled/v4/lib"

import MiniContactDetales from "./MiniContacts"

const MiniListe =  styled(Container)`
    margin: 0;
    padding: 0 !important;
    display: flex;
    justify-content: space-between;
    flex-direction: column;
`

const MiniContact = ({isHome, handleClickOpen, contactForm, returnToHome,goToFooter,...props}) => {

    return(
        <MiniListe>
            <MiniContactDetales contactForm={contactForm} isHome={isHome} returnToHome={returnToHome}/> 
        </MiniListe>
    )
}

export default MiniContact