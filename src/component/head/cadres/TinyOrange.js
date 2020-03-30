import styled from "styled-components"
import { Container } from "@bootstrap-styled/v4"
import Colors from '../../common/theme/Colors'

export default styled(Container)`
    height: 15px;
    width: 15px;
    border-radius: 5px;
    box-shadow: inset 0 1px 3px 0 #FF5725, 0 2px 4px 0 rgba(0,0,0,0.5);
    background-color: ${Colors.orange};
    opacity: 70%;
    position: relative;
    top: 220px;
    left: 180px;
    z-index: 1;
    padding: 0;

    @media screen and (min-width: 1440px) {
        position: relative;
        left: 200px;
      }

    @media screen and (max-width: 1200px) {
        position: relative;
        top: 220px;
        left: 160px;
    }
    
    @media screen and (max-width:768px) {
        display: none;
    }
`