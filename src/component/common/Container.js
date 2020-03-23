import styled from "styled-components"
import { Container } from "@bootstrap-styled/v4"

import Colors from '../theme/Colors'

export default styled(Container)`
    border-radius: 8px;
    margin: auto;
    box-shadow: 0 4px 6px 0 rgba(0,0,0,0.5);
    padding: 50px 70px 30px 70px;
    :hover{
        background-color: ${Colors.lightGrey};}
`
