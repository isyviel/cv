import React, { useState, useContext, useEffect } from "react"
import { Link } from "react-router-dom"
import Form from './mail/Form'
import Input from './mail/Input'
import Area from './mail/Area'
import {Row,Col} from "@bootstrap-styled/v4/lib"
import Container from '../../common/Container'
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Spacer from '../../common/Spacer'
import Colors from '../../common/theme/Colors'
import styled from "styled-components"
import ImageButton from "../../common/ImageButton"
import grey from '@material-ui/core/colors/grey';

const CustomButton = styled(Button)`
  color = ${Colors.orange};
  font-weight: bold;
  border-color = ${Colors.orange};
  border-radius: 5px;
`

const CustomDiv = styled(DialogContent)`
  background-color: white;  
`
const Mail = () => {
    const [open, setOpen] = React.useState(false);
  
    const handleClickOpen = () => {
      setOpen(true);
    };
  
    const handleClose = () => {
      setOpen(false);
    };
    
    const sendThenClose = () => {
      alert("envoyé");
      handleClose();
    }

    
    return(
      <div>
        <ImageButton src="images/mail.png" onClick={handleClickOpen}/>
        
        <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title" fullWidth>
          <CustomDiv>
          <DialogTitle id="form-dialog-title">Pour me contacter...</DialogTitle>
          <DialogContent>
            <Input label="E-Mail" required={true}/>
            <Input label="Objet : " required={false}/>
            <Area/>
            <Input label="Nom" required={false}/>
            <Input label="Prénom" required={false}/>
            <Input label="Téléphone" required={false}/>
            <CustomButton className="mt-3" onClick={sendThenClose}>
              Envoyer
            </CustomButton>
            <CustomButton  className="mt-3" onClick={handleClose}>
              Annuler
            </CustomButton>   
          </DialogContent>
          </CustomDiv>
        </Dialog>
      </div>
    )
}
export default Mail