import React from "react"
import styled from "styled-components"
import { Container,Row,Col } from "@bootstrap-styled/v4"
import Button from '@material-ui/core/Button'
import {MENU} from '../common/constantes/home'

import menuStyles from "../common/themes/menuTheme";

const ButtonRow = styled(Row)`
    margin-top: 10%;
    @media screen and (max-width:576px) {
        margin-top: 10px;
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
            top: 120px;
            margin: auto;
        }
        
    `
const click = [fromExpButton,fromFormationButton,fromProjectButton,fromMailButton]
const classes = menuStyles()

    return (
        <MenuContainer>
                <Row className="justify-content-center align-items-center">
                    <Col> 
                        {Object.entries(MENU).map(([key,value],i)=> {
                            return (
                                <ButtonRow key={i} className={value.classe}>
                                    <Button key={i} 
                                        className={(isExp && i === 0) || (isFormation && i===1) || (isProject && i===2) || (isMail && i === 3)? classes.active: classes.root} 
                                        onClick={click[i]}>
                                            {value.title}
                                    </Button>
                                </ButtonRow>
                            )
                        })}
                    </Col>
                </Row>            
        </MenuContainer>
    )
        
}
export default Menu