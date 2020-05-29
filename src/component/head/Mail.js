import React from "react"
import styled from "styled-components"
import Colors from '../common/themes/Colors'
import ImageButton from "../common/img/ImageButton"
import { Button } from "@material-ui/core"

const Mail = ({displayForm,...props}) => {
    return(
        <Button size="small" className="p-0" onClick={displayForm}>
            <ImageButton src="images/mail.png" alt="icone arobase" id="envoyer_mail"/>
        </Button>
    )
}

export default Mail