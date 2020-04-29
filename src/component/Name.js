import React from "react"
import {Container,Row} from "@bootstrap-styled/v4/lib"
import styled from "styled-components"
import Colors from './newV/common/themes/Colors'
import {TECHNOS} from './newV/common/constantes/home'

const NameContainer = styled(Container)`
    max-width: 100%;
    font-size: 48px;
    color: ${Colors.orange};
    margin: 30px 70px 0 0;
`

const NameRow = styled(Row)`
    justify-content: end;
`
const Name = () => {
    return(
        <NameContainer>
            <NameRow>
                <h1>Adeline Simon</h1>
            </NameRow>
            <NameRow>
                <h2>Développeuse Web et Web Mobile</h2>
            </NameRow>
            <NameRow>
                {TECHNOS.map((label,index) => {
                        return <h3 className="h4 text-dark" key={index}>{label}</h3>
                    })}
            </NameRow>
        </NameContainer>
    )
}

export default Name
