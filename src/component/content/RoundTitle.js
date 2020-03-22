import React, { useState, useContext, useEffect } from "react"
import styled from "styled-components"

const CustomTitle = styled.div`
    text-align: center;
    font-family: "Baloo 2";
    font-size: 48px;
    font-weight: bold;
`

const RoundTitle = ({title,...props}) => {
    return(
        <CustomTitle>{title}</CustomTitle>
    )
}

export default RoundTitle