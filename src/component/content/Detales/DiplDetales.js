import React from "react"
import Diplome from './Diplome'
import Container from '../../common/Container'
import {Row,Col} from "@bootstrap-styled/v4/lib"

const DiplDetales = ({ diplomes, ...props}) => {    
    return (
        <Container fluid>
            <Row>
                {diplomes.map((diplome,index)=><Col sm="12 mt-sm-2" md="6"><Diplome diplome={diplome} key={index}/></Col> )}
            </Row>
        </Container> )
}

export default DiplDetales