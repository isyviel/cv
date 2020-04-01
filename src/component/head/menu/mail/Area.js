import React, { useState, useContext, useEffect } from "react"
import TextField from '@material-ui/core/TextField';
import { ThemeProvider } from '@material-ui/styles';
import Them from '../../../common/theme/MatThemes'

const Area = ({label,change, send,value,...props}) => {


    return(
      <ThemeProvider theme={Them}>
        <TextField
          id="outlined-multiline-static"
          label="Votre message"
          multiline
          rows="5"
          fullWidth
          className="pt-2 mb-2"
          color="secondary"
          onChange={change}
          value={value}
        />
        </ThemeProvider>    
    )
}

export default Area
        