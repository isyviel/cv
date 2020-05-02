import React from "react"
import TextField from '@material-ui/core/TextField';
import Them from '../../../common/theme/MatThemes'
import { ThemeProvider } from '@material-ui/styles';

const Input = ({label,required, change, send, value, name, fullWidth, className,...props}) => {

    return(
      <ThemeProvider theme={Them}>
        <TextField
          required={required}
          id="standard-secondary"
          label={label}
          color="secondary"
          onChange={change}
          value={value}
          name={name}
          fullWidth={fullWidth}
          className="mb-2 mr-4"
          variant="outlined"
        />
        </ThemeProvider>
               
   )
}

export default Input
