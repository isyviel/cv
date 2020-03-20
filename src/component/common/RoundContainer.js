import styled from "styled-components"
import { Container } from "@bootstrap-styled/v4"

import Colors from '../theme/Colors'

export default styled(Container)`
    border-radius : 150px;
    height: 240px;
    width: 240px;
    box-shadow: 0 4px 6px 0 rgba(0,0,0,0.5);
    background-color: white;
 
    :hover{
        background-color: ${Colors.lightGrey};}
`
