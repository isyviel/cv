import React from "react"
import Button from '@material-ui/core/Button';
import { ThemeProvider } from '@material-ui/styles';
import styled from "styled-components";
import Them from '../common/theme/MatThemes'

const CustomButton = styled(Button) `
    padding: 0 !important;
    max-height: 50px;
`

const Bouton= ({content,display,isActive,...props}) => {

    return (
        <ThemeProvider theme={Them}>
            <CustomButton color={isActive ? "secondary" :"primary"} onClick={display}><p>{content}</p></CustomButton>
        </ThemeProvider>)
}

export default Bouton