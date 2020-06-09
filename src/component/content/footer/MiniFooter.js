import React from "react"
import styled from "styled-components"
import {Row,Container} from "@bootstrap-styled/v4/lib"
import {Button, Slide} from '@material-ui/core/';
import useWindowSize from "../../common/hook/size";
import footerStyles from "../../common/themes/footerTheme";

const CustomContainer = styled(Container)`
        position: fixed;
        bottom: 0px;
        background-color: #272727;
        min-width: 100%;
        z-index: 4;
        left : 80px;
        
        @media screen and (max-width:768px) {
            left : 100px;
        }
        @media screen and (max-width:576px) {
            left : 40px;
        }
    `
const CustomRow = styled(Row) `
    width: ${() => {
        const {w} = useWindowSize()
        const width = w-80
        return width}}px;
    
    @media screen and (max-width:768px) {
        width: ${() => {
            const {w} = useWindowSize()
            const width = w-100
            return width}}px;
    }
    @media screen and (max-width:576px) {
        width: ${() => {
            const {w} = useWindowSize()
            const width = w-40
            return width}}px;
    }
`

const MinFooter = ({footerOpen, slideOutFooter,isHome,...props}) => {

    const classes = footerStyles()
  
    return (
        <Slide timeout={800} direction='right' in={footerOpen}>
            <CustomContainer>
                <CustomRow className="justify-content-between">
                    <Button className={classes.miniroot} href="https://icones8.fr/icons/" target="_blank" rel="noopener noreferrer">Icons8.fr</Button>
                    <Button href="mailto:adeline.simon31@hotmail.fr" className={classes.miniroot}>adeline.simon31@hotmail.fr</Button>
                </CustomRow>
                <CustomRow className="justify-content-between align-items-center">
                    <Button className={classes.miniroot} href="https://material-ui.com/" target="_blank" rel="noopener noreferrer">Material-UI</Button>
                    <div className={classes.miniphone}>0621692869</div>
                </CustomRow>
                <CustomRow className="justify-content-between">
                    <Button className={classes.miniroot} href="https://www.emailjs.com/" target="_blank" rel="noopener noreferrer">Service EmailJS</Button>
                    <Button className={classes.miniroot} href="https://www.github.com/isyviel" target="_blank" rel="noopener noreferrer">Github</Button>
                </CustomRow>
                <CustomRow className="justify-content-between">
                    <Button className={classes.miniroot} href="https://pages.github.com/" target="_blank" rel="noopener noreferrer">GitHubPages</Button>
                    <Button className={classes.miniroot} href="https://www.linkedin.com/in/adeline-simon-b8614018b" target="_blank" rel="noopener noreferrer">Linkedin</Button>
                </CustomRow>
            </CustomContainer>
        </Slide>
    )
}

export default MinFooter