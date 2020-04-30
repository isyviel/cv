import React, { useState } from "react"
import { Container} from "@bootstrap-styled/v4"
import styled from "styled-components"
import Menu from '../content/Menu'
import Colors from '../common/themes/Colors'
import Name from "../content/Name"
import { HEIGHT } from "../common/themes/Sizes"
import {MENU} from '../common/constantes/home'
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
    background-color: transparent;
    margin: 0;
`
const Content = ({goToContent, contentIsShown, hideContent,...props}) => {
    
    const exp = MENU[0];
    const projects = MENU[2];
    const diplome=MENU[1];

    return (
        <ContentContainer fluid>
                <Name/>
                
                {contentIsShown ? 
                <Detales closeSlide={hideContent} viewDetales={contentIsShown}/> 
                : <Empty/>}
                <Menu exp={exp} 
                        diplome={diplome} 
                        projects={projects} 
                        fromMenu={goToContent} isDeploy={contentIsShown}/>
                
        </ContentContainer>
    )
}

export default Content