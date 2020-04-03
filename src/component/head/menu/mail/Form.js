import React, {useState} from "react"
import Input from './Input'
import Area from './Area'
import {Row} from "@bootstrap-styled/v4/lib"
import {Container} from "@bootstrap-styled/v4"
import Button from '@material-ui/core/Button';
import emailjs from 'emailjs-com'
import USER from '../../../common/constantes/mail'

const Form = ({title,content, windowClose, send,change,value,error, response,...props}) => { 

  const [values,setValues] = useState({})
  const user = USER

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

      emailjs.init(user);
      emailjs.send( 'outlook', 'contact', templateParams, user)

      .then((response) => {
        console.log('SUCCESS!', response.status, response.text);
        alert("Votre mail a bien été envoyé")
        
     }, (error) => {
        console.log('FAILED...', error);
        alert("Veuillez vérifier votre saisie ou me contacter à cette adresse : adeline.simon31@hotmail.fr")
     });
    }

  const handleChange = (event) => {
    event.persist();
    setValues({...values, [event.target.name]: event.target.value});
  }

    return (
        <Container>
          <p>Pour me contacter :</p>
          <form onSubmit={handleSubmit}>
            <Input required id="standard-required standard-error-helper-text" label="E-Mail" name="mail" value={values.mail} change={handleChange}/>
            <Input label="Objet : " name="objet" value={values.objet} change={handleChange} required={false}/>
            <Area label="Votre message" name="message" value={values.message} change={handleChange}/>
            <Input label="Nom" name="nom" value={values.nom} required={false} change={handleChange}/>
            <Input label="Prénom" name="prenom" value={values.prenom} required={false} change={handleChange}/>
            <Input label="Téléphone" name="phone" value={values.phone} change={handleChange} required={false}/>
            <Row className="justify-content-around">
              <Button type="submit" color="secondary" className="mt-3 mb-3">
                Envoyer
              </Button>
              <Button className="mt-3 mb-3" onClick={windowClose}>
                Annuler
              </Button>
              <Button className="mt-3 mb-3" onClick={windowClose}>
                Fermer
              </Button>
            </Row>  
          </form>
        </Container> 
    )
}

export default Form