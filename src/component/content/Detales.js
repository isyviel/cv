import React, { useState, useContext, useEffect } from "react"
import styled from "styled-components"
import Tech from './Tech'
import Exp from './Exp'
import Formation from './Formation'
import Colors from '../theme/Colors'

const CustomTitle = styled.div`
    text-align: center;
    font-family: "Baloo 2";
    font-size: 48px;
    font-weight: bold;
`

const CustomContent = styled.div`
    text-align: center;
    font-family: "Baloo 2";
    font-size: 30px;
    padding: 2%;
`
const Detales = ({ title, content,...props}) => {
    return (
        <div className="m-0">
            
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