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
            width: "75%",
            fontSize: "18px",
            fontFamily: 'Dosis',
            '&:hover': {
            backgroundColor: "#FF7A00", 
            boxShadow: "inset 6px 6px 13px #b05400, inset -6px -6px 13px #ffa000",
            color: "white",
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
        <CustomCard>
            <h1 className="h3">{projects}</h1>
                <CardContent>
                        <Typography className={classes.label} gutterBottom>WheelRide</Typography>
                        <article className="mb-4">
                            Application web, gestion de l'entretien de tous types de véhicules, mise en place de rappels, 
                            de calendriers et calcul automatiques des entretiens réguliers selon le kilométrage.
                        </article>
                        <Row>
                            <Col>
                                <Button className={classes.link} href="https://miro.com/app/board/o9J_kvcSzp8=/" target = "__blank">Conception</Button>
                            </Col>
                            <Col>
                                <Button className={classes.link} href="https://adeline75189.invisionapp.com/prototype/wheelRide-ck91gch6t007syi01cl59x4j5?v=k5%2BJ%2BVpfNHAHFms410AliA%3D%3D&linkshare=urlcopied" target = "__blank">
                                    Wireframes
                                </Button>
                            </Col>
                        </Row>
                 </CardContent>
        </CustomCard>
    </Fade>
    )
}

export default Projects