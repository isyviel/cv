import React from "react"
import TextField from '@material-ui/core/TextField';
import Theme from '../../common/themes/Theme'
import { ThemeProvider } from '@material-ui/styles';
import styled from "styled-components"
import { makeStyles } from '@material-ui/styles';

const Input = ({label,required, change, send, value, name, ...props}) => {

    return(
      <ThemeProvider theme={Theme}>
        <TextField
          required={required}
          id="standard-secondary"
          label={label}
          color="secondary"
          onChange={change}
          value={value}
          name={name}
          fullWidth
          className="mb-2"
          variant="outlined"
        />
        </ThemeProvider>
               
   )
}

export default Input
