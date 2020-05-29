
import React, { useState } from "react"
import {Container,Col} from "@bootstrap-styled/v4/lib"
import styled from "styled-components"
import Me from './Me'
import Contact from './Contact'
import Quote from './Quote'
import Spacer from '../common/Spacer'
import { Slide, Button } from "@material-ui/core"
import Name from "../Name"
import Footer from "../content/Footer"
import ImageButton from "../common/img/ImageButton"

const ToggleContainer = styled(Container)`
    
`

const Toggle = ({footerfromHead, ...props}) => {

    return(
        <ToggleContainer className="p-0 mb-2 row justify-content-lg-end justify-content-center">
            <Button className="p-0" onClick={footerfromHead} size="small" rel="noopener noreferrer">
                <ImageButton alt="icone menu bas de page à développer" src="images/menu.png"/>
            </Button>   
        </ToggleContainer>
        
    )
}

export default Toggle
