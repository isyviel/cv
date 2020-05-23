import React from "react"
import { makeStyles } from '@material-ui/styles';
import Input from './Input'
import Area from './Area'
import {Row,Col} from "@bootstrap-styled/v4/lib"
import {Container} from "@bootstrap-styled/v4"
import Button from '@material-ui/core/Button';
import Colors from '../../common/themes/Colors'
import { withStyles } from '@material-ui/core/styles'
import {LinearProgress} from '@material-ui/core'

const Form = ({content, windowClose, send,error, response,submit,values,change,isLoading,...props}) => { 

  const useStyles = makeStyles((theme) => ({
    root: {
        background:"linear-gradient(145deg, #ff8300, #e66e00)", 
        boxShadow: "6px 6px 13px #8a4200, -6px -6px 13px #e6e6e6",
        color: "white",
        width: "25%",
        fontSize: "16px",
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
        <Container>
          <form onSubmit={submit} values={values}>
            <Input fullWidth={true} required id="standard-required standard-error-helper-text" label="E-Mail" name="mail" value={values.mail} change={change}/>
            <Input fullWidth={true} label="Objet : " name="objet" value={values.objet} change={change} />
            <Area label="Votre message" name="message" value={values.message} change={change}/>
            <Input label="Nom" name="nom" value={values.nom}  change={change}/>
            <Input label="Prénom" name="prenom" value={values.prenom}  change={change}/>
            <Input label="Téléphone" name="phone" value={values.phone} change={change} />
            {isLoading &&(<ColorLinearProgress/>)}
            <Row className="justify-content-around mt-4">
              <Button type="submit" color="secondary" className={classes.root}>
                Envoyer
              </Button>  
            </Row>  
          </form>
        </Container> 
    )
}

export default Form