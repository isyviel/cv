import React, { useState, useContext, useEffect } from "react"
import styled from "styled-components"
import Diplome from './Diplome'
import Container from '../../common/Container'
import {Row,Col} from "@bootstrap-styled/v4/lib"

const DiplDetales = ({ diplomes, ...props}) => {    
    return (
    <Container fluid>
         {diplomes.map((diplome)=>
            <Diplome diplome={diplome}/>
        )}
    </Container>
   
    )
}

export default DiplDetales