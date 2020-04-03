import styled from "styled-components"
import { Container } from "@bootstrap-styled/v4"
import Colors from './theme/Colors'

export default styled(Container)`
    padding: 20px 70px 30px 70px;
    border-radius: 15px;
    background-color: ${Colors.veryGrey};
    box-shadow: inset 0 1px 2px 0 #FFF, 
                inset 0 1px 3px 0 #FFF, 
                0 2px 4px 0 #000;
`
