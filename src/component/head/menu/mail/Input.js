import React, { useState, useContext, useEffect } from "react"
import TextField from '@material-ui/core/TextField';

import grey from '@material-ui/core/colors/grey';
import { createMuiTheme } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/styles';
import { orange } from '@material-ui/core/colors';


const them = createMuiTheme({ palette: {
                                primary: orange

 },
})

const Input = ({label,required,...props}) => {

    return(
      <ThemeProvider theme={them}>
        <TextField
          required={required}
          id="required"
          color={grey[50]}
          label={label}
          fullWidth
          color="primary"
        />
        </ThemeProvider>
               
   )
}

export default Input
