import React from "react"
import styled from "styled-components"
import { Row} from "@bootstrap-styled/v4"

const Fleche = styled.img`
    position: fixed;
    right: 10px;
    bottom: 20px;
    cursor: pointer;

    @media screen and (max-width:992px) {
        margin-right: 2%;
    }
    @media screen and (max-width:768px) {
        height: 80px;
    }
    @media screen and (max-width:576px) {
        bottom: 5px;
        height: 50px;
    }
`
const FlecheG = styled.img`
    position: fixed;
    right: 100px;
    rotate: 180deg;
    bottom: 20px;
    cursor: pointer;

    @media screen and (max-width:992px) {
        margin-right: 2%;
    }
    @media screen and (max-width:768px) {
        height: 80px;
    }
    @media screen and (max-width:576px) {
        bottom: 5px;
        height: 50px;
    }
`

const Navigation = ({displayNext,displayPrevious,...props}) => {
    return (
        <Row className="justify-content-end">
            <Fleche src="images/fleche.png" 
            onClick={displayNext}  
            alt="icone fleche" 
            id="logo_fleche_droite"/>
            <FlecheG src="images/fleche.png" 
            onClick={displayPrevious}  
            alt="icone fleche" 
            id="logo_fleche_droite"/>
        </Row>     
    )
}

export default Navigation