import React from "react"
import TextField from '@material-ui/core/TextField';
import Them from '../../../common/theme/MatThemes'
import { ThemeProvider } from '@material-ui/styles';
import styled from "styled-components"
import { makeStyles } from '@material-ui/styles';
import InputBase from '@material-ui/core/InputBase';

const Input = ({label,required, change, send, value, name, ...props}) => {

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
          fullWidth
          className="mb-2"
          variant="outlined"
        />
        </ThemeProvider>
               
   )
}

export default Input
