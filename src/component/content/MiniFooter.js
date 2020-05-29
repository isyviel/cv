import React, { useState } from "react"
import styled from "styled-components"
import {Row,Col,Container} from "@bootstrap-styled/v4/lib"
import {Button, Menu, MenuItem, Paper, Grow, Slide, makeStyles, ClickAwayListener } from '@material-ui/core/';
import Drawer from '@material-ui/core/Drawer';
import ImageButton from "../common/img/ImageButton";
import Colors from "../common/themes/Colors";
import useWindowSize from "../common/hook/size";

const MinFooter = ({footerOpen, slideOutFooter,isHome,...props}) => {
    const {h,w} = useWindowSize()
    const CustomContainer = styled(Container)`
        position: fixed;
        bottom: 0px;
        background-color: #272727;
        min-width: 100%;
        z-index: 3;
        left : 80px;
        
        @media screen and (max-width:768px) {
            left : 100px;
        }
        @media screen and (max-width:576px) {
            left : 40px;
        }
    `
    const CustomRow = styled(Row) `
    width: ${w - 80}px;
    
    @media screen and (max-width:768px) {
        width: ${w - 100}px;
    }
    @media screen and (max-width:576px) {
        width: ${w - 40}px;
    }
`
    const useStyles = makeStyles((theme) => ({
        root: {
            color: Colors.orange,
            fontFamily: 'Dosis',
            fontSize: '16px',
            '&:hover': {
                color: "white",
            },   
        },
        phone : {
            color: Colors.orange,
            fontFamily: 'Dosis',
            fontSize: '16px',
        }
    }))
    
    const classes = useStyles()
  
    return (
        
        <Slide timeout={800} direction='right' in={footerOpen}>
            <CustomContainer>
                <CustomRow className="justify-content-between">
                    <Button className={classes.root} href="https://icones8.fr/icons/" target="_blank" rel="noopener noreferrer">Icons8.fr</Button>
                    <Button href="mailto:adeline.simon31@hotmail.fr" className={classes.root}>adeline.simon31@hotmail.fr</Button>
                </CustomRow>
                <CustomRow className="justify-content-between align-items-center">
                    <Button className={classes.root} href="https://material-ui.com/" target="_blank" rel="noopener noreferrer">Material-UI</Button>
                    <div className={classes.phone}>0621692869</div>
                </CustomRow>
                <CustomRow className="justify-content-between">
                    <Button className={classes.root} href="https://www.emailjs.com/" target="_blank" rel="noopener noreferrer">Service EmailJS</Button>
                    <Button className={classes.root} href="https://www.github.com/isyviel" target="_blank" rel="noopener noreferrer">Github</Button>
                </CustomRow>
                <CustomRow className="justify-content-between">
                    <Button className={classes.root} href="https://pages.github.com/" target="_blank" rel="noopener noreferrer">GitHubPages</Button>
                    <Button className={classes.root} href="https://www.linkedin.com/in/adeline-simon-b8614018b" target="_blank" rel="noopener noreferrer">Linkedin</Button>
                </CustomRow>
            </CustomContainer>
        </Slide>
    )
}

export default MinFooter