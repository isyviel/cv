import React from "react"
import Button from '@material-ui/core/Button';
import { ThemeProvider } from '@material-ui/styles';
import styled from "styled-components";
import Them from '../common/theme/MatThemes'

const CustomButton = styled(Button) `
    max-height: 40px;
`

const Bouton= ({content,display,isActive, variant, href,...props}) => {

    return (
        <ThemeProvider theme={Them}>
            <CustomButton color={isActive ? "secondary" :"primary"} variant={variant} fullWidth onClick={display} href={href}>{content}</CustomButton>
        </ThemeProvider>)
}

export default Bouton