import React, { useState, useContext, useEffect } from "react"
import styled from "styled-components"
import {Row,Col} from "@bootstrap-styled/v4/lib"
import Bouton from '../../common/Bouton'

const CustomRow = styled(Row)`
    background: url(images/clicked.png) no-repeat center;
    height:100px;
    background-size:100%;
    width: 300px;
    padding-left: 50px;
    display: flex;
    justify-content: space-around;

    @media screen and (max-width:576px) {
        height: 30px;
        background: none;
        padding: 0px;
     }
`

const CustomCol = styled(Col)`
    height: 30px;
    background: none;
    padding: 0px;
`
const Active= ({content,...props}) => {

    return <CustomRow><Bouton content={content}/></CustomRow>
}

export default Active