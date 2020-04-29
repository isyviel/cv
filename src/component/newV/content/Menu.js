import React from "react"
import styled from "styled-components"
import { Row } from "@bootstrap-styled/v4"
import Button from '@material-ui/core/Button'
import {MENU} from '../common/constantes/home'
import { ThemeProvider } from '@material-ui/styles';
import Theme from '../common/themes/Theme'
import Name from "../../Name"
import Navigation from "./Navigation"

const CenterRow = styled(Row)`
    justify-content: center;
    align-items: center;
    margin-top: 50px;
`

const CustomButton = styled(Button)`
    background: linear-gradient(145deg, #ff8300, #e66e00);
    box-shadow:  25px 25px 50px #9c9c9c, 
                 -25px -25px 50px #ffffff;
    width : 350px;
`

const Menu = () => {
    return (
        <ThemeProvider theme={Theme}>
        <Row>
            <Name/>
        </Row>
        {MENU.map((label,index)=> {
            return(
            <CenterRow key={index}>
                <CustomButton color='primary' size='large'>{label}</CustomButton>
            </CenterRow>
            )
        })}

        </ThemeProvider>
    )
        
}
export default Menu