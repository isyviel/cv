import React, { useState, useContext, useEffect } from "react"
import styled from "styled-components"
import Exp from './Exp'
import Container from '../../common/Container'
import { Zoom } from '@material-ui/core';

const ExpContainer = styled(Container)`
    border-radius: 15px;
    background-color: rgba(255,255,255,0.2);
    box-shadow: inset 0 1px 2px 0 #FFF, inset 0 1px 3px 0 #FFF, 0 2px 10px 0 rgba(0,0,0,0.75), 0 2px 10px 0 rgba(0,0,0,0.94);
    color: white;
`

const ExpDetales = ({ isSales, experience, exp, checked,...props}) => {    
    return (

    <ExpContainer fluid>
        
        {isSales ? <Zoom in={checked}><Exp elevation={4} points="0,100 50,00, 100,100" exp={experience[1]}/></Zoom> : <Zoom><Exp elevation={4} exp={experience[0]}/></Zoom>}
        
    </ExpContainer>
   
    )
}

export default ExpDetales