import React, { useState, useContext, useEffect } from "react"
import styled from "styled-components"
import {Row} from "@bootstrap-styled/v4/lib"
import Bouton from './Bouton'

const CustomRow = styled(Row)`
    background: url(images/clicked.png) no-repeat center;
    height:100px;
    background-size:100%;
    width: 300px;
    padding-left: 50px;
    display: flex;
    justify-content: space-around;
`
const Active= ({content,...props}) => {

    return <CustomRow><Bouton content={content}/></CustomRow>
}

export default Active