import React from "react"
import styled from "styled-components"
import Exp from './Exp'
import Container from '../../common/Container'
import {Row} from "@bootstrap-styled/v4/lib"

const ExpContainer = styled(Container)`
    
`

const ExpDetales = ({ isSales, experience, exp, ...props}) => {    
    return (
        <ExpContainer>
            
                {isSales ? <Exp exp={experience[1]}/> : <Exp exp={experience[0]}/>}
            
        </ExpContainer>
    )
}

export default ExpDetales