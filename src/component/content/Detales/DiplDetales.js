import React, { useState, useContext, useEffect } from "react"
import styled from "styled-components"
import Diplome from './Diplome'
import Container from '../../common/Container'
import {Row,Col} from "@bootstrap-styled/v4/lib"
import SmallOrange from '../../common/SmallOrange'
import MediumOrange from '../../common/MediumOrange'

const DiplContainer = styled(Container)`
    border-radius: 15px;
    background-color: rgba(79,79,79,0.8);
    box-shadow: inset 0 1px 2px 0 #FFF, inset 0 1px 3px 0 #FFF, 0 2px 10px 0 rgba(0,0,0,0.75), 0 2px 10px 0 rgba(0,0,0,0.94);
    color: white;
`

const DiplDetales = ({ diplomes, ...props}) => {    
    return (
    <DiplContainer fluid>
        <Row>
         {diplomes.map((diplome)=>
            <Diplome diplome={diplome}/>
        )}
        <Col xs="4"></Col>
        <Col>
                <Row>
                    <MediumOrange/>
                    <SmallOrange/>
                </Row>
            </Col>
        </Row>
    </DiplContainer>
   
    )
}

export default DiplDetales