import React , {useState} from "react"
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



const CustomDiv = styled(DialogContent)`
  background-color: white;  
`
const Mail = () => {
    const [open, setOpen] = useState(false);
  
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
        <ThemeProvider theme={Them}>
        <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title" fullWidth>
          <CustomDiv>
      
          <DialogContent className="p-2">
            <p>Pour me contacter :</p>
            <Input label="E-Mail" required={true}/>
            <Input label="Objet : " required={false}/>
            <Area/>
          
            <Input label="Nom" required={false}/>
            <Input label="Prénom" required={false}/>
            
            <Input label="Téléphone" required={false}/>
            <Row className="justify-content-around">
              <Button color="secondary" className="mt-3 mb-3" onClick={sendThenClose}>
                Envoyer
              </Button>
              <Button className="mt-3 mb-3" onClick={handleClose}>
                Annuler
              </Button>
            </Row>   
          </DialogContent>
          </CustomDiv>
        </Dialog>
        </ThemeProvider>
      </div>
    )
}
export default Mail