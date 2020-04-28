import React from "react"
import {Container} from "@bootstrap-styled/v4/lib"
import styled from "styled-components"
import Me from './newV/head/Me'
import Contact from './newV/head/Contact'
import Quote from './newV/head/Quote'
import Spacer from './newV/common/Spacer'

const HomeContainer = styled(Container)
`
    height: 900px;
    width: 500px;
    background-color: #333;
    box-shadow: 5px 5px 4px 0 rgba(0,0,0,0.62);
    position: fixed;
    padding-top: 50px;
`
const Head = () => {
    return (
        <HomeContainer>
            <Me/>
            <Spacer/>
            <Contact/>
            <Spacer/>
            <Quote/>
        </HomeContainer>
    
    )
}

export default Head