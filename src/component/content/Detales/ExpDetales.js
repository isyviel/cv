import React, { useState, useContext, useEffect } from "react"
import styled from "styled-components"
import Exp from './Exp'
import Container from '../../common/Container'
import { Zoom } from '@material-ui/core';

const ExpDetales = ({ isSales, experience, exp, checked,...props}) => {    
    return (

    <Container fluid>
        
        {isSales ? <Zoom in={checked}><Exp elevation={4} points="0,100 50,00, 100,100" exp={experience[1]}/></Zoom> : <Zoom><Exp elevation={4} exp={experience[0]}/></Zoom>}
        
    </Container>
   
    )
}

export default ExpDetales