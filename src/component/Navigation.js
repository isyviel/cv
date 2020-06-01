import React from "react"
import styled from "styled-components"
import { Row} from "@bootstrap-styled/v4"
import Container from "@bootstrap-styled/v4/lib/Container"

const Fleche = styled.img`
    height: 50px;
`
const FlecheG = styled.img`
    height: 50px;
`
const ArrowContainer = styled(Container)`
    display: none;
    height: 0px;
    @media screen and (max-width:576px) {
        height: 30px;
        display: flex;
        justify-content: center;
        margin-bottom: 10px;
    }
`
const Navigation = ({displayNext,displayPrevious,...props}) => {
    return (
        <ArrowContainer id="arrow-container">
            <Fleche src="images/fleche.png" 
            onClick={displayNext}  
            alt="icone fleche" 
            id="logo_fleche_droite"/>
            <FlecheG src="images/flecheg.png" 
            onClick={displayPrevious}  
            alt="icone fleche" 
            id="logo_fleche_droite"/>
        </ArrowContainer>     
    )
}

export default Navigation