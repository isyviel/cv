import React from "react"
import Input from './Input'
import Area from './Area'
import {Row} from "@bootstrap-styled/v4/lib"
import {Container} from "@bootstrap-styled/v4"
import Button from '@material-ui/core/Button';

const Form = ({content, windowClose, send,error, response,submit,values,change,...props}) => { 

    return (
        <Container>
          <form onSubmit={submit} values={values}>
            <Input required id="standard-required standard-error-helper-text" label="E-Mail" name="mail" value={values.mail} change={change}/>
            <Input label="Objet : " name="objet" value={values.objet} change={change} />
            <Area label="Votre message" name="message" value={values.message} change={change}/>
            <Input label="Nom" name="nom" value={values.nom}  change={change}/>
            <Input label="Prénom" name="prenom" value={values.prenom}  change={change}/>
            <Input label="Téléphone" name="phone" value={values.phone} change={change} />
            <Row className="justify-content-around">
              <Button type="submit" color="secondary" className="mt-3 mb-3">
                Envoyer
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