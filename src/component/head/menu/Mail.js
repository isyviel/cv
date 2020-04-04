import React , {useState} from "react";
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogContent from '@material-ui/core/DialogContent';
import { ThemeProvider } from "styled-components"
import ImageButton from "../../common/ImageButton"
import Them from "../../common/theme/MatThemes";
import { FormControl } from '@material-ui/core';
import Form from './mail/Form'

const Mail = () => {
    const [open, setOpen] = useState(false);
  
    const handleClickOpen = (event) => {
     setOpen(true)
    };
  
    const handleClose = () => {
      setOpen(false)
    };
    

    return (
      <div>
        <Button onClick={handleClickOpen}>
          <ImageButton src="images/mail.png" alt="icone arobase" id="envoyer_mail"/>
        </Button>
        <ThemeProvider theme={Them}>
          <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title" fullWidth>
              <DialogContent className="p-2">
                <FormControl>
                  <Form windowClose={handleClose}/>
                </FormControl>
              </DialogContent>
          </Dialog>
        </ThemeProvider>
      </div>
    ) 
}

export default Mail

