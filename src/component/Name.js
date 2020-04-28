import React from "react"
import {Container,Row,Col} from "@bootstrap-styled/v4/lib"
import styled from "styled-components"

const NameContainer = styled(Container)
`
font-size: 36px;
margin-right: 50px;
    
`
const Name = () => {
    return(
        <NameContainer fluid>
            <Row className="justify-content-end">
                <div>Adeline Simon</div>
            </Row>
            <Row className="justify-content-end">
                <div>Développeuse Web et Web Mobile</div>
            </Row>
        </NameContainer>
    )
}

export default Name
