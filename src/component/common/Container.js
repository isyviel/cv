import styled from "styled-components"
import { Container } from "@bootstrap-styled/v4"
import Colors from './theme/Colors'

export default styled(Container)`
    margin: auto;
    padding: 20px 40px 30px 40px;
    border-radius: 15px;
    background-color: ${Colors.veryWhite};
    box-shadow: inset 0 1px 2px 0 #FFF, 
                inset 0 1px 3px 0 #FFF, 
                0 0px 0px 0 rgba(0,0,0,0.75), 
                0 0px 0px 0 rgba(0,0,0,0.94);
    z-index: 2;

`
