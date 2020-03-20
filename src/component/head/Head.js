import React, { useState, useContext, useEffect } from "react"
import {Row,Col} from "@bootstrap-styled/v4/lib"
import Me from './Me'
import Title from './Title'
import styled from "styled-components"

const CustomRow = styled(Row)`

padding: 10px;
`


const Head = ({isForm,...props}) => {
    return (
        <CustomRow>
            <Me/> 
            <Title/>            
        </CustomRow>
    )
}

export default Head