import React, { useState, useContext, useEffect } from "react"
import styled from "styled-components"
import {Row,Col} from "@bootstrap-styled/v4/lib"
import Bouton from './Bouton'


const RowExp = ({content,isActive,display,...props}) => {

    const CustomRow = styled(Row)`
    background:
    ${isActive ? "url(images/clicked.png)"  
    : "url(images/disactive.png)"}no-repeat center;
    
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

    return(
    <CustomRow isActive={isActive}><Bouton display={display} content={content}/></CustomRow>
    )
}

export default RowExp