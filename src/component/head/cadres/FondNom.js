import styled from "styled-components"
import { Container } from "@bootstrap-styled/v4"

export default styled(Container)`
    height: 100px;
    width: 440px;
    border-radius: 30px;
    background-color: black;
    box-shadow: inset 0 1px 3px 0 #4F4F4F, 0 2px 4px 0 #000;
    position: relative;
    left: -150px;
    top: -70px;
    padding: 25px;

    @media screen and (max-width: 1200px) {
        position : relative;
        left: -150px;
        z-index:0;
    }

    @media screen and (max-width:992px) {
        padding: 25px 0px 0px 0px;
        position: relative;
        left: -120px;
        width: 280px;
    }

    @media screen and (max-width:768px) {
        height: 50px;
        width: 280px;
        border-radius: 30px;
        background-color: black;
        box-shadow: inset 0 1px 3px 0 #4F4F4F, 0 2px 4px 0 #000;
        position: static !important;
        padding: 15px;
        margin; 15px;
    }

    
    @media screen and (max-width:576px) {
        height: 50px;
        width: 400px;
        border-radius: 0px;
        background-color: rgba(255,255,255,0);
        box-shadow: none;
        position: static !important;
        padding: 25px;
    }

   

 
    `