import React , {useState} from "react";
import Button from '@material-ui/core/Button';
import { ThemeProvider } from "styled-components"
import ImageButton from "../../common/ImageButton"
import Them from "../../common/theme/MatThemes";
import { FormControl, DialogTitle, LinearProgress, DialogContent, Dialog } from '@material-ui/core';
import Form from './mail/Form'
import emailjs from 'emailjs-com'
import USER from '../../common/constantes/mail'

const Mail = () => {
    const [open, setOpen] = useState(false)
    const [isLoading, setIsLoading] = useState(false)
    const [values,setValues] = useState({})
    
    const user = USER

    const handleClickOpen = (event) => {
     setOpen(true)
    };
  
    const handleClose = () => {
      setOpen(false)
    };

    const handleChange = (event) => {
      event.persist();
      setValues({...values, [event.target.name]: event.target.value});
    }

    const handleSubmit = (event) => {
      event && event.preventDefault()
      
      const templateParams = {
        from_name: values.mail,
        to_name: user,
        object: values.objet,
        content: values.message,
        name: values.nom,
        firstname: values.prenom,
        phone: values.phone
      }
      setIsLoading(true)
      emailjs.init(user);
      emailjs.send('outlook', 'contact', templateParams, user)
      
      .then((response) => {
        console.log('SUCCESS!', response.status, response.text)
        alert("Votre e-mail a été envoyé")
        setIsLoading(false)
        
     }, (error) => {
        console.log('FAILED...', error);
        alert("Veuillez vérifier votre saisie ou me contacter à cette adresse : adeline.simon31@hotmail.fr")
        setIsLoading(false)
     });
    }

    return (
      <div>
        <Button onClick={handleClickOpen}>
          <ImageButton src="images/mail.png" alt="icone arobase" id="envoyer_mail"/>
        </Button>
        <ThemeProvider theme={Them}>
          <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title" fullWidth>
              <DialogTitle>Pour me contacter...</DialogTitle>
              {isLoading && (<LinearProgress color="secondary"/>)}
              <DialogContent className="p-2">
                <FormControl>
                  <Form 
                  windowClose={handleClose} 
                  submit={handleSubmit}
                  values={values}
                  change={handleChange}/>
                </FormControl>
              </DialogContent>
          </Dialog>
        </ThemeProvider>
      </div>
    ) 
}

export default Mail

