

import React, { useState, useContext, useEffect } from "react"
import TextField from '@material-ui/core/TextField';
import {Row,Col} from "@bootstrap-styled/v4/lib"

const Area = ({label,...props}) => {
    return(    
        <TextField
          id="outlined-multiline-static"
          label="Votre message"
          multiline
          rows="4"
          variant="outlined"
          fullWidth
          className="mt-4"
        />    
    )
}

export default Area
        