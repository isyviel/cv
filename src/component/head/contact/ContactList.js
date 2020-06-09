import React from "react"
import styled from "styled-components"
import {Container} from "@bootstrap-styled/v4/lib"
import ContactDetales from "./Contacts"

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