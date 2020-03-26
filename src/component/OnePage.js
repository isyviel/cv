import React, { useState, useContext, useEffect } from "react"
import styled from "styled-components"
import { Container } from "@bootstrap-styled/v4"
import Head from './Head'
import Content from './Content'
import { logRoles } from "@testing-library/react"
import Tech from "./content/Tech"
import Spacer from './common/Spacer'

const CustomDiv = styled.div`
background: url(images/fondfond.png) no-repeat center;
background-size: 105%;
`

const OnePage = () => {
  
    /*TO DO changer la bannière par un automate p5*/
    const [isForm, setIsForm] = useState(false)
    return (
        <CustomDiv>
            <Head isForm={isForm}/>
            
            <Content/>
        </CustomDiv>
    )
}

export default OnePage