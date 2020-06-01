import React from "react"
import styled from "styled-components"

const Title = styled.h1 `
    font-family: 'Bangers';
    font-size: 2em;
    margin: 0;
    @media screen and (max-width:992px) {
        font-size: 24px;
    }
    @media screen and (max-width:576px) {
        font-size: 20px;
    }
`

const CategoryTitle = ({isExp,isFormation,isProject,...props}) => {
    let title = ""
    if(isExp){
        title="Expérience"
    } else if (isFormation){
        title = "Formations"
    } else if (isProject){
        title = "Portfolio"
    } else {
        title = "Contact"
    }

    return <Title>{title}</Title>
}

export default CategoryTitle