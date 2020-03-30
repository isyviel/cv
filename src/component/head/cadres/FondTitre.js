import styled from "styled-components"
import { Container } from "@bootstrap-styled/v4"
import Colors from '../../common/theme/Colors'

export default styled(Container)`
    height: 80px;
    border-radius: 15px;
    background-color: ${Colors.darkGrey};
    box-shadow: 0 2px 4px 0 #000;
    position: relative;
    top: -170px;
    z-index: 1;
    padding-top: 20px;
    
    @media screen and (min-width:1200px) {
        height: 90px;
        width: 700px;
        padding-top: 23px;
        z-index: 0;
    }

    @media screen and (max-width:768px) {
        height: 50px;
        position: static !important;
        padding: 5px;
    }

    @media screen and (max-width:576px) {
        height: 50px;
        border-radius: 0px;
        background-color: rgba(255,255,255,0);
        box-shadow: none;
        position: static !important;
        padding: 0px;
        text-align: center;
    }
`