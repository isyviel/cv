import React, { useState, useContext, useEffect } from "react"
import styled from "styled-components"
import Colors from './Colors'

const CustDiv = styled.div`
   position: relative;
   top: 40px;

   @media screen and (max-width:768px) {
    margin: 25px;
  }
`
const Citation = styled.p`
    font-family: 'Annie Use Your Telescope', cursive;
    font-size: 30px;
    color: white;
    text-align: center;
    letter-spacing: 1.32px;

    @media screen and (max-width:992px) {
        letter-spacing: 0px;
        font-size: 25px;
    }

`
const Author = styled.p`
    font-family: 'Baloo 2';
    font-size: 18px;
    color: ${Colors.orange};
    text-align: center;

    @media screen and (max-width:992px) {
        font-size: 14px;
      }
`

const Perceval =() => {
    return (
    <CustDiv>
        <Citation>
            <p>"Faire un bond en avant, je sautille pas"</p> 
        </Citation>
        <Author>- Perceval, Kaamelott</Author>
    </CustDiv>)}

export default Perceval