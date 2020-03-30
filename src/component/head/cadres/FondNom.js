import styled from "styled-components"
import { Container } from "@bootstrap-styled/v4"

export default styled(Container)`
    height: 100px;
    width: 440px;
    border-radius: 30px;
    background-color: black;
    box-shadow: inset 0 1px 3px 0 #4F4F4F, 0 2px 4px 0 #000;
    position: relative;
    left: -200px;
    top: 70px;
    padding: 25px;

    @media screen and (max-width: 1200px) {
        position : relative;
        left: -150px;
        top: 60px;
        z-index:0;
       
    }
    `