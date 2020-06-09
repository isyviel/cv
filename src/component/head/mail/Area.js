import React, { useEffect, useState } from "react"
import TextField from '@material-ui/core/TextField';
import { ThemeProvider } from '@material-ui/styles';
import Theme from '../../common/themes/Theme'
import useWindowSize from "../../common/hook/size";

const Area = ({label,change, send,value, name,...props}) => {
    const {h}  = useWindowSize()
    const [rows, setRows] = useState(3)

    useEffect(() => {
      if (h > 600){
        setRows(8)
      } else if (h>700){
        setRows(10)
      }
    },[h])

    return(
      <ThemeProvider theme={Theme}>
        <TextField
          id="outlined-multiline-static"
          label="Votre message"
          multiline
          rows={rows}
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
        