import React, { useState, useContext, useEffect } from "react"
import { MDBPopover, MDBPopoverBody, MDBPopoverHeader, MDBBtn, MDBContainer } from "mdbreact";
import styled from "styled-components"

const CustomP = styled.p`
font-size: 28px;
`
const Phone = () => {
    return <MDBPopover
    placement="bottom"
    popover
    clickable
    id="popper2"
    >
    <MDBBtn><img src="images/phone.png" /></MDBBtn>
    <MDBPopoverBody>
        <CustomP>0621692869</CustomP>
       
      </MDBPopoverBody>
    
    </MDBPopover>
}
export default Phone