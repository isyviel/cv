import React, { useState, useContext, useEffect } from "react"
import styled from "styled-components"
import Tech from './Tech'
import Exp from './Exp'
import Formation from './Formation'

const CustomTitle = styled.p`
    text-align: center;
    font-family: Centaur;
    font-size: 48px;
    font-weight: bold;
`

const CustomContent = styled.p`
    text-align: center;
    font-family: "Gill Sans MT";
    font-size: 30px;
    padding: 2%;
`
const Detales = ({ title, content,...props}) => {
    return (
        <div>
            <CustomTitle>{title}</CustomTitle>
            <CustomContent>
                {title === "Techno" && (<Tech/>)}
                {title === "Exp" && (<Exp/>)}
                {title === "Formation" && (<Formation/>)}
            </CustomContent>
        </div>  
    )
}

export default Detales