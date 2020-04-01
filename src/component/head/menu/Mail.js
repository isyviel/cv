import React , {useState,useContext} from "react"
import Input from './mail/Input'
import Area from './mail/Area'
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import Colors from '../../common/theme/Colors'
import styled, { ThemeProvider } from "styled-components"
import ImageButton from "../../common/ImageButton"
import Them from "../../common/theme/MatThemes";
import {Row,Col} from "@bootstrap-styled/v4/lib"
import { FormControl } from '@material-ui/core';
import Form from './mail/Form'
import { MDBPopover, MDBPopoverBody, MDBBtn } from "mdbreact";
import Popover from '@material-ui/core/Popover';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import USER from '../../common/constantes/mail'
import emailjs from 'emailjs-com'
import SendEmailContext from '../../context/SendEmailContext'

const CustomP = styled.p`
font-size: 22px;
color: ${Colors.orange};

@media screen and (max-width:992px) {
    font-size: 14px;
}
`
const CustomDiv = styled(DialogContent)`
  background-color: white;  
`
const useStyles = makeStyles((theme) => ({
  typography: {
    padding: theme.spacing(2),
  },
}));

const Mail = ({send,...props}) => {

    const [open, setOpen] = useState(null);
    

    const handleClickOpen = (event) => {
     setOpen(true)
    };
  
    const handleClose = () => {
      setOpen(false)
    };
    
    const sendThenClose = () => {
      handleClose();
    }

    return <div>
    <Button onClick={handleClickOpen}>
      <ImageButton src="images/mail.png" />
    </Button>
    <ThemeProvider theme={Them}>
        <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title" fullWidth>
          <CustomDiv>
          <DialogContent className="p-2">
            <FormControl>
              <Form windowClose={handleClose} send={sendThenClose}/>
            </FormControl>
          </DialogContent>
          </CustomDiv>
        </Dialog>
        </ThemeProvider>
  </div>
   
      
      
    
}

export default Mail