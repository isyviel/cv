import React, { useState } from "react"
import styled from "styled-components"
import { Container,Row,Col } from "@bootstrap-styled/v4"
import Button from '@material-ui/core/Button'
import {MENU} from '../common/constantes/home'
import { ThemeProvider } from '@material-ui/styles';
import Theme from '../common/themes/Theme'

import Colors from '../common/themes/Colors'

const ButtonRow = styled(Row)`
    justify-content: end;
    align-items: center;
    margin-top: 10%;
`
const CustomButton = styled(Button)`
    background: linear-gradient(145deg, #ff8300, #e66e00);
    box-shadow:  25px 25px 50px #9c9c9c, 
                 -25px -25px 50px #ffffff;
    width : 75%;
`
const SquareContainer = styled(Container)`
    height: 350px;
    width: 5px;
    background-color: ${Colors.orange};
    margin : 10px;
    padding: 0 !important;
`
const MenuContainer = styled(Container)`
    position: fixed;
    right: 10px;
    top: 150px;
    z-index: -1;
`
const Menu = () => {
    const [isContent,setIsContent] = useState(true)
    const displayContent = () => {
        setIsContent(true)
    }
    return (
        <MenuContainer>
            <ThemeProvider theme={Theme}>
                <Row className="justify-content-end align-items-center">
                    <Col xs="3">
                        <ButtonRow>
                            <CustomButton onClick={displayContent} color='primary' size='large'>{MENU[0]}</CustomButton>
                        </ButtonRow>
                        <ButtonRow>
                            <CustomButton color='primary' size='large'>{MENU[1]}</CustomButton>
                        </ButtonRow>
                        <ButtonRow>
                            <CustomButton color='primary' size='large'>{MENU[2]}</CustomButton>
                        </ButtonRow>
                    </Col>
                    <SquareContainer/>
                </Row>
            </ThemeProvider>
        </MenuContainer>
    )
        
}
export default Menu