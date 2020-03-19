import React, { useState, useContext, useEffect } from "react"
import styled from "styled-components"
import Container from './common/Container'
import Head from './Head'
import Content from './Content'
import Way from './common/Way'
import { Parallax } from 'react-scroll-parallax';


const CDiv1 = styled.div `
background: url(logo.png) center 0 no-repeat fixed;
height: 259px;
width: 937px;
`

const CDiv2 = styled.div `
background: url(moto.jpg) center 0 no-repeat fixed;
height: 259px;
width: 937px;
`
const CDiv3 = styled.div `
background: url(photo-casper-8.jpg) center 0 no-repeat fixed;
height: 259px;
width: 937px;
`
const OnePage = () => {

return (
    <div>
    <Head/>
    <Content/>
    </div>
)

}

export default OnePage