import styled from "styled-components"
import { Container } from "@bootstrap-styled/v4"
import Colors from '../../common/theme/Colors'

export default styled(Container)`
    border-radius: 30px;
    background-color: ${Colors.orange};

    @media screen and (max-width:576px) {
        padding: 0px;
        text-align: center;
        box-shadow: none;
    }
`