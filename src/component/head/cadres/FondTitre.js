import styled from "styled-components"
import { Container } from "@bootstrap-styled/v4"
import Colors from '../../common/theme/Colors'

export default styled(Container)`
    height: 90px;
    width: 700px;
    border-radius: 15px;
    background-color: ${Colors.darkGrey};
    box-shadow: 0 2px 4px 0 #000;
    position: absolute;
    left: 235px;
    top: 400px;
    padding-top: 23px;
`