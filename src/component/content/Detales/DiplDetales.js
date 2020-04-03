import React from "react"
import Diplome from './Diplome'
import Container from '../../common/Container'
import {Row} from "@bootstrap-styled/v4/lib"

const DiplDetales = ({ diplomes, ...props}) => {    
    return (
        <Container fluid>
            <Row>
                {diplomes.map((diplome,index)=><Diplome diplome={diplome} key={index}/> )}
            </Row>
        </Container> )
}

export default DiplDetales