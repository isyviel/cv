import React from "react"
import styled from "styled-components"

const Fleche = styled.img`
    position: fixed;
    right: 10px;
    bottom: 20px;
    cursor: pointer;

    @media screen and (max-width:576px) {
        height: 50px;
    }
`

const Navigation = ({displayNext,...props}) => {
    return (
        <Fleche src="images/fleche.png" onClick={displayNext}  alt="icone fleche" id="logo_fleche_droite"/>     
    )
}

export default Navigation