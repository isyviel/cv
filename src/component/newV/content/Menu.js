import React from "react"
import styled from "styled-components"
import { Container,Row,Col } from "@bootstrap-styled/v4"
import Button from '@material-ui/core/Button'
import { makeStyles } from '@material-ui/styles';
import Colors from '../common/themes/Colors'

const ButtonRow = styled(Row)`
    margin-top: 10%;
    @media screen and (max-width:576px) {
        margin-top: 10px;
    }
`

const SquareContainer = styled(Container)`
    height: 450px;
    width: 5px;
    background-color: ${Colors.orange};
    margin : 10px;
    padding: 0 !important;

    @media screen and (max-width:576px) {
        display: none;
    }
`

const Menu = ({
    fromProjectButton,
    fromFormationButton,
    fromExpButton,
    fromMailButton,
    isDeploy, 
    exp, 
    diplome, 
    projects, 
    ...props}) => { 

    const MenuContainer = styled(Container)`
        position: fixed;
        right: 10px;
        top: 15%;
        padding-top: 5%;
        max-width: 300px !important;

        @media screen and (max-width:576px) {
            margin: 0;
            padding: 0 0 0 0;
            top: 70%;
            left: 20px;
            width: 70%;
            z-index: 1;
            ${isDeploy &&("display : none;")}
        }
    `
const useStyles = makeStyles((theme) => ({
    root: {
        background:"linear-gradient(145deg, #ff8300, #e66e00)", 
        boxShadow: "6px 6px 13px #8a4200, -6px -6px 13px #e6e6e6",
        color: "white",
        width: "75%",
        fontFamily: 'Dosis',
        '&:hover': {
            backgroundColor: "#FF7A00", 
            boxShadow: "inset 6px 6px 13px #b05400, inset -6px -6px 13px #ffa000",
          },   
}}))

const classes = useStyles()


    return (
        <MenuContainer>
                <Row className="justify-content-end align-items-center">
                    <Col>
                        <ButtonRow className="justify-content-end align-items-center">
                            <Button className={classes.root} onClick={fromExpButton}>{exp}</Button>
                        </ButtonRow>
                        <ButtonRow className="justify-content-end align-items-center">
                            <Button className={classes.root} onClick={fromFormationButton} >{diplome}</Button>
                        </ButtonRow>
                        <ButtonRow className="justify-content-end align-items-center">
                            <Button className={classes.root} onClick={fromProjectButton}>{projects}</Button>
                        </ButtonRow>
                        <ButtonRow className="justify-content-end align-items-center">
                            <Button className={classes.root} onClick={fromMailButton}>Contact</Button>
                        </ButtonRow>
                    </Col>
                    <SquareContainer/>
                </Row>            
        </MenuContainer>
    )
        
}
export default Menu