import React from "react"
import styled from "styled-components"
import {QUOTE} from '../common/constantes/home'
import Colors from '../common/themes/Colors'
import Container from "@bootstrap-styled/v4/lib/Container"

const QuoteDiv = styled.div`
    font-size: 24px;
    font-style: italic;
    color: white;
    margin: 0;
    @media screen and (max-width:1200px) {
       margin-right: 10%;
    }
    @media screen and (max-width:992px) {
        display: none;
    }
`

const QuoteAuthor = styled.div`
    font-size: 24px;
    color: ${Colors.orange};
    text-align: center;
    
    font-family: 'Bangers';
    @media screen and (max-width:992px) {
        display: none;
    }
`

const Quote = () => {
    return(
        <Container fluid className="p-0">
            <QuoteDiv>{QUOTE[0]}</QuoteDiv>
            <QuoteAuthor>{QUOTE[1]}</QuoteAuthor>
        </Container>
    )
}

export default Quote