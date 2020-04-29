import React from "react"
import styled from "styled-components"
import { Row } from "@bootstrap-styled/v4"

const Fleche = styled.img`
`

const Navigation = () => {
    return (
            <Row className="align-items-end justify-content-end m-0">
                <Fleche src="images/fleche.png"/>
            </Row>
    )
}

export default Navigation