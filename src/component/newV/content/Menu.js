import React from "react"
import styled from "styled-components"
import { Container,Row,Col } from "@bootstrap-styled/v4"
import Button from '@material-ui/core/Button'
import { makeStyles } from '@material-ui/styles';
import Colors from '../common/themes/Colors'

const ButtonRow = styled(Row)`
    margin-top: 10%;
`

const SquareContainer = styled(Container)`
    height: 450px;
    width: 5px;
    background-color: ${Colors.orange};
    margin : 10px;
    padding: 0 !important;
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
        top: 150px;
        z-index: ${isDeploy ? -1 : 1};
        padding-top: 5%;
    `
const useStyles = makeStyles((theme) => ({
    root: {
        background:"linear-gradient(145deg, #ff8300, #e66e00)", 
        boxShadow: "6px 6px 13px #8a4200, -6px -6px 13px #e6e6e6",
        color: "white",
        width: "75%",
        fontSize: "16px",
        '&:hover': {
            backgroundColor: "#FF7A00", 
            boxShadow: "inset 6px 6px 13px #b05400, inset -6px -6px 13px #ffa000",
          },     
}}))

const classes = useStyles()


    return (
        <MenuContainer>
                <Row className="justify-content-end align-items-center">
                    <Col xs="3">
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