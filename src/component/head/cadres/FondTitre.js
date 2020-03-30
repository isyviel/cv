import styled from "styled-components"
import { Container } from "@bootstrap-styled/v4"
import Colors from '../../common/theme/Colors'

export default styled(Container)`
    border-radius: 15px;
    background-color: ${Colors.darkGrey};
    box-shadow: 0 2px 4px 0 #000;
    position: relative;
    top: 50px;
    z-index: 2;
    @media screen and (min-width: 1440px) {
        position: relative;
        right: 300px;
        top: 50px;
        height: 90px;
        width: 700px;
        padding-top: 23px;
        z-index: 0;
      }
`