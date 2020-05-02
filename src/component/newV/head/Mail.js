import React from "react"
import styled from "styled-components"
import Colors from '../common/themes/Colors'
import ImageButton from "../common/ImageButton"

const Quote = () => {
    return(
        <Button size="small" classname="p-0">
            <ImageButton src="images/mail.png" alt="icone arobase" id="envoyer_mail"/>
        </Button>
    )
}

export default Quote