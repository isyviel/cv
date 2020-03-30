import React from "react"
import styled from "styled-components"
import Exp from './Exp'
import Container from '../../common/Container'
import {Row} from "@bootstrap-styled/v4/lib"

const ExpContainer = styled(Container)`
    border-radius: 15px;
    background-color: rgba(255,255,255,0.5);
    box-shadow: inset 0 1px 2px 0 #FFF, inset 0 1px 3px 0 #FFF, 0 2px 10px 0 rgba(0,0,0,0.75), 0 2px 10px 0 rgba(0,0,0,0.94);

    @media screen and (max-width:576px) {
       max-width: 90%;
       background-color: rgba(255,255,255,1);
    }
`

const ExpDetales = ({ isSales, experience, exp, ...props}) => {    
    return (
        <ExpContainer fluid>
            
                {isSales ? <Exp exp={experience[1]}/> : <Exp exp={experience[0]}/>}
            
        </ExpContainer>
    )
}

export default ExpDetales