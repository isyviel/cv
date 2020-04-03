import React from "react"
import Exp from './Exp'
import Container from '../../common/Container'


const ExpDetales = ({ isSales, experience, exp, ...props}) => {    
    return (
        <Container fluid>
                {isSales ? <Exp exp={experience[1]}/> : <Exp exp={experience[0]}/>}
        </Container>
    )
}

export default ExpDetales