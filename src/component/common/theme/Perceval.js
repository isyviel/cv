import React, { useState, useContext, useEffect } from "react"
import styled from "styled-components"
import Colors from './Colors'

const CustDiv = styled.div`
   position: relative;
   top: 40px;
`

const Citation = styled.p`
    font-family: 'Annie Use Your Telescope', cursive;
    font-size: 30px;
    color: white;
    text-align: right;
    letter-spacing: 1.32px;
`
const Author = styled.p`
    font-family: 'Baloo 2';
    font-size: 18px;
    color: ${Colors.orange};
    text-align: right;
`

const Perceval =() => {
return (
<CustDiv>
    <Citation>
        <strong>"Faire un bond en avant, je sautille pas"</strong> 
    </Citation>
    <Author>- Perceval, Kaamelott</Author>
</CustDiv>)}

export default Perceval