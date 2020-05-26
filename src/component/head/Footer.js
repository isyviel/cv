import React, { useState } from "react"
import styled from "styled-components"
import {Row,Col,Container} from "@bootstrap-styled/v4/lib"
import {Button, Menu, MenuItem, Paper, Grow, Slide, makeStyles} from '@material-ui/core/';
import Drawer from '@material-ui/core/Drawer';
import ImageButton from "../common/ImageButton";
import Colors from "../common/themes/Colors";

const CustomContainer = styled(Container)`
    position: fixed;
    bottom: 0px;
    background-color: #272727;
    min-width: 100%;
    padding: 0 40px 0 450px;

    @media screen and (max-width:1200px) {
        padding: 0 40px 0 350px;
     }
     @media screen and (max-width:992px) {
         padding: 0 40px 0 150px;
     }
 
     @media screen and (max-width:768px) {
         padding: 0 40px 0 100px;
     }
     @media screen and (max-width:576px) {
         padding: 0 40px 0 40px;
         
     }
    
`
const Footer = ({open,...props}) => {
    const useStyles = makeStyles((theme) => ({
        root: {
            color: "white",
            fontFamily: 'Dosis',
            fontSize: '16px',
            '&:hover': {
                color: Colors.orange,
            },   
        },
        phone : {
            color: "white",
            fontFamily: 'Dosis',
            fontSize: '16px',
        }
    }))
    
    const classes = useStyles()
  
    return (
        <Slide timeout={800} direction='right' in={open}>
            <CustomContainer>
                <Row className="justify-content-between">
                    <Button className={classes.root} href="https://icones8.fr/icons/" target="_blank" rel="noopener noreferrer">Icons8.fr</Button>
                    <Button href="mailto:adeline.simon31@hotmail.fr" className={classes.root}>adeline.simon31@hotmail.fr</Button>
                </Row>
                <Row className="justify-content-between align-items-center">
                    <Button className={classes.root} href="https://material-ui.com/" target="_blank" rel="noopener noreferrer">Material-UI</Button>
                    <div className={classes.phone}>0621692869</div>
                </Row>
                <Row className="justify-content-between">
                    <Button className={classes.root} href="https://www.emailjs.com/" target="_blank" rel="noopener noreferrer">Service EmailJS</Button>
                    <Button className={classes.root} href="https://www.github.com/isyviel" target="_blank" rel="noopener noreferrer">Github</Button>
                </Row>
                <Row className="justify-content-between">
                    <Button className={classes.root} href="https://pages.github.com/" target="_blank" rel="noopener noreferrer">GitHubPages</Button>
                    <Button className={classes.root} href="https://www.linkedin.com/in/adeline-simon-b8614018b" target="_blank" rel="noopener noreferrer">Linkedin</Button>
                </Row>
            </CustomContainer>
        </Slide>
    )
}

export default Footer