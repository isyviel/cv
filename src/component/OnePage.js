import React, { useState, useContext, useEffect } from "react"
import styled from "styled-components"
import { Container } from "@bootstrap-styled/v4"
import Head from './Head'
import Content from './Content'
import { logRoles } from "@testing-library/react"
import Tech from "./content/Tech"
import Spacer from './common/Spacer'
import Technos from './Technos'

const CustomDiv = styled(Container)`
background: url(images/fondfond.png)  no-repeat fixed ;
background-size: 100%;
height : 2000px;

@media screen and (max-width: 1200px) {
    background-size: 150%;
  }

  @media screen and (max-width:576px) {
    height:1500px
 }
`

const OnePage = () => {
  
    /*TO DO changer la bannière par un automate p5*/
    const [isForm, setIsForm] = useState(false)
    return (
        <CustomDiv fluid>
            <Head isForm={isForm}/>
            <Technos/>
            <Spacer/>
            <Content/>
        </CustomDiv>
    )
}

export default OnePage