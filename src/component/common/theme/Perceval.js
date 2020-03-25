import React, { useState, useContext, useEffect } from "react"
import styled from "styled-components"

const Citation = styled.p`
font-family: 'Annie Use Your Telescope', cursive;
    font-size: 30px;
    color: grey;
    text-align: center;
`
const Author = styled.p`
    font-family: 'Baloo 2';
    color: grey;
    padding-bottom : 50px;
    text-align: center;
`

const Perceval =() => {
return (
<div>
    <Citation>
        <strong>"Faire un bond en avant, je sautille pas"</strong> 
    </Citation>
    <Author>- Perceval, Kaamelott</Author>
</div>)}

export default Perceval