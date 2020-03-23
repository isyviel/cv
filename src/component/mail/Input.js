import React, { useState, useContext, useEffect } from "react"
import TextField from '@material-ui/core/TextField';
import {Row,Col} from "@bootstrap-styled/v4/lib"

const Input = ({label,required,...props}) => {

    return(
        <TextField
          required={required}
          id="required"
          label={label}
          fullWidth
        />        
   )
}

export default Input
