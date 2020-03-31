import React, { useState, useContext, useEffect } from "react"
import styled from "styled-components"
import Input from './Input'
import Area from './Area'
import {Row,Col} from "@bootstrap-styled/v4/lib"
import {Container} from "@bootstrap-styled/v4"
import Button from '@material-ui/core/Button';


const Form = ({title,content, windowClose, send,value,...props}) => {
    
    
    return (
        <Container>
        <p>Pour me contacter :</p>
        <Input label="E-Mail" required={true} />
        <Input label="Objet : " required={false}/>
        <Area/>
      
        <Input label="Nom" required={false}/>
        <Input label="Prénom" required={false}/>
        
        <Input label="Téléphone" required={false}/>
        <Row className="justify-content-around">
          <Button color="secondary" className="mt-3 mb-3" onClick={send}>
            Envoyer
          </Button>
          <Button className="mt-3 mb-3" onClick={windowClose}>
            Annuler
          </Button>
        </Row>  
        </Container> 
    )
}

export default Form