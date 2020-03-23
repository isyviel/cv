import React, { useState, useContext, useEffect } from "react"
import styled from "styled-components"
import Contact from '../component/head/Contact'
import Head from './head/Head'
import Content from './content/Content'
import Colors from './theme/Colors'

const CustomDiv = styled.div`
background: url(images/head.png) no-repeat top fixed;
background-size: 100%;
border-radius :25px;
`
const OnePage = () => {
    /*TO DO changer la bannière par un automate p5*/
    const [isForm, setIsForm] = useState(false)
    return (
        <div>
        <CustomDiv>
            <Head isForm={isForm}/>
            <Contact/>
        </CustomDiv>
            <Content/>
        </div>
    )
}

export default OnePage