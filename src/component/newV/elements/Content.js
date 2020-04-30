import React, { useState } from "react"
import { Container} from "@bootstrap-styled/v4"
import styled from "styled-components"
import Menu from '../content/Menu'
import Colors from '../common/themes/Colors'
import Name from "../content/Name"
import { HEIGHT } from "../common/themes/Sizes"
import Detales from "../content/Detales"
import Collapse from '@material-ui/core/Collapse'

const ContentContainer = styled(Container)`
    min-height: ${HEIGHT};
    color: ${Colors.darkGrey};
    font-size: 24px;
`

const Content = () => {
    const [isContent, setIsContent] = useState(false);

    const displayContent = () => {
        setIsContent(true)
       
    }

    const closeCollapse = () => {
        setIsContent(false)
        console.log(isContent)
    }

    return (
        <ContentContainer fluid>
                <Name/>
                <Collapse in={isContent}><Detales closeDetales={closeCollapse}/></Collapse>
                <Menu displayContent={displayContent}/>
        </ContentContainer>
    )
}

export default Content