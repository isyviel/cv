import styled from "styled-components"
import { Container } from "@bootstrap-styled/v4"

import Colors from '../theme/Colors'

export default styled(Container)`
    width: 95%;
    border-radius: 150px;
    box-shadow: 0 4px 6px 0 rgba(0,0,0,0.5);
    background-color: white;
    margin: auto;
    :hover{
        background-color: ${Colors.lightGrey};}
`
