import React from "react"
import styled from "styled-components"

const Fleche = styled.img`
    position: fixed;
    right: 10px;
    bottom: 20px;
`

const Navigation = () => {
    return (
        <Fleche src="images/fleche.png"  alt="icone fleche" id="logo_fleche_droite"/>     
    )
}

export default Navigation