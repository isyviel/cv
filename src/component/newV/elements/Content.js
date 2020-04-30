import React, { useState } from "react"
import { Container} from "@bootstrap-styled/v4"
import styled from "styled-components"
import Menu from '../content/Menu'
import Colors from '../common/themes/Colors'
import Name from "../content/Name"
import { HEIGHT } from "../common/themes/Sizes"
import Detales from "../content/Detales"
import Collapse from '@material-ui/core/Collapse'
import { Slide } from "@material-ui/core"

const ContentContainer = styled(Container)`
    min-height: ${HEIGHT};
    color: ${Colors.darkGrey};
    font-size: 24px;
`
const Empty = styled(Container)`
    height: 450px;
    width:100px;
    background-color: red;
    margin: 0;
`
const Content = ({goToContent, contentIsShown, hideContent,...props}) => {

    return (
        <ContentContainer fluid>
                <Name/>
                {/*
                    TO DO: montrer un container vide ou plein pour garder le fond de la page
                */}
                {contentIsShown ? <Detales closeSlide={hideContent} viewDetales={contentIsShown}/> : <Empty/>}
                <Menu fromMenu={goToContent} isDeploy={contentIsShown}/>
        </ContentContainer>
    )
}

export default Content