import React, { useState, useContext, useEffect } from "react"
import TextField from '@material-ui/core/TextField';
import { ThemeProvider } from '@material-ui/styles';
import Them from '../../../common/theme/MatThemes'

const Area = ({label,...props}) => {
    return(
      <ThemeProvider theme={Them}>
        <TextField
          id="outlined-multiline-static"
          label="Votre message"
          multiline
          rows="10"
          fullWidth
          className="pt-2 mb-2"
          color="secondary"
        />
        </ThemeProvider>    
    )
}

export default Area
        