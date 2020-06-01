import React , {useState} from "react"
import { FormControl, Container, Fade} from '@material-ui/core'
import Form from '../../head/mail/Form'
import SentAlert from '../../head/mail/SentAlert'
import emailjs from 'emailjs-com'
import {USER} from '../../common/constantes/mail'

const SendMail = ({isMail, ...props})=> {

    const user = USER
    const [open, setOpen] = useState(false)
    const [snackOpen, setSnackOpen] = useState(false)
    const [isLoading, setIsLoading] = useState(false)
    const [values,setValues] = useState({})
    const [status, setStatus] = useState(null)

    const handleClose = () => {
        setOpen(false)
    }
  
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
          setStatus(true)
          setSnackOpen(true)
          setIsLoading(false)
          
       }, (error) => {
          console.log('FAILED...', error);
          setStatus(false)
          setSnackOpen(true)
          setIsLoading(false)
          
       })
      }

  return(
    <Fade timeout={800} in={isMail}>
      <Container>
        <FormControl>
          <Form
            windowClose={handleClose} 
            submit={handleSubmit}
            values={values}
            change={handleChange}
            isLoading={isLoading}/>
        </FormControl>
        <SentAlert 
          open={snackOpen} 
          status={status} 
        />
      </Container>
    </Fade>
  )
}

export default SendMail