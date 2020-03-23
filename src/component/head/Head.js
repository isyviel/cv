import React, { useState, useContext, useEffect } from "react"
import {Row,Col} from "@bootstrap-styled/v4/lib"
import Me from './Me'
import Title from './Title'
import Image from './Image'
import styled from "styled-components"


const Head = ({isForm,...props}) => {
    return (
        <Row>
             <Col><Me/></Col>  
            <Title/>           
        </Row>
    )
}

export default Head