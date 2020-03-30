import React, { useState, useContext, useEffect } from "react"
import styled from "styled-components"
import {Row,Col} from "@bootstrap-styled/v4/lib"
import Bouton from '../../common/Bouton'

const CustomRow = styled(Row)`
    background: url(images/disactive.png) no-repeat center;
    height:100px;
    background-size:100%;
    width: 230px;
    padding-left: 50px;
    display: flex;
    justify-content: space-around;

    @media screen and (max-width:768px) {
        height: 30px;
        background: none;
        padding: 0px;
       
    }
`
const Disactive= ({content, display,...props}) => {

    return (
        <CustomRow>
            <Bouton display={display} content={content}/>
        </CustomRow>)
}

export default Disactive
