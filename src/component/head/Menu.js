import React from "react"
import {Row,Col} from "@bootstrap-styled/v4/lib"
import Bouton from '../common/Bouton'
import FondMenu from './cadres/FondMenu'

const AboutMe = ()=> {

    return(
            <Row className="justify-content-center mt-2">
                <Col xs="auto">
                    <FondMenu><Bouton href="#exp" variant="text" content="Expérience"/></FondMenu>
                </Col>
                <Col xs="auto">
                    <FondMenu><Bouton href="#dipl" variant="text" content="Formations"/></FondMenu>
                </Col>
            </Row>
    )
}
    
export default AboutMe