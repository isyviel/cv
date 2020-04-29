import React from "react"
import { Container,Row,Col } from "@bootstrap-styled/v4"
import styled from "styled-components"
import Menu from './newV/content/Menu'
import Colors from './newV/common/themes/Colors'
import Name from "./Name"
import Navigation from "./newV/content/Navigation"
import { HEIGHT } from "./newV/common/themes/Sizes"

const ContentContainer = styled(Container)`
    min-height: ${HEIGHT};
    color: ${Colors.darkGrey};
    font-size: 24px;
`

const ElementCol = styled(Col)`
    padding: 0 !important;

`
const Content = () => {
    return (
        <ContentContainer fluid>
                <Name/>
                <Menu/>
        </ContentContainer>
    )
}

export default Content