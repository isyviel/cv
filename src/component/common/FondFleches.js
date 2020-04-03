import styled from "styled-components"
import { Container } from "@bootstrap-styled/v4"
import Colors from './theme/Colors'

export default styled(Container)`
    width: 41px;
    border-radius: 30px;
    background-color: ${Colors.veryWhite};
    padding: 0.5px;

    @media screen and (max-width:576px) {
        width: 30px;
        height: 25px;
    }
`