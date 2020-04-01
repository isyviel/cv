import React from "react"
import Diplome from './Diplome'
import Container from '../../common/Container'
import {Row} from "@bootstrap-styled/v4/lib"

const DiplDetales = ({ diplomes, ...props}) => {    
    return (
        <Container fluid>
            <Row>
                {diplomes.map((diplome)=><Diplome diplome={diplome}/> )}
            </Row>
        </Container> )
}

export default DiplDetales