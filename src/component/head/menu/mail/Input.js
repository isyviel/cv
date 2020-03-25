import React, { useState, useContext, useEffect } from "react"
import TextField from '@material-ui/core/TextField';
import {Row,Col} from "@bootstrap-styled/v4/lib"
import grey from '@material-ui/core/colors/grey';

const Input = ({label,required,...props}) => {

    return(
        <TextField
          required={required}
          id="required"
          variant="outlined"
          color={grey[50]}
          label={label}
          fullWidth
        />        
   )
}

export default Input
