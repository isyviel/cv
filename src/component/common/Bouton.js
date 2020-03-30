import React from "react"
import Button from '@material-ui/core/Button';
import { createMuiTheme } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/styles';
import { grey } from '@material-ui/core/colors';


const them = createMuiTheme(
    { palette: {
                    primary: { main:grey[50],},
                },
    })

const Bouton= ({content,display,...props}) => {

    return (
        <ThemeProvider theme={them}>
            <Button color="primary" onClick={display}><p className="text-align-center">{content}</p></Button>
        </ThemeProvider>)
}

export default Bouton