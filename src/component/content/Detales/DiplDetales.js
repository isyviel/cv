import React from "react"
import styled from "styled-components"
import Diplome from './Diplome'
import Container from '../../common/Container'
import {Row} from "@bootstrap-styled/v4/lib"

const DiplContainer = styled(Container)`
    border-radius: 15px;
    background-color: rgba(255,255,255,0.5);
    box-shadow: inset 0 1px 2px 0 #FFF, inset 0 1px 3px 0 #FFF, 0 2px 10px 0 rgba(0,0,0,0.75), 0 2px 10px 0 rgba(0,0,0,0.94);  
`

const DiplDetales = ({ diplomes, ...props}) => {    
    return (
        <DiplContainer fluid>
            <Row>
                {diplomes.map((diplome)=><Diplome diplome={diplome}/> )}
            </Row>
        </DiplContainer> )
}

export default DiplDetales