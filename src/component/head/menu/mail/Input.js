import React, { useState, useContext, useEffect } from "react"
import TextField from '@material-ui/core/TextField';
import Them from '../../../common/theme/MatThemes'
import { createMuiTheme } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/styles';
import { grey,orange } from '@material-ui/core/colors';




const Input = ({label,required, change, send, value,...props}) => {

    return(
      <ThemeProvider theme={Them}>
        <TextField
          required={required}
          id="standard-secondary"
          label={label}
          fullWidth
          color="secondary"
          className="pt-2 mb-2"
          onChange={change}
          value={value}
        />
        </ThemeProvider>
               
   )
}

export default Input
