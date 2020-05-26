import React from "react"
import {Row,Col} from "@bootstrap-styled/v4/lib"
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/styles';
import Colors from "../../common/themes/Colors";
import { Fade, Button } from "@material-ui/core"
import Container from "@bootstrap-styled/v4/lib/Container";
import styled from "styled-components"

const CustomCard = styled(Card)`
    width: 500px;
    @media screen and (max-width:992px) {
       width: 95%;
       margin: 20px 0 0 20px; 
    }
`
const CategoryTitle = styled.h1`
    font-family: 'Bangers';
    font-size: 20px;
    color: ${Colors.orange};
    margin-top: 15px;
    @media screen and (max-width:576px) {
        margin: 20px 0 10px 0;
        text-align: center;
        font-size: 16px;
     }
`
const Projects = ({projects,isProject,...props})=> {

    const useStyles = makeStyles((theme) => ({
        root: {
            fontSize: "20px",
            fontFamily: 'Dosis',
            textDecorationStyle: 'none',
            color: 'black',
        },

        link : { 
            background:"linear-gradient(145deg, #ff8300, #e66e00)", 
            boxShadow: "6px 6px 13px #8a4200, -6px -6px 13px #e6e6e6",
            color: "white",
            width: "200px",
           margin: "5px 0",
            fontFamily: 'Dosis',
            '&:hover': {
            backgroundColor: "#FF7A00", 
            boxShadow: "inset 6px 6px 13px #b05400, inset -6px -6px 13px #ffa000",
            color: "white",
            '@media screen and (max-width:576px)': {
                
            },
          }, 
        },

        label: {
            fontSize: "22px",
            fontFamily: 'Bangers',
        }


}))
    
    const classes = useStyles()
return(
    <Fade in={isProject} timeout={800}>
        <div className="ml-2 mb-sm-2 mb-xs-0">
            <CategoryTitle>En cours ...</CategoryTitle>
        <Row>
            <CustomCard>
                <h3 className="h3">{projects}</h3>
                    <CardContent>
                            <Typography className={classes.label} gutterBottom>WheelRide</Typography>
                            <article className="mb-4">
                                Application web, gestion de l'entretien de tous types de véhicules, mise en place de rappels, 
                                de calendriers et calcul automatiques des entretiens réguliers selon le kilométrage.
                            </article>
                            <Row className="justify-content-around">
                            <Button className={classes.link} href="https://miro.com/app/board/o9J_kvcSzp8=/" target = "__blank">
                                Conception
                            </Button>
                            <Button className={classes.link} href="https://adeline75189.invisionapp.com/prototype/wheelRide-ck91gch6t007syi01cl59x4j5?v=k5%2BJ%2BVpfNHAHFms410AliA%3D%3D&linkshare=urlcopied" target = "__blank">
                                Wireframes
                            </Button></Row>
                    </CardContent>
            </CustomCard>
        </Row>
        <CategoryTitle>A venir ...</CategoryTitle>
        <Row>
            <CustomCard>
                <h3 className="h3">{projects}</h3>
                    <CardContent>
                            <Typography className={classes.label} gutterBottom>Liste d'envoi</Typography>
                            <article className="mb-4">
                                Application d'envoi automatique de mails pour une boutique
                            </article>
                    </CardContent>
            </CustomCard>
        </Row>
        </div>
    </Fade>
    )
}

export default Projects