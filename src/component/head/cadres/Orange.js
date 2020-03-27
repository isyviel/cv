import styled from "styled-components"
import { Container } from "@bootstrap-styled/v4"
import Colors from '../../common/theme/Colors'

export default styled(Container)`
    height: 130px;
    width: 155px;
    border-radius: 30px;
    background-color: ${Colors.orange};
    opacity: 70%;
    box-shadow: inset 0 1px 3px 0 #FF5725, 0 2px 4px 0 rgba(0,0,0,0.5);
    position: relative;
    top: 150px;
    left: 45px;
`