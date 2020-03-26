import React, { useState, useContext, useEffect } from "react"
import styled from "styled-components"
import Exp from './Exp'
import Container from '../../common/Container'
import { Zoom } from '@material-ui/core';
import SmallOrange from '../../common/SmallOrange'
import MediumOrange from '../../common/MediumOrange'
import {Row,Col} from "@bootstrap-styled/v4/lib"

const ExpContainer = styled(Container)`
    border-radius: 15px;
    background-color: rgba(79,79,79,0.8);
    box-shadow: inset 0 1px 2px 0 #FFF, inset 0 1px 3px 0 #FFF, 0 2px 10px 0 rgba(0,0,0,0.75), 0 2px 10px 0 rgba(0,0,0,0.94);
    color: white;
`

const ExpDetales = ({ isSales, experience, exp, checked,...props}) => {    
    return (

    <ExpContainer fluid>
        <Row className="justify-content-around align-items-end">
            
            {isSales ? <Exp exp={experience[1]}/>
                : <Exp exp={experience[0]}/>}
            <Col xs="auto">
                <Row>
                    <MediumOrange/>
                    <SmallOrange/>
                </Row>
            </Col>
        </Row>
        
        
    </ExpContainer>
   
    )
}

export default ExpDetales