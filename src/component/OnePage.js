import React, { useState, useContext, useEffect } from "react"
import styled from "styled-components"
import Contact from '../component/head/Contact'
import Head from './head/Head'
import Content from './content/Content'
import Colors from './theme/Colors'

const CustomDiv = styled.div`
background: url(images/head.png) no-repeat top fixed;
background-size: 100%;
box-shadow: 0 2px 2px 0 rgba(0,0,0,0.63);
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
            <Content />
        </div>
    )
}

export default OnePage