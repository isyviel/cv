import React from "react"
import TextField from '@material-ui/core/TextField';
import { ThemeProvider } from '@material-ui/styles';
import Them from '../../../common/theme/MatThemes'

const Area = ({label,change, send,value, name,...props}) => {


    return(
      <ThemeProvider theme={Them}>
        <TextField
          id="outlined-multiline-static"
          label="Votre message"
          multiline
          rows="4"
          fullWidth
          color="secondary"
          onChange={change}
          value={value}
          name={name}
          className="mb-4"
        />
        </ThemeProvider>    
    )
}

export default Area
        