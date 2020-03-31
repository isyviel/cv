import React from "react"
import Button from '@material-ui/core/Button';
import { createMuiTheme } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/styles';
import { grey, orange } from '@material-ui/core/colors';
import styled from "styled-components";

const CustomButton = styled(Button) `
    padding: 0 !important;
    max-height: 50px;
`

const them = createMuiTheme(
    { palette: {
                   primary: { main: grey[50] },
                   secondary: { main: orange[700] },
                },
    })


const Bouton= ({content,display,isActive,...props}) => {

    return (
        <ThemeProvider theme={them}>
            <CustomButton color={isActive ? "secondary" :"primary"} onClick={display}><p>{content}</p></CustomButton>
        </ThemeProvider>)
}

export default Bouton