import React from "react"
import styled from "styled-components"
import {QUOTE} from '../common/constantes/home'
import Colors from '../common/themes/Colors'
import Container from "@bootstrap-styled/v4/lib/Container"

const QuoteDiv = styled.div`
    font-size: 24px;
    font-style: italic;
    margin: 0;
   
    @media screen and (max-width:768px) {
        font-size: 18px;
    }
    @media screen and (max-width:596px) {
        text-align: center;
    }
  
`

const QuoteAuthor = styled.div`
    font-size: 24px;
    color: ${Colors.grey};
    text-align: right;

    font-family: 'Bangers';
    @media screen and (max-width:768px) {
        font-size: 18px;
    }
    @media screen and (max-width:596px) {

        text-align: center;
    }
   
`

const Quote = () => {
    return(
        <section>
            <QuoteDiv>{QUOTE[0]}</QuoteDiv>
            <QuoteAuthor>{QUOTE[1]}</QuoteAuthor>
        </section>
    )
}

export default Quote