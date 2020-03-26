import React, { useState, useContext, useEffect } from "react"
import styled from "styled-components"
import { Container } from "@bootstrap-styled/v4"
import Head from './Head'
import Content from './Content'
import { logRoles } from "@testing-library/react"
import Tech from "./content/Tech"

const CustomDiv = styled.div`
background: url(images/rcet.png) no-repeat center;
background-size: 100%;
`

const OnePage = () => {
  
    /*TO DO changer la bannière par un automate p5*/
    const [isForm, setIsForm] = useState(false)
    return (
        <div>
            <Head isForm={isForm}/>
            <Content/>
    
        </div>
    )
}

export default OnePage