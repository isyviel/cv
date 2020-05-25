import React from "react"
import { makeStyles } from '@material-ui/styles';
import Input from './Input'
import Area from './Area'
import {Row,Col} from "@bootstrap-styled/v4/lib"
import Button from '@material-ui/core/Button';
import Colors from '../../common/themes/Colors'
import { withStyles } from '@material-ui/core/styles'
import {LinearProgress} from '@material-ui/core'
import styled from "styled-components"
import Container from "@bootstrap-styled/v4/lib/Container";

const CustomDiv = styled.div`
  height: 20px;
`
const CustomP = styled.p`
  color: ${Colors.orange};
`
const CustomForm = styled.form`
  width: 900px;
  margin: 0 0 0 10%;

  @media screen and (max-width:576px) {
    max-width:285px;
    padding: 0 !important;
}
`
const Form = ({content, windowClose, send,error, response,submit,values,change,isLoading,...props}) => { 

  const useStyles = makeStyles((theme) => ({
    root: {
      background:"linear-gradient(145deg, #ff8300, #e66e00)", 
      boxShadow: "6px 6px 13px #8a4200, -6px -6px 13px #e6e6e6",
      color: "white",
      width: "200px",
      fontFamily: 'Dosis',
      '&:hover': {
          backgroundColor: "#FF7A00", 
          boxShadow: "inset 6px 6px 13px #b05400, inset -6px -6px 13px #ffa000",
        },   
}}))

const classes = useStyles()

const ColorLinearProgress = withStyles({
  colorPrimary: {
    backgroundColor: Colors.darkGrey,
  },
  barColorPrimary: {
    backgroundColor: Colors.orange,
  },
})(LinearProgress);

    return (
        <Container className="p-0 container-xs" >
          <CustomDiv>{isLoading &&(<ColorLinearProgress fullWidth/>)}</CustomDiv>
          <CustomForm onSubmit={submit} values={values}>
            <Input required id="standard-required standard-error-helper-text" label="E-Mail" name="mail" value={values.mail} change={change}/>
            <Input label="Objet : " name="objet" value={values.objet} change={change} />
            <Area label="Votre message" name="message" value={values.message} change={change}/>
              <Col xs="12 p-0">
                <Input label="Nom" name="nom" value={values.nom}  change={change}/>
              </Col>
              <Col xs="12 p-0">
                <Input label="Prénom" name="prenom" value={values.prenom}  change={change}/>
              </Col>
              <Col xs="12 p-0">
                <Input label="Téléphone" name="phone" value={values.phone} change={change} />
              </Col>
            <Row className="justify-content-around mt-4">
              {!values.mail ? 
                <div>
                  <CustomP>* Adresse mail obligatoire</CustomP>
                  <Button className={classes.root} disabled>Envoyer</Button>
                </div>
              :
                <div>
                    <CustomP className="text-white">* Adresse mail obligatoire</CustomP>
                    <Button type="submit" className={classes.root}>
                      Envoyer
                    </Button>
                </div>
                }  
            </Row>  
          </CustomForm>
        </Container> 
    )
}

export default Form