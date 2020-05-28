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
    isExp,
    isFormation,
    isProject,
    isMail,
    isHome,
    exp, 
    diplome, 
    projects,
    isActive,
    ...props}) => { 

    const MenuContainer = styled(Container)`
        position: fixed;
        top: 30%;
        right: 10px;
        width: 300px;

        
        @media screen and (max-width:1200px) {
            padding: 0;
            max-width: 300px !important;
            ${isDeploy &&("display : none;")}
            ${isMail &&("display : none;")}
        }

        @media screen and (max-width:768px) {
            padding: 0;
            max-width: 200px !important;
            ${isDeploy &&("display : none;")}
            ${isMail &&("display : none;")}
        }
        @media screen and (max-width:576px) {
            right: 0;
            left: 5%;
            top: 300px;
            margin: auto;
        }
        
    `

const useStyles = makeStyles((theme) => ({
    root: {
        background: "linear-gradient(145deg, #ff8300, #e66e00)", 
        boxShadow: "6px 6px 13px #8a4200, -6px -6px 13px #e6e6e6",
        color: "white",
        width: "75%",
        fontFamily: 'Dosis',
        '&:hover': {
            backgroundColor: "#FF7A00", 
            boxShadow: "inset 6px 6px 13px #b05400, inset -6px -6px 13px #ffa000",
        },
        '&:focus': {
        backgroundColor: "#FFFFF",
        background: "rgba(255,255,255)",
        color: Colors.orange,
        boxShadow: "inset 6px 6px 13px #adadad, inset -6px -6px 13px #ffffff", 
        },          
    },
    active: {
        fontFamily: 'Dosis',
        width: "75%",
        backgroundColor: "#FFFFF",
        background: "rgba(255,255,255)",
        color: Colors.orange,
        boxShadow: "inset 6px 6px 13px #adadad, inset -6px -6px 13px #ffffff", 
    }
}))

const classes = useStyles()


    return (
        <MenuContainer>
                <Row className="justify-content-center align-items-center">
                    
                    <Col>
                        <ButtonRow className="justify-content-center align-items-center">
                            <Button className={isExp ? classes.active : classes.root} onClick={fromExpButton}>{exp}</Button>
                        </ButtonRow>
                        <ButtonRow className="justify-content-md-start justify-content-center align-items-center">
                            <Button className={isFormation ? classes.active : classes.root} onClick={fromFormationButton}>{diplome}</Button>
                        </ButtonRow>
                        <ButtonRow className="justify-content-center align-items-center">
                            <Button className={isProject ? classes.active : classes.root} onClick={fromProjectButton}>{projects}</Button>
                        </ButtonRow>
                        <ButtonRow className="justify-content-md-start justify-content-center align-items-center">
                            <Button className={isMail ? classes.active : classes.root} onClick={fromMailButton}>Contact</Button>
                        </ButtonRow>
                    </Col>
                    
                </Row>            
        </MenuContainer>
    )
        
}
export default Menu