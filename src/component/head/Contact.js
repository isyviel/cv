import React, { useState, useContext, useEffect } from "react"
import {Row,Col} from "@bootstrap-styled/v4/lib"


const Contact = ()=> {
return(
    <Row className="ml-4 mt-4">
        <Col>Facebook</Col>
        <Col>Linkedin</Col>
        <Col>Mail</Col>
        <Col>Téléphone</Col>
        <Col>CV</Col>
    </Row>
)
}

export default Contact