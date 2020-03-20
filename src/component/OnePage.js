import React, { useState, useContext, useEffect } from "react"
import styled from "styled-components"

import Head from './Head'
import Content from './Content'
import Colors from './theme/Colors'

const CustomDiv = styled.div`
    padding: 20px;
`
const OnePage = () => {
    const [isForm, setIsForm] = useState(false)
    return (
        <CustomDiv>
            <Head isForm={isForm}/>
            <Content/>
        </CustomDiv>
    )
}

export default OnePage