import React, { useState, useContext, useEffect } from "react"
import styled from "styled-components"

const CustomName = styled.h1`
    color: #000;
    font-family: "Gill Sans MT";
    font-size: 48px;
    line-height: 56px;
    text-align: center;
    margin-top: 2%;
  `

const CustomJob = styled.h2`
    color: grey;
    font-family: Centaur;
    font-size: 48px;
    font-weight: bold;
    line-height: 55px;
    text-align: center;
`
const Title = ()=> {
    return(
        <div className="text-align-center">
            <CustomName>Adeline SIMON</CustomName>
            <CustomJob>Développeuse Web et Web Mobile</CustomJob>
        </div>
    )
}

export default Title