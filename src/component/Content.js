import React from "react"
import { Container,Row,Col } from "@bootstrap-styled/v4"
import styled from "styled-components"
import Menu from './newV/content/Menu'
import Colors from './newV/common/themes/Colors'
import Name from "./Name"
import Navigation from "./newV/content/Navigation"

const ContentContainer = styled(Container)`
    position: relative;
    left: 65%;
    color: ${Colors.darkGrey};
    font-size: 24px;
`

const Squarecontainer = styled(Container)`
    height: 500px;
    width: 5px;
    background-color: ${Colors.orange};
    margin : 100px 0 0 0;
    padding: 0 !important;
`

const ElementCol = styled(Col)`
    padding: 0 !important;

`
const Content = () => {
    return (
        <ContentContainer fluid>
            <Row className="justify-content-end">
                <ElementCol xs="4">
                    <Menu/>
                </ElementCol>
                <ElementCol>
                    <Squarecontainer/>
                </ElementCol>
            </Row>  
        </ContentContainer>
    )
}

export default Content