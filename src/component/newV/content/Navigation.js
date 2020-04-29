import React from "react"
import styled from "styled-components"
import { Row } from "@bootstrap-styled/v4"

const ArRow = styled(Row)`
    align-items: center;
    justify-content: end;
    margin: 0 50px 0 0 !important;
`
const Fleche = styled.img`
    
`

const Navigation = () => {
    return (
            <ArRow>
                <Fleche src="images/fleche.png"/>
            </ArRow>
    )
}

export default Navigation