import React from "react"
import TextField from '@material-ui/core/TextField';
import Them from '../../../common/theme/MatThemes'
import { ThemeProvider } from '@material-ui/styles';

const Input = ({label,required, change, send, value, name,...props}) => {

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
          name={name}
        />
        </ThemeProvider>
               
   )
}

export default Input
