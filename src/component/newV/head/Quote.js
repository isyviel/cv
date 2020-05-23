import React from "react"
import styled from "styled-components"
import {QUOTE} from '../common/constantes/home'
import Colors from '../common/themes/Colors'

const QuoteDiv = styled.div`
    font-size: 24px;
    font-style: italic;
    color: white;
    margin: 0;
`

const QuoteAuthor = styled.div`
    font-size: 24px;
    color: ${Colors.orange};
    text-align: right;
    margin: 0 50px 0 0;
    font-family: 'Bangers';
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