import React from "react"
import { MDBPopover, MDBPopoverBody, MDBBtn } from "mdbreact";
import styled from "styled-components"
import ImageButton from '../../common/ImageButton'
import Colors from '../../common/theme/Colors'

const CustomP = styled.p`
font-size: 22px;
color: ${Colors.orange};

@media screen and (max-width:768px) {
    font-size: 18px;
}
`

const Phone = () => {
    return <MDBPopover
            placement="bottom"
            popover
            clickable
            id="popper2"
            >
            <MDBBtn><ImageButton src="images/phone.png" /></MDBBtn>
            <MDBPopoverBody>
                <CustomP>0621692869</CustomP>
            </MDBPopoverBody>
            </MDBPopover>
}

export default Phone