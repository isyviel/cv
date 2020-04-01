import React, { useState, useContext, useEffect,useReducer, useCallback } from "react"
import styled from "styled-components"
import Input from './Input'
import Area from './Area'
import {Row,Col} from "@bootstrap-styled/v4/lib"
import {Container} from "@bootstrap-styled/v4"
import Button from '@material-ui/core/Button';
import useForm from '../Mail'

const Form = ({title,content, windowClose, send,change,value,...props}) => { 

  const useForm = (initialState = {}, callback) => {
    const [values,setValues] = useState(initialState)

    const handleSubmit = useCallback(event => {
      event && event.preventDefault()
      callback && callback()
    },[callback])

    const handleChange = useCallback(event => {
    event.persist();
    setValues(values => ({...values, [event.target.name]: event.target.value}));
  },[])
    return {
      values,handleSubmit,handleChange
    }
  }

  const {values, handleChange, handleSubmit} = useForm(displayValue);
  const displayValue = () => {console.log(values)}
    return (
        <Container>
        <p>Pour me contacter :</p>
        <form onSubmit={handleSubmit}>
        <Input id="1" label="E-Mail" name="mail" value={values.mail} change={handleChange} required={true}/>
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
          </Row>  
          </form>
        
        </Container> 
    )
}

export default Form