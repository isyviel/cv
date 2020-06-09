import React from "react"
import TextField from '@material-ui/core/TextField';
import { ThemeProvider } from '@material-ui/styles';
import Theme from '../../common/themes/Theme'

const Area = ({label,change, send,value, name,...props}) => {

    return(
      <ThemeProvider theme={Theme}>
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
          variant="outlined"
        />
      </ThemeProvider>    
    )
}

export default Area
        