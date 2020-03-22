import React, { useState, useContext, useEffect } from "react"
import {Row,Col} from "@bootstrap-styled/v4/lib"
import Me from './Me'
import Title from './Title'
import Image from './Image'
import styled from "styled-components"

const CustomRow = styled(Row)`
background: url(images/head.png) no-repeat top fixed;
background-size: 100%;
border-radius : 20px;
padding: 0 15px 0 15px;

`


const Head = ({isForm,...props}) => {
    return (
        <CustomRow>
            {/* <Image/> */}
             <Me/>  
            <Title/>            
        </CustomRow>
    )
}

export default Head