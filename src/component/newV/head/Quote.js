import React from "react"
import styled from "styled-components"
import {Row,Container} from "@bootstrap-styled/v4/lib"
import {QUOTE} from '../common/constantes/menu'
import Colors from '../common/themes/Colors'

const QuoteDiv = styled.div
`
    font-size: 24px;
    font-style: italic;
    color: white;
    margin-top:50px;
`

const QuoteAuthor = styled.div
`
    font-size: 24px;
    color: ${Colors.orange};
    text-align: right;
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