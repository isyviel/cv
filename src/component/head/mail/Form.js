import React from "react"
import Input from './Input'
import Area from './Area'
import {Row} from "@bootstrap-styled/v4/lib"
import Button from '@material-ui/core/Button';
import Colors from '../../common/themes/Colors'
import { withStyles,makeStyles } from '@material-ui/core/styles'
import {LinearProgress} from '@material-ui/core'
import styled from "styled-components"
import useWindowSize from "../../common/hook/size";

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

const RowDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: auto;
`

const Form = ({content, windowClose, send,error, response,submit,values,change,isLoading,...props}) => { 

  const {w}  = useWindowSize();
  const formStyles = makeStyles((theme) => ({
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
      },
      active: {
        fontFamily: 'Dosis',
        width: "200px",
        backgroundColor: "#FFFFF",
        background: "rgba(255,255,255)",
        color: Colors.orange,
        boxShadow: "inset 6px 6px 13px #adadad, inset -6px -6px 13px #ffffff", 
      },
      input: {
          display: w > 576 ? "flex" : "block",
          justifyContent: "center",
      },
  }))
  
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
      
    <form onSubmit={submit}>
      <CustomDiv>
        {isLoading &&(<ColorLinearProgress fullWidth/>)}
      </CustomDiv>
      <Input required id="standard-required standard-error-helper-text" label="E-Mail" name="mail" value={values.mail} change={change}/>
      <Input label="Objet : " name="objet" value={values.objet} change={change}/>
      <Area label="Votre message" name="message" value={values.message} change={change}/>
      <RowDiv>
          <Input label="Nom" name="nom" value={values.nom} change={change}/>
          <Input label="Prénom" name="prenom" value={values.prenom} change={change}/>
          <Input label="Téléphone" name="phone" value={values.phone} change={change}/>
      </RowDiv> 
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
    </form>
  
    )
}

export default Form