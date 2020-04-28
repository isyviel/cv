import React from "react"
import { Container,Row,Col } from "@bootstrap-styled/v4"
import styled from "styled-components"
import {TECHNOS} from './newV/common/constantes/home'
import Menu from './Menu'

const ContentContainer = styled(Container)
`
    position: relative;
    left: 600px;
    top: 30px;
    color: white;
    font-size: 24px;
`

const CustomCol = styled(Col)
`
    margin-bottom: 80px;
`
const Content = () => {
    
    return (
        <ContentContainer fluid>
            <Row className="align-items-end">
                <CustomCol xs="2">
                    {TECHNOS.map((label,index) => {
                        return <Row key={index}>{label}</Row>
                    })}
                    
                </CustomCol>
                <Menu/>
            </Row>
        </ContentContainer>
    )
}

export default Content