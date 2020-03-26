import React, { useState, useContext, useEffect } from "react"
import styled from "styled-components"
import Button from '@material-ui/core/Button';
import { createMuiTheme } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/styles';
import { grey } from '@material-ui/core/colors';


const them = createMuiTheme({ palette: {
                                primary: {
                                    main:grey[50],
                                },

 },
})

const Bouton= ({content,display,...props}) => {
    return <ThemeProvider theme={them}><Button color="primary" onClick={display}>{content}</Button></ThemeProvider>
}

export default Bouton