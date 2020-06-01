import React from "react"
import Input from './Input'
import Area from './Area'
import {Row,Col} from "@bootstrap-styled/v4/lib"
import Button from '@material-ui/core/Button';
import Colors from '../../common/themes/Colors'
import { withStyles } from '@material-ui/core/styles'
import {LinearProgress} from '@material-ui/core'
import styled from "styled-components"
import Container from "@bootstrap-styled/v4/lib/Container";
import useWindowSize from "../../common/hook/size";
import formStyles from "../../common/themes/formTheme";

const CustomDiv = styled.div`
  height: 20px;
  margin: 0;

  @media screen and (max-width:1440px) {
    max-width:80%;
    min-width: 80%;
  }
  @media screen and (max-width:1200px) {
   
    min-width: 95%;
  }
  @media screen and (max-width:992px) {
    
    min-width: 90%;
  }
  @media screen and (max-width:768px) {
    
    min-width: 85%;
  }
  @media screen and (max-width:576px) {
    min-width: 33%;
    max-width: 33%;
  }
`

const CustomP = styled.p`
  color: ${Colors.orange};
`

const Form = ({content, windowClose, send,error, response,submit,values,change,isLoading,...props}) => { 

  const {h,w}  = useWindowSize();
  const CustomForm = styled.form`
    width: 900px;

    @media screen and (max-width:1440px) {
      max-width:80%;
      margin: 0 !important;
      padding: 0 !important;
    }
    @media screen and (max-width:1200px) {
      max-width:95%;
      margin: 0 !important;
      padding: 0 !important;
    }
    @media screen and (max-width:992px) {
      max-width:90%;
    }
    @media screen and (max-width:768px) {
      max-width:85%;
    
    }
    @media screen and (max-width:576px) {
      max-width:${w - 130}px;
    }
  `
  const classes = formStyles()

  const ColorLinearProgress = withStyles({
    colorPrimary: {
      backgroundColor: Colors.darkGrey,
    },
    barColorPrimary: {
      backgroundColor: Colors.orange,
    },
  })(LinearProgress);

  return (
    <Container className="p-0 no-gutters" >
      <CustomDiv>
        {isLoading &&(<ColorLinearProgress fullWidth/>)}
      </CustomDiv>
      <CustomForm onSubmit={submit} values={values}>
        <Input required id="standard-required standard-error-helper-text" label="E-Mail" name="mail" value={values.mail} change={change}/>
        <Input label="Objet : " name="objet" value={values.objet} change={change} />
        <Area label="Votre message" name="message" value={values.message} change={change}/>
        <div className={classes.input}>
            <Input label="Nom" name="nom" value={values.nom}  change={change}/>
            <Input label="Prénom" name="prenom" value={values.prenom}  change={change}/>
            <Input label="Téléphone" name="phone" value={values.phone} change={change} />
        </div> 
        <Row className="justify-content-around mt-4">
          {!values.mail ? 
            <div>
              <CustomP>* Adresse mail obligatoire</CustomP>
              <Button className={classes.active} disabled>Envoyer</Button>
            </div>
          :
            <div>
                <CustomP className="text-white">* Adresse mail obligatoire</CustomP>
                <Button type="submit" className={isLoading ? classes.active: classes.root}
                disabled={isLoading ? true : false}>
                  Envoyer
                </Button>
            </div>}  
        </Row>  
      </CustomForm>
    </Container> 
    )
}

export default Form