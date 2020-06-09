
import React from "react"
import {Container} from "@bootstrap-styled/v4/lib"
import { Button } from "@material-ui/core"
import ImageButton from "../common/img/ImageButton"

const Toggle = ({footerfromHead, isHome, ...props}) => {

    return(
        <Container className={isHome? "mb-2 row justify-content-center justify-content-md-end" : "mb-2 row justify-content-center"}>
            <Button  onClick={footerfromHead} size="small" rel="noopener noreferrer">
                <ImageButton alt="icone menu bas de page à développer" src="images/menu.png"/>
            </Button>   
        </Container>
    )
}

export default Toggle
