import React from "react"
import TextField from '@material-ui/core/TextField';
import Theme from '../../common/themes/Theme'
import { ThemeProvider } from '@material-ui/styles';
import { makeStyles } from '@material-ui/styles';
import useWindowSize from "../../common/hook/size";


const Input = ({label,required, change, send, value, name, ...props}) => {

  const {w}  = useWindowSize();
  const useStyles = makeStyles((theme) => ({
    root: {
      marginRight: "1%",
      marginLeft: "1%",
      marginBottom: w < 576 ? "10px" : "0",
    },
  }))

const classes = useStyles()

    return(
      <ThemeProvider theme={Theme}>
        <TextField
          required={required}
          id="standard-secondary"
          label={label}
          color="secondary"
          value={value}
          name={name}
          fullWidth
          onChange={change}
          className={name === "nom" || name === "prenom" || name === "phone" ? classes.root : "mb-2"}
          variant="outlined"
        />
        </ThemeProvider>
               
   )
}

export default Input
